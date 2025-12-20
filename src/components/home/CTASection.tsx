import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section 
      className="py-20 md:py-28 bg-background"
      aria-labelledby="cta-section-title"
    >
      <div className="container-section">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-security/10 rounded-full blur-3xl" aria-hidden="true" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-primary-foreground">
                Premier échange gratuit
              </span>
            </div>
            
            <h2 id="cta-section-title" className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à donner vie à votre projet ?
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Pas besoin d'avoir tout planifié. Envoyez-nous un message avec votre idée, 
              on discute ensemble de comment la réaliser.
            </p>
            
            <a
              href="https://www.linkedin.com/in/orinexe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 inline-flex animate-pulse-glow"
              aria-label="Démarrer la discussion sur LinkedIn"
            >
              Discutons de votre idée
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>

            {/* Trust note */}
            <p className="mt-6 text-sm text-primary-foreground/60">
              Réponse garantie en 24h • Sans engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
