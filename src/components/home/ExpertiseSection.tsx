import { 
  Smartphone, 
  Lock, 
  GitBranch, 
  Server, 
  Users 
} from "lucide-react";

const ExpertiseSection = () => {
  const expertises = [
    {
      icon: Smartphone,
      title: "Applications web & mobiles",
      description: "Sur mesure, performantes, faciles à utiliser",
    },
    {
      icon: Lock,
      title: "Sécurité intégrée",
      description: "ISO 27001, audits, protection des données",
    },
    {
      icon: GitBranch,
      title: "Déploiements automatisés",
      description: "CI/CD pipelines, Docker, GitLab CI/CD, Terraform",
    },
    {
      icon: Server,
      title: "Architecture évolutive",
      description: "Croissance sans ralentissement",
    },
    {
      icon: Users,
      title: "Accompagnement stratégique",
      description: "CTO-as-a-Service, suivi personnalisé",
    },
  ];

  return (
    <section 
      className="py-20 md:py-28 bg-background"
      aria-labelledby="expertise-title"
    >
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              Expertise technique
            </span>
            <h2 id="expertise-title" className="section-title mb-6">
              Une approche DevSecOps moderne et efficace
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nous combinons développement, sécurité et opérations pour créer 
              des applications qui performent et protègent. Notre méthodologie 
              garantit qualité, rapidité et conformité.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["React / Next.js", "Node.js / Python", "Docker / Kubernetes", "AWS / GCP / Azure"].map((tech) => (
                <div 
                  key={tech}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Expertise Cards */}
          <div className="space-y-4">
            {expertises.map((expertise, index) => (
              <div
                key={expertise.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="icon-box shrink-0">
                  <expertise.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {expertise.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {expertise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
