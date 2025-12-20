import { Shield, Code, GitBranch, Server, Award, Heart, Target, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";

const About = () => {
  const strengths = [
    {
      icon: Shield,
      title: "Sécurité intégrée",
      description: "On pense sécurité dès le premier jour. Vos données et celles de vos clients sont protégées à chaque étape.",
      color: "accent",
    },
    {
      icon: Award,
      title: "Normes internationales",
      description: "On suit les meilleures pratiques mondiales (ISO 27001) pour une protection maximale de vos informations.",
      color: "security",
    },
    {
      icon: Code,
      title: "Applications sur mesure",
      description: "Sites web, applications mobiles, outils métier... On crée exactement ce dont vous avez besoin.",
      color: "accent",
    },
    {
      icon: Server,
      title: "Prêt pour la croissance",
      description: "Votre activité décolle ? Votre application suit le rythme, sans ralentir ni planter.",
      color: "accent",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Humain d'abord",
      description: "On parle votre langue, pas celle des développeurs. Vous comprenez tout ce qu'on fait.",
    },
    {
      icon: Target,
      title: "Résultats concrets",
      description: "Pas de bla-bla, des solutions qui marchent et qui apportent de la valeur à votre entreprise.",
    },
    {
      icon: Sparkles,
      title: "Qualité premium",
      description: "On livre du travail soigné, testé, et dont on est fiers. Votre réussite, c'est notre réputation.",
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>À propos d'ORINexe | Expert digital à Lyon pour PME et startups</title>
        <meta 
          name="description" 
          content="Découvrez ORINexe, votre partenaire digital à Lyon. On crée des applications web et mobiles sécurisées pour les entreprises qui veulent grandir sereinement." 
        />
        <link rel="canonical" href="https://orinexe.fr/a-propos" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4 animate-fade-up">
              Qui sommes-nous
            </span>
            <h1 className="section-title mb-6 animate-fade-up delay-100">
              Votre partenaire digital, en clair
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              Chez ORINexe, on croit que la technologie doit être simple et accessible. 
              Notre mission : vous aider à réussir en ligne, sans vous perdre dans la technique.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background" aria-labelledby="values-title">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 id="values-title" className="text-2xl md:text-3xl font-bold text-foreground">
              Ce qui nous guide
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

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-secondary/30" aria-labelledby="mission-title">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Text */}
            <div>
              <h2 id="mission-title" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Notre promesse : la technologie sans prise de tête
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Basé à Lyon, ORINexe accompagne les PME et startups qui veulent 
                  se développer en ligne sans devenir des experts en informatique.
                </p>
                <p>
                  <strong className="text-foreground">On traduit vos idées en solutions concrètes.</strong> Vous nous 
                  expliquez ce que vous voulez accomplir, on s'occupe de la technique. 
                  Pas de jargon, pas de mauvaises surprises.
                </p>
                <p>
                  Chaque projet est unique. On prend le temps de comprendre votre métier 
                  pour créer des outils qui vous ressemblent et qui font vraiment la différence.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: "10+", label: "Projets livrés" },
                  { value: "100%", label: "Clients satisfaits" },
                  { value: "5+", label: "Années d'expérience" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Strengths */}
            <div className="space-y-4">
              {strengths.map((strength, index) => (
                <div
                  key={strength.title}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={strength.color === "security" ? "icon-box-security shrink-0" : "icon-box shrink-0"}>
                    <strength.icon 
                      className={`w-6 h-6 ${strength.color === "security" ? "text-security" : "text-accent"}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary" aria-labelledby="cta-title">
        <div className="container-section text-center">
          <h2 id="cta-title" className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Discutons de vos idées. Premier échange sans engagement, 
            juste pour voir comment on peut vous aider.
          </p>
          <a
            href="https://www.linkedin.com/in/orinexe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
            aria-label="Prendre contact sur LinkedIn"
          >
            Parlons de votre projet
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
