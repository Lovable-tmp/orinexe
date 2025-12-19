import { Shield, Code, GitBranch, Server, Award } from "lucide-react";
import Layout from "@/components/layout/Layout";

const About = () => {
  const strengths = [
    {
      icon: Shield,
      title: "DevSecOps & CI/CD",
      description: "Intégration de la sécurité à chaque étape du développement. Pipelines automatisés pour des déploiements fiables.",
      color: "accent",
    },
    {
      icon: Award,
      title: "Cybersécurité ISO 27001",
      description: "Conformité aux standards internationaux. Audits de sécurité, protection des données sensibles.",
      color: "security",
    },
    {
      icon: Code,
      title: "Développement Web & Mobile",
      description: "React, Next.js, Node.js, React Native. Applications modernes, performantes et maintenables.",
      color: "accent",
    },
    {
      icon: Server,
      title: "Architecture scalable",
      description: "Infrastructure cloud-native, microservices, containerisation Docker et Kubernetes.",
      color: "accent",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4 animate-fade-up">
              À propos
            </span>
            <h1 className="section-title mb-6 animate-fade-up delay-100">
              Une expertise complète, humaine et premium
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              Chez ORINexe, nous combinons DevSecOps, DevOps automatisé et développement 
              Fullstack pour créer des applications fiables, sécurisées et performantes.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Notre mission : Simplifier la technologie pour votre succès
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Basé à Lyon, ORINexe accompagne les PME et startups dans leur transformation 
                  digitale. Notre approche allie expertise technique de haut niveau et 
                  communication accessible.
                </p>
                <p>
                  Nous ne parlons pas jargon. Nous traduisons vos besoins métier en solutions 
                  techniques robustes, sécurisées et évolutives. Chaque projet est unique, 
                  chaque solution est sur mesure.
                </p>
                <p>
                  Notre engagement : livrer des applications qui fonctionnent, protègent 
                  vos données et grandissent avec votre entreprise.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: "10+", label: "Projets" },
                  { value: "100%", label: "Satisfaction" },
                  { value: "5+", label: "Années" },
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
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-section text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Prêt à collaborer avec nous ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Discutons de votre projet et voyons comment nous pouvons vous aider 
            à atteindre vos objectifs.
          </p>
          <a
            href="https://www.linkedin.com/in/orinexe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4"
          >
            Contactez-nous
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
