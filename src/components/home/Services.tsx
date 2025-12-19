import { 
  Rocket, 
  Shield, 
  Code, 
  TrendingUp, 
  RefreshCw 
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Déploiement automatisé",
      description: "Mises à jour rapides et fiables grâce à l'automatisation DevOps CI/CD. Gagnez en productivité avec des pipelines optimisés.",
      isSecurityCard: false,
    },
    {
      icon: Shield,
      title: "Cybersécurité ISO 27001",
      description: "Protection maximale dès la conception. Vos données et celles de vos clients sont sécurisées selon les standards internationaux.",
      isSecurityCard: true,
    },
    {
      icon: Code,
      title: "Développement sur mesure",
      description: "Applications adaptées à vos besoins, simples à utiliser, performantes et maintenables. Web et mobile, React, Node.js.",
      isSecurityCard: false,
    },
    {
      icon: TrendingUp,
      title: "Architecture scalable",
      description: "Votre solution grandit avec votre entreprise. Infrastructure optimisée pour performance et stabilité à long terme.",
      isSecurityCard: false,
    },
    {
      icon: RefreshCw,
      title: "Maintenance continue",
      description: "Mises à jour régulières, moins de bugs, expérience utilisateur optimale. Accompagnement technique personnalisé.",
      isSecurityCard: false,
    },
  ];

  return (
    <section 
      className="py-20 md:py-28 bg-secondary/50"
      aria-labelledby="services-title"
    >
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
            Nos expertises
          </span>
          <h2 id="services-title" className="section-title mb-6">
            Des solutions complètes pour votre croissance digitale
          </h2>
          <p className="section-subtitle mx-auto">
            De la conception au déploiement, nous vous accompagnons avec des solutions 
            techniques robustes et sécurisées.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isSecurityCard={service.isSecurityCard}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
