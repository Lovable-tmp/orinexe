import { MapPin, Mail, Linkedin, Instagram, Youtube, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Contact = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/orinexe", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/orinexe", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@orinexe", label: "YouTube" },
  ];

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Contactez ORINexe | Expert technique à Lyon</title>
        <meta 
          name="description" 
          content="Prenez rendez-vous avec ORINexe à Lyon. Discutons de votre projet web ou mobile lors d'un appel découverte gratuit." 
        />
        <meta name="keywords" content="contact développeur Lyon, rendez-vous consultant technique, CTO as a service contact, expert informatique Lyon" />
        <link rel="canonical" href="https://orinexe.fr/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30" aria-labelledby="contact-hero-title">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4 animate-fade-up">
              Contact
            </span>
            <h1 id="contact-hero-title" className="section-title mb-6 animate-fade-up delay-100">
              Parlons de votre projet
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              Réservez un créneau pour un échange de 30 minutes, sans engagement. 
              Nous discuterons de vos besoins et des solutions adaptées.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="calendly-section-title">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Calendly Widget - Takes 3/5 of the space */}
            <div className="lg:col-span-3 animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-box">
                  <Calendar className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h2 id="calendly-section-title" className="text-2xl font-bold text-foreground">
                    Réservez un appel découverte
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    30 minutes pour comprendre vos besoins
                  </p>
                </div>
              </div>
              
              {/* Calendly inline widget with accessibility */}
              <div 
                className="calendly-inline-widget rounded-xl overflow-hidden border border-border"
                data-url="https://calendly.com/orinexe?hide_gdpr_banner=1&primary_color=00a8e8"
                style={{ minWidth: "320px", height: "700px" }}
                role="region"
                aria-label="Calendrier de prise de rendez-vous Calendly"
                tabIndex={0}
              />
              
              {/* Fallback link for accessibility */}
              <noscript>
                <p className="mt-4 p-4 bg-secondary rounded-lg text-center">
                  <a 
                    href="https://calendly.com/orinexe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    Cliquez ici pour accéder au calendrier de réservation
                  </a>
                </p>
              </noscript>
            </div>

            {/* Contact Info - Takes 2/5 of the space */}
            <div className="lg:col-span-2 animate-fade-up delay-200">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Autres moyens de contact
              </h2>

              <div className="space-y-6 mb-10">
                {/* Address */}
                <article className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                  <div className="icon-box shrink-0">
                    <MapPin className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                    <address className="text-muted-foreground not-italic">
                      15 Quai de la Gare d'Eau<br />
                      69009 Lyon, France
                    </address>
                  </div>
                </article>

                {/* Email */}
                <article className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                  <div className="icon-box shrink-0">
                    <Mail className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:contact@orinexe.fr"
                      className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                    >
                      contact@orinexe.fr
                    </a>
                  </div>
                </article>

                {/* LinkedIn */}
                <article className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                  <div className="icon-box shrink-0">
                    <Linkedin className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/company/orinexe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                    >
                      Suivez notre actualité
                    </a>
                  </div>
                </article>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4">
                  Retrouvez-nous
                </h3>
                <nav aria-label="Réseaux sociaux" className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                      aria-label={`Suivez-nous sur ${social.label} (nouvelle fenêtre)`}
                    >
                      <social.icon size={20} aria-hidden="true" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Info box */}
              <aside className="p-6 rounded-xl bg-primary text-primary-foreground" aria-labelledby="info-box-title">
                <h3 id="info-box-title" className="font-semibold mb-2">
                  Pourquoi un appel découverte ?
                </h3>
                <ul className="text-sm text-primary-foreground/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-accent" aria-hidden="true">✓</span>
                    <span>Comprendre votre contexte et vos enjeux</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent" aria-hidden="true">✓</span>
                    <span>Identifier les solutions adaptées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent" aria-hidden="true">✓</span>
                    <span>Définir les prochaines étapes ensemble</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent" aria-hidden="true">✓</span>
                    <span>Sans engagement de votre part</span>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;