import { ArrowRight, Shield, Zap, CheckCircle } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Section principale"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-section py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 animate-fade-up">
            <SectionBadge variant="light">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Consultant Digital — Lyon
              </span>
            </SectionBadge>
          </div>

          {/* H1 Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Transformez votre idée en{" "}
            <span className="text-gradient">application performante</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Conception et développement d'applications web et mobiles sur mesure. 
            Un accompagnement clair, des solutions robustes et sécurisées.
          </p>

          {/* Value propositions */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-up delay-300">
            {[
              "Livraison maîtrisée",
              "Architecture sécurisée",
              "Accompagnement dédié",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
            <a
              href="/contact"
              className="btn-primary text-base px-8 py-4"
              aria-label="Discuter de votre projet"
            >
              Démarrer un projet
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up delay-500">
            {[
              { icon: Shield, label: "Sécurité", sublabel: "Normes ISO 27001" },
              { icon: Zap, label: "Automatisation", sublabel: "Déploiement continu" },
              { label: "10+", sublabel: "Projets livrés" },
              { label: "100%", sublabel: "Satisfaction client" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
              >
                {item.icon ? (
                  <item.icon className="w-8 h-8 text-accent mb-2" aria-hidden="true" />
                ) : (
                  <span className="text-2xl font-bold text-accent mb-2">{item.label}</span>
                )}
                {item.icon && (
                  <span className="text-sm font-semibold text-primary-foreground">{item.label}</span>
                )}
                <span className="text-xs text-primary-foreground/60">{item.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
