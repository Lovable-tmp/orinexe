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
      title: "Mises à jour en un clic",
      description: "Fini les longues attentes pour les modifications. Grâce à notre système automatisé, vos mises à jour sont déployées rapidement et sans erreur.",
      isSecurityCard: false,
    },
    {
      icon: Shield,
      title: "Vos données bien protégées",
      description: "On sécurise votre application comme un coffre-fort. Vos informations et celles de vos clients sont protégées selon les normes les plus strictes.",
      isSecurityCard: true,
    },
    {
      icon: Code,
      title: "Une application qui vous ressemble",
      description: "Pas de solution générique. On crée votre outil sur mesure, facile à utiliser au quotidien, que ce soit sur ordinateur ou mobile.",
      isSecurityCard: false,
    },
    {
      icon: TrendingUp,
      title: "Prêt pour la croissance",
      description: "Votre entreprise grandit ? Votre application suit le rythme. Plus de clients, plus de données : tout roule sans ralentir.",
      isSecurityCard: false,
    },
    {
      icon: RefreshCw,
      title: "On reste à vos côtés",
      description: "Après le lancement, on continue à prendre soin de votre application. Mises à jour, améliorations, support : vous n'êtes jamais seul.",
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
            Ce qu'on fait pour vous
          </span>
          <h2 id="services-title" className="section-title mb-6">
            Tout ce qu'il faut pour réussir en ligne
          </h2>
          <p className="section-subtitle mx-auto">
            De l'idée au lancement, on s'occupe de tout. Vous vous concentrez sur votre métier, 
            on gère la technique.
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
