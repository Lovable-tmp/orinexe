import { 
  Rocket, 
  Shield, 
  Code, 
  TrendingUp, 
  RefreshCw 
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Déploiement automatisé",
      description: "Livraison continue et déploiements fiables grâce à des pipelines CI/CD robustes. Vos mises à jour sont en production rapidement et sans risque.",
      isSecurityCard: false,
    },
    {
      icon: Shield,
      title: "Sécurité intégrée",
      description: "Protection de vos données et de celles de vos utilisateurs selon les standards reconnus. Chiffrement, contrôle d'accès et surveillance proactive.",
      isSecurityCard: true,
    },
    {
      icon: Code,
      title: "Développement sur mesure",
      description: "Applications web et mobiles conçues selon vos besoins métier. Interface intuitive, architecture évolutive et code maintenable.",
      isSecurityCard: false,
    },
    {
      icon: TrendingUp,
      title: "Scalabilité garantie",
      description: "Infrastructure cloud dimensionnée pour accompagner votre croissance. Performance optimale, quelle que soit la charge.",
      isSecurityCard: false,
    },
    {
      icon: RefreshCw,
      title: "Maintenance continue",
      description: "Suivi post-lancement, mises à jour de sécurité, évolutions fonctionnelles et support technique pour pérenniser votre investissement.",
      isSecurityCard: false,
    },
  ];

  return (
    <section 
      className="py-20 md:py-28 bg-secondary/50"
      aria-labelledby="services-title"
    >
      <div className="container-section">
        <SectionHeader
          badge="Nos expertises"
          title="Un accompagnement complet"
          titleId="services-title"
          subtitle="De la conception au déploiement, nous prenons en charge l'ensemble du cycle de développement de votre application."
        />

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
