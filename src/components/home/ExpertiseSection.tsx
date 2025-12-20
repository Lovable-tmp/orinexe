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
      title: "Applications web et mobiles",
      description: "Sites et applis qui marchent partout : ordinateur, tablette, téléphone",
    },
    {
      icon: Lock,
      title: "Sécurité maximale",
      description: "Protection de vos données et celles de vos clients, conforme aux normes",
    },
    {
      icon: GitBranch,
      title: "Mises à jour automatiques",
      description: "Plus besoin de tout faire à la main, on automatise pour vous",
    },
    {
      icon: Server,
      title: "Infrastructure solide",
      description: "Votre site tient la charge même avec beaucoup de visiteurs",
    },
    {
      icon: Users,
      title: "Un expert à vos côtés",
      description: "Conseil stratégique et accompagnement personnalisé tout au long du projet",
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
              Notre savoir-faire
            </span>
            <h2 id="expertise-title" className="section-title mb-6">
              La technologie au service de votre business
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              On ne vous noie pas sous le jargon technique. Notre mission : créer des outils 
              digitaux qui boostent vraiment votre activité. Des applications qui marchent, 
              qui sont sécurisées, et qui grandissent avec vous.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Sites web modernes", "Apps mobiles", "Tableaux de bord", "E-commerce"].map((tech) => (
                <div 
                  key={tech}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary"
                >
                  <div className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
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
                  <expertise.icon className="w-6 h-6 text-accent" aria-hidden="true" />
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
