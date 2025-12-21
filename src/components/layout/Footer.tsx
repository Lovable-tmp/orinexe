import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              Consultant en développement d'applications et infrastructure cloud. 
              Solutions sur mesure pour PME et startups.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin size={16} />
              <span>Lyon, France</span>
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
              <li>
                <Link to="/mentions-legales" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-base mb-4">Retrouvez-nous</h3>
            <SocialLinks variant="footer" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} ORINexe. Tous droits réservés.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Développement Web & Mobile • Cloud • Sécurité
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
