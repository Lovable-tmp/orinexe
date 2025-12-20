import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce que le DevSecOps et pourquoi est-ce important ?",
    answer:
      "Le DevSecOps intègre la sécurité dès le début du cycle de développement, plutôt qu'à la fin. Cela permet de détecter et corriger les vulnérabilités plus tôt, réduisant les coûts et les risques. Vos applications sont ainsi sécurisées dès la conception.",
  },
  {
    question: "Combien de temps faut-il pour développer une application web ou mobile ?",
    answer:
      "Le délai dépend de la complexité du projet. Un MVP peut être livré en 4 à 8 semaines, tandis qu'une application complète peut prendre 3 à 6 mois. Nous établissons un planning détaillé dès le début pour une visibilité totale.",
  },
  {
    question: "Qu'est-ce que le CI/CD et comment cela bénéficie-t-il à mon entreprise ?",
    answer:
      "CI/CD (Intégration Continue / Déploiement Continu) automatise les tests et les mises en production. Résultat : des mises à jour plus rapides, moins d'erreurs humaines, et une meilleure qualité logicielle. Votre équipe gagne en productivité.",
  },
  {
    question: "Qu'est-ce que la certification ISO 27001 apporte à mes projets ?",
    answer:
      "La norme ISO 27001 garantit que vos données et celles de vos clients sont protégées selon les standards internationaux. C'est un gage de confiance pour vos partenaires et clients, et souvent un prérequis pour les appels d'offres.",
  },
  {
    question: "Proposez-vous un accompagnement après la mise en production ?",
    answer:
      "Absolument ! Nous offrons des contrats de maintenance incluant mises à jour de sécurité, corrections de bugs, monitoring et évolutions fonctionnelles. Vous restez concentré sur votre cœur de métier.",
  },
  {
    question: "Travaillez-vous avec des startups et PME à Lyon ?",
    answer:
      "Oui, nous accompagnons principalement les PME et startups de la région lyonnaise et au-delà. Notre approche flexible s'adapte à vos ressources et ambitions, que vous soyez en phase de lancement ou de croissance.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos services DevOps, développement et cybersécurité.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold py-5 hover:no-underline hover:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline transition-all"
          >
            Contactez-nous
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
