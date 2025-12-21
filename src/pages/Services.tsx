import { 
  Shield, 
  Code, 
  Search, 
  Users, 
  GitBranch, 
  HeadphonesIcon,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: HeadphonesIcon,
      title: "CTO as a Service",
      subtitle: "Direction technique externalisée",
      description: "Bénéficiez d'une expertise technique de haut niveau sans embaucher à temps plein. Stratégie technologique, choix d'architecture, management d'équipe technique, revue de code et accompagnement dans vos décisions clés.",
      benefits: [
        "Stratégie technique alignée sur vos objectifs business",
        "Accompagnement dans le recrutement technique",
        "Revue et amélioration de l'existant",
        "Disponibilité flexible selon vos besoins"
      ],
      isHighlight: true,
    },
    {
      icon: Search,
      title: "Audit technique",
      subtitle: "État des lieux de votre système",
      description: "Analyse approfondie de votre infrastructure, de vos applications et de vos pratiques. Identification des points faibles, des risques de sécurité et des opportunités d'optimisation avec un plan d'action concret.",
      benefits: [
        "Audit de sécurité et conformité",
        "Analyse de performance",
        "Revue d'architecture",
        "Recommandations prioritaires"
      ],
      isHighlight: false,
    },
    {
      icon: Code,
      title: "Développement sur mesure",
      subtitle: "Applications web et mobiles",
      description: "Conception et développement d'applications adaptées à vos besoins métier. Sites vitrines, applications de gestion, outils internes, applications mobiles... Du cahier des charges à la mise en production.",
      benefits: [
        "Interface intuitive et moderne",
        "Code maintenable et évolutif",
        "Tests automatisés",
        "Documentation complète"
      ],
      isHighlight: false,
    },
    {
      icon: GitBranch,
      title: "Pipelines CI/CD",
      subtitle: "Automatisation du déploiement",
      description: "Mise en place de chaînes d'intégration et de déploiement continu. Vos mises à jour sont testées automatiquement et déployées en production de manière fiable, sans intervention manuelle risquée.",
      benefits: [
        "Déploiements automatisés",
        "Tests à chaque modification",
        "Rollback instantané si problème",
        "Environnements de staging"
      ],
      isHighlight: false,
    },
    {
      icon: Users,
      title: "Aide au recrutement",
      subtitle: "Évaluation technique des candidats",
      description: "Vous recrutez des profils techniques mais ne savez pas comment évaluer leurs compétences ? Je vous accompagne dans la définition du poste, la rédaction de l'offre et l'évaluation technique des candidats.",
      benefits: [
        "Définition du profil recherché",
        "Tests techniques adaptés",
        "Entretiens techniques",
        "Évaluation objective"
      ],
      isHighlight: false,
    },
    {
      icon: Shield,
      title: "Sécurité & Conformité",
      subtitle: "Protection de vos données",
      description: "Audit de sécurité, mise en conformité RGPD, implémentation des bonnes pratiques de protection des données. Certification ISO 27001 Lead Implementor pour un accompagnement selon les standards internationaux.",
      benefits: [
        "Audit de vulnérabilités",
        "Mise en conformité RGPD",
        "Politique de sécurité",
        "Formation des équipes"
      ],
      isHighlight: false,
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Services | CTO as a Service, Audit, Développement - ORINexe Lyon</title>
        <meta 
          name="description" 
          content="Découvrez nos services : CTO externalisé, audit technique, développement d'applications, CI/CD, aide au recrutement et sécurité. Accompagnement sur mesure à Lyon." 
        />
        <meta 
          name="keywords" 
          content="CTO as a service Lyon, audit technique, développement application, pipeline CI/CD, recrutement développeur, sécurité informatique, consultant technique Lyon" 
        />
        <link rel="canonical" href="https://orinexe.fr/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4 animate-fade-up">
              Nos services
            </span>
            <h1 className="section-title mb-6 animate-fade-up delay-100">
              Un accompagnement adapté à vos besoins
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              Que vous ayez besoin d'un coup de main ponctuel ou d'un partenaire technique sur la durée, 
              nous intervenons là où vous en avez besoin.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="services-list-title">
        <div className="container-section">
          <h2 id="services-list-title" className="sr-only">Liste de nos services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`p-8 rounded-2xl border transition-all duration-300 animate-fade-up ${
                  service.isHighlight 
                    ? "bg-primary text-primary-foreground border-primary lg:col-span-2" 
                    : "bg-card border-border hover:border-accent/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={service.isHighlight ? "lg:flex lg:items-start lg:gap-12" : ""}>
                  <div className={service.isHighlight ? "lg:flex-1" : ""}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      service.isHighlight ? "bg-accent" : "bg-accent/10"
                    }`}>
                      <service.icon className={`w-7 h-7 ${
                        service.isHighlight ? "text-accent-foreground" : "text-accent"
                      }`} aria-hidden="true" />
                    </div>
                    <p className={`text-sm font-medium mb-2 ${
                      service.isHighlight ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                      {service.subtitle}
                    </p>
                    <h3 className={`text-2xl font-bold mb-4 ${
                      service.isHighlight ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`leading-relaxed mb-6 ${
                      service.isHighlight ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {service.description}
                    </p>
                  </div>
                  <div className={service.isHighlight ? "lg:flex-1" : ""}>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${
                            service.isHighlight ? "text-accent" : "text-accent"
                          }`} aria-hidden="true" />
                          <span className={`text-sm ${
                            service.isHighlight ? "text-primary-foreground/90" : "text-foreground"
                          }`}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary/50" aria-labelledby="services-cta-title">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="services-cta-title" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Vous ne savez pas par où commencer ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Chaque situation est unique. Échangeons pour identifier ensemble 
              la meilleure façon de vous accompagner.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Discutons de votre projet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
