import { Linkedin, LucideIcon } from "lucide-react";

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
];

interface SocialLinksProps {
  variant?: "footer" | "inline";
}

const SocialLinks = ({ variant = "footer" }: SocialLinksProps) => {
  if (variant === "inline") {
    return (
      <div className="flex items-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          aria-label={social.label}
        >
          <social.icon size={18} />
        </a>
      ))}
    </div>
  );
};

export { socialLinks };
export default SocialLinks;
