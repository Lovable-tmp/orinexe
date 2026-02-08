import { Linkedin, Instagram, Youtube, LucideIcon } from "lucide-react";

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/orinexe", 
    label: "LinkedIn" 
  },
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/orinexe", 
    label: "Instagram" 
  },
  { 
    icon: Youtube, 
    href: "https://www.youtube.com/@orinexe", 
    label: "YouTube" 
  },
];

interface SocialLinksProps {
  variant?: "footer" | "inline";
}

const SocialLinks = ({ variant = "footer" }: SocialLinksProps) => {
  if (variant === "inline") {
    return (
      <nav aria-label="Réseaux sociaux" className="flex items-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
            aria-label={`Suivez-nous sur ${social.label} (nouvelle fenêtre)`}
          >
            <social.icon size={20} aria-hidden="true" />
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav aria-label="Réseaux sociaux" className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          aria-label={`Suivez-nous sur ${social.label} (nouvelle fenêtre)`}
        >
          <social.icon size={18} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
};

export { socialLinks };
export default SocialLinks;
