import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
            <h2 id="cta-section-title" className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à concrétiser votre projet ?
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Partagez-nous votre vision. Nous analyserons ensemble la meilleure approche 
              pour transformer votre idée en solution performante.
            </p>
            
            <Link
              to="/contact"
              className="btn-primary text-base px-8 py-4 inline-flex"
              aria-label="Démarrer une discussion"
            >
              Démarrer une discussion
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
