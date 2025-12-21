import { ArrowRight, Shield, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SectionBadge from "@/components/ui/SectionBadge";
import { Button } from "@/components/ui/button";
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
                Expert technique — Lyon
              </span>
            </SectionBadge>
          </div>

          {/* H1 Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Votre partenaire technique{" "}
            <span className="text-gradient">pour chaque étape</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Audit, développement, accompagnement CTO, sécurité... 
            Que ce soit pour un projet complet ou une mission ponctuelle, 
            vous avez un expert à vos côtés.
          </p>

          {/* Value propositions */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-up delay-300">
            {[
              "CTO as a Service",
              "Audit & Conseil",
              "Développement sur mesure",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-400">
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Discutons de vos besoins
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Découvrir nos services
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up delay-500">
            {[
              { icon: Shield, label: "ISO 27001", sublabel: "Certifié sécurité" },
              { icon: Zap, label: "CI/CD", sublabel: "Automatisation" },
              { label: "5+", sublabel: "Années d'expérience" },
              { label: "10+", sublabel: "Projets livrés" },
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
