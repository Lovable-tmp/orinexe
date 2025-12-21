import { 
  HeadphonesIcon, 
  Shield, 
  Code, 
  Search, 
  GitBranch,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: HeadphonesIcon,
      title: "CTO as a Service",
      description: "Une direction technique expérimentée sans embauche. Stratégie, architecture, management d'équipe et accompagnement décisionnel.",
      isSecurityCard: false,
    },
    {
      icon: Search,
      title: "Audit technique",
      description: "Analyse de votre infrastructure, de vos pratiques et de votre sécurité. Identification des risques et plan d'action concret.",
      isSecurityCard: false,
    },
    {
      icon: Code,
      title: "Développement sur mesure",
      description: "Applications web et mobiles conçues pour vos besoins métier. Interface intuitive, code maintenable, documentation complète.",
      isSecurityCard: false,
    },
    {
      icon: GitBranch,
      title: "Pipelines CI/CD",
      description: "Automatisation des tests et déploiements. Vos mises à jour sont en production rapidement et sans risque.",
      isSecurityCard: false,
    },
    {
      icon: Shield,
      title: "Sécurité & Conformité",
      description: "Audit de vulnérabilités, mise en conformité RGPD, implémentation des bonnes pratiques selon les standards ISO 27001.",
      isSecurityCard: true,
    },
  ];

  return (
    <section 
      className="py-20 md:py-28 bg-secondary/50"
      aria-labelledby="services-title"
    >
      <div className="container-section">
        <SectionHeader
          badge="Nos interventions"
          title="Un accompagnement à la carte"
          titleId="services-title"
          subtitle="Projet complet ou mission ponctuelle, nous intervenons là où vous en avez besoin."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
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

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="outline" size="lg" className="gap-2">
              Voir tous nos services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
