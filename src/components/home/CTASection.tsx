import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background" aria-label="Appel à action">
      <div className="container-section">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-security/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <MessageCircle className="w-12 h-12 text-accent mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à lancer votre projet ?
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Un simple message LinkedIn suffit pour démarrer. Discutons de vos besoins 
              et construisons ensemble votre solution digitale.
            </p>
            
            <a
              href="https://www.linkedin.com/in/orinexe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4 inline-flex"
            >
              Contactez-nous sur LinkedIn
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
