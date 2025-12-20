import { ArrowRight, Shield, Zap, CheckCircle } from "lucide-react";
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
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-section py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 animate-fade-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Expert Digital à Lyon
            </span>
          </div>

          {/* H1 Title - SEO optimized */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Créez votre{" "}
            <span className="text-gradient">application web ou mobile</span>{" "}
            en toute sérénité
          </h1>

          {/* Subtitle - More engaging and accessible */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Vous avez une idée ? Nous la transformons en application performante et sécurisée. 
            <strong className="text-primary-foreground"> Zéro jargon technique</strong>, 
            juste des résultats concrets pour votre entreprise.
          </p>

          {/* Value propositions */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up delay-250">
            {[
              "Livraison rapide",
              "Budget maîtrisé",
              "Sécurité garantie",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <a
              href="https://www.linkedin.com/in/orinexe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 animate-pulse-glow"
              aria-label="Discuter de votre projet sur LinkedIn"
            >
              Parlons de votre projet
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Trust indicators - More accessible labels */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up delay-400">
            {[
              { icon: Shield, label: "Protection", sublabel: "Données sécurisées" },
              { icon: Zap, label: "Automatisé", sublabel: "Mises à jour sans stress" },
              { label: "10+", sublabel: "Projets réussis" },
              { label: "100%", sublabel: "Clients satisfaits" },
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

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
