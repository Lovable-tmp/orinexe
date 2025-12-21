import { 
  Shield, 
  Code, 
  Award, 
  Heart, 
  Target, 
  Sparkles,
  GraduationCap,
  Briefcase,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Clarté avant tout",
      description: "On parle votre langue, pas celle des développeurs. Vous comprenez chaque décision.",
    },
    {
      icon: Target,
      title: "Résultats concrets",
      description: "Des solutions qui fonctionnent et qui apportent de la valeur à votre entreprise.",
    },
    {
      icon: Sparkles,
      title: "Exigence de qualité",
      description: "Un travail soigné, testé, documenté. Votre réussite engage notre réputation.",
    },
  ];

  const certifications = [
    "ISO 27001 Lead Implementor",
    "Architecte SI spécialisation IA/Big Data (Bac+5)",
    "Intégrateur Développeur Web et Mobile (Bac+2)",
  ];

  const experiences = [
    {
      period: "2024 - Présent",
      role: "CTO as a Service & Freelance",
      description: "Accompagnement de startups et PME dans leur développement technique. Sites web, applications métier, conseil en architecture.",
    },
    {
      period: "2023 - 2024",
      role: "Ingénieur Logiciel",
      description: "Développement d'une solution de gestion scolaire type Pronote. Architecture, développement et déploiement.",
    },
    {
      period: "2022 - 2023",
      role: "Développeur Full Stack",
      description: "Applications web pour les services publics : Jobard Événements, Charte des 1000, Maison Métropolitaine pour l'Insertion et l'Emploi.",
    },
    {
      period: "2021 - 2022",
      role: "Développeur Solution Omnicanal",
      description: "Logiciel de caisse, bornes de commande, back-office. Écosystème complet de vente et gestion.",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>À propos | Expert technique certifié ISO 27001 - ORINexe Lyon</title>
        <meta 
          name="description" 
          content="Découvrez le parcours du fondateur d'ORINexe : expert cybersécurité certifié ISO 27001, architecte SI spécialisé IA/Big Data, 5 ans d'expérience en développement." 
        />
        <meta 
          name="keywords" 
          content="expert cybersécurité Lyon, ISO 27001 consultant, architecte SI IA Big Data, développeur senior Lyon, CTO freelance" 
        />
        <link rel="canonical" href="https://orinexe.fr/a-propos" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4 animate-fade-up">
              À propos
            </span>
            <h1 className="section-title mb-6 animate-fade-up delay-100">
              Un partenaire technique de confiance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              Derrière ORINexe, un expert passionné par la technologie 
              et déterminé à la rendre accessible aux entreprises qui veulent grandir.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="founder-title">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Bio */}
            <div>
              <h2 id="founder-title" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Le fondateur
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Expert en cybersécurité et développement, je combine une double compétence rare : 
                  la capacité à construire des applications performantes et l'expertise pour les sécuriser 
                  selon les standards internationaux.
                </p>
                <p>
                  Certifié <strong className="text-foreground">ISO 27001 Lead Implementor</strong>, je maîtrise 
                  les normes de sécurité qui comptent pour vos données et celles de vos clients.
                </p>
                <p>
                  Mon parcours m'a permis de travailler sur des projets variés : solutions omnicanal, 
                  applications pour les services publics, outils de gestion scolaire... Chaque expérience 
                  a enrichi ma vision de ce qu'est un logiciel bien construit.
                </p>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  Formations et certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-secondary/50 rounded-xl">
                {[
                  { value: "5+", label: "Années d'expérience" },
                  { value: "10+", label: "Projets livrés" },
                  { value: "100%", label: "Clients satisfaits" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Experience Timeline */}
            <div>
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" />
                Parcours professionnel
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div 
                    key={exp.period}
                    className="relative pl-6 border-l-2 border-border hover:border-accent transition-colors animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent" />
                    <span className="text-sm font-medium text-accent">{exp.period}</span>
                    <h4 className="font-semibold text-foreground mt-1">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30" aria-labelledby="values-title">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 id="values-title" className="text-2xl md:text-3xl font-bold text-foreground">
              Ce qui guide notre travail
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 rounded-xl bg-card border border-border animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="expertise-title">
        <div className="container-section">
          <h2 id="expertise-title" className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Domaines d'expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Code,
                title: "Développement",
                items: ["Applications web", "Applications mobiles", "Outils métier", "APIs et intégrations"]
              },
              {
                icon: Shield,
                title: "Sécurité",
                items: ["Audit de sécurité", "Conformité RGPD", "ISO 27001", "Protection des données"]
              },
              {
                icon: Award,
                title: "Architecture",
                items: ["Architecture SI", "Cloud & DevOps", "IA & Big Data", "Scalabilité"]
              }
            ].map((domain, index) => (
              <div 
                key={domain.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <domain.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">{domain.title}</h3>
                <ul className="space-y-2">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary" aria-labelledby="cta-title">
        <div className="container-section text-center">
          <h2 id="cta-title" className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Vous avez un projet en tête ? Discutons de la meilleure façon 
            de le concrétiser.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Prendre contact
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
