import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/orinexe", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/orinexe", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@orinexe", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-xl">ORINexe</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm max-w-md mb-6">
              Consultant DevSecOps & Développement Web & Mobile basé à Lyon. 
              Solutions sécurisées et performantes pour PME et startups ambitieuses.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin size={16} />
              <span>15 Quai de la Gare d'Eau, 69009 Lyon</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-base mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-base mb-4">Suivez-nous</h3>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} ORINexe. Tous droits réservés.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Développement Web & Mobile • DevOps • Cybersécurité ISO 27001
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
