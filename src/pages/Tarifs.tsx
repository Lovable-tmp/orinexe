import { Check, ArrowRight, Clock, Calendar, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";

const Tarifs = () => {
  const formulas = [
    {
      icon: Clock,
      name: "Intervention ponctuelle",
      description: "Pour un besoin précis et délimité",
      price: "Sur devis",
      priceDetail: "selon la mission",
      features: [
        "Audit technique",
        "Développement d'une fonctionnalité",
        "Mise en place CI/CD",
        "Évaluation de candidats",
        "Conseil stratégique"
      ],
      ideal: "Idéal pour un coup de main ciblé",
      isPopular: false,
    },
    {
      icon: Calendar,
      name: "Accompagnement mensuel",
      description: "Un partenaire technique disponible",
      price: "À partir de 2 000€",
      priceDetail: "par mois",
      features: [
        "Nombre de jours définis ensemble",
        "Disponibilité garantie",
        "Suivi régulier de vos projets",
        "Conseils techniques continus",
        "Réactivité sur vos urgences"
      ],
      ideal: "Idéal pour un accompagnement régulier",
      isPopular: true,
    },
    {
      icon: Briefcase,
      name: "Projet clé en main",
      description: "De l'idée à la mise en production",
      price: "Sur devis",
      priceDetail: "forfait projet",
      features: [
        "Analyse des besoins",
        "Conception et développement",
        "Tests et validation",
        "Déploiement en production",
        "Accompagnement post-lancement"
      ],
      ideal: "Idéal pour un projet complet",
      isPopular: false,
    },
  ];

  const faqs = [
    {
      question: "Comment se déroule un premier échange ?",
      answer: "On prend 30 minutes ensemble pour comprendre votre contexte, vos besoins et vos contraintes. C'est sans engagement et ça permet de voir si on peut travailler ensemble efficacement."
    },
    {
      question: "Vous intervenez uniquement à Lyon ?",
      answer: "Je suis basé à Lyon mais j'interviens partout en France, principalement à distance. Les réunions importantes peuvent se faire en présentiel dans la région lyonnaise."
    },
    {
      question: "Comment sont calculés les tarifs ?",
      answer: "Chaque projet est différent. Après notre premier échange, je vous fais une proposition adaptée à votre situation : soit un forfait pour un projet délimité, soit un accompagnement au temps passé."
    },
    {
      question: "Que se passe-t-il après la livraison ?",
      answer: "Je reste disponible pour assurer le suivi. Selon vos besoins, on peut prévoir une période de garantie, de la maintenance évolutive, ou un accompagnement continu."
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Tarifs et Formules | Accompagnement technique sur mesure - ORINexe</title>
        <meta 
          name="description" 
          content="Découvrez nos formules d'accompagnement : intervention ponctuelle, accompagnement mensuel ou projet clé en main. Tarifs adaptés à vos besoins." 
        />
        <meta 
          name="keywords" 
          content="tarif développeur Lyon, prix CTO as a service, devis développement application, consultant technique tarif, accompagnement technique prix" 
        />
        <link rel="canonical" href="https://orinexe.fr/tarifs" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4 animate-fade-up">
              Tarifs
            </span>
            <h1 className="section-title mb-6 animate-fade-up delay-100">
              Des formules adaptées à votre réalité
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              Pas de grille rigide. On construit ensemble une collaboration 
              qui correspond à vos besoins et à votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-background" aria-labelledby="formulas-title">
        <div className="container-section">
          <h2 id="formulas-title" className="sr-only">Nos formules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formulas.map((formula, index) => (
              <article
                key={formula.name}
                className={`relative p-8 rounded-2xl border transition-all duration-300 animate-fade-up ${
                  formula.isPopular 
                    ? "bg-primary text-primary-foreground border-primary scale-105 md:scale-110 z-10" 
                    : "bg-card border-border hover:border-accent/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {formula.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Recommandé
                  </span>
                )}
                
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  formula.isPopular ? "bg-accent" : "bg-accent/10"
                }`}>
                  <formula.icon className={`w-6 h-6 ${
                    formula.isPopular ? "text-accent-foreground" : "text-accent"
                  }`} aria-hidden="true" />
                </div>

                <h3 className={`text-xl font-bold mb-2 ${
                  formula.isPopular ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {formula.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  formula.isPopular ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}>
                  {formula.description}
                </p>

                <div className="mb-6">
                  <span className={`text-2xl font-bold ${
                    formula.isPopular ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {formula.price}
                  </span>
                  <span className={`text-sm ml-2 ${
                    formula.isPopular ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {formula.priceDetail}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {formula.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                        formula.isPopular ? "text-accent" : "text-accent"
                      }`} aria-hidden="true" />
                      <span className={`text-sm ${
                        formula.isPopular ? "text-primary-foreground/90" : "text-foreground"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className={`text-xs mb-6 ${
                  formula.isPopular ? "text-primary-foreground/60" : "text-muted-foreground"
                }`}>
                  {formula.ideal}
                </p>

                <Link to="/contact" className="block">
                  <Button 
                    variant={formula.isPopular ? "secondary" : "default"} 
                    className="w-full"
                  >
                    Discuter de cette formule
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30" aria-labelledby="faq-tarifs-title">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-tarifs-title" className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={faq.question}
                  className="bg-card border border-border rounded-xl p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary" aria-labelledby="tarifs-cta-title">
        <div className="container-section text-center">
          <h2 id="tarifs-cta-title" className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Chaque collaboration commence par un échange. 
            Prenons le temps de comprendre vos besoins.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="gap-2">
              Prendre contact
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Tarifs;
