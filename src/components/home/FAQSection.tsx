import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Je n'y connais rien en technique, c'est grave ?",
    answer:
      "Pas du tout ! C'est même notre spécialité. On traduit vos besoins en solutions concrètes, sans jamais vous noyer dans le jargon. Vous nous expliquez ce que vous voulez, on s'occupe de tout le reste.",
  },
  {
    question: "Combien de temps pour créer mon application ?",
    answer:
      "Pour une première version fonctionnelle, comptez 4 à 8 semaines. Une application complète peut prendre 3 à 6 mois selon la complexité. On vous donne un planning clair dès le départ, sans mauvaise surprise.",
  },
  {
    question: "Comment mes données sont-elles protégées ?",
    answer:
      "On applique les mêmes normes de sécurité que les grandes entreprises (ISO 27001). Concrètement : vos données sont chiffrées, les accès sont contrôlés, et on surveille en permanence pour prévenir toute intrusion.",
  },
  {
    question: "Que se passe-t-il après le lancement ?",
    answer:
      "On ne vous abandonne pas ! Maintenance, mises à jour de sécurité, corrections, améliorations... On reste disponible pour faire évoluer votre application selon vos besoins.",
  },
  {
    question: "C'est quoi l'avantage d'automatiser les mises à jour ?",
    answer:
      "Imaginez : dès qu'une amélioration est prête, elle est en ligne automatiquement, testée et validée. Moins d'erreurs humaines, des nouveautés plus rapides, et vous qui gagnez du temps.",
  },
  {
    question: "Vous travaillez avec les petites entreprises ?",
    answer:
      "Absolument ! PME, startups, entrepreneurs : on adapte notre accompagnement à votre taille et votre budget. Que vous lanciez votre premier projet ou que vous grandissiez vite, on a des solutions pour vous.",
  },
];

const FAQSection = () => {
  // Schema.org FAQ structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-background" aria-labelledby="faq-title">
      {/* SEO: FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Vos questions
          </span>
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            On vous dit tout
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Les réponses aux questions que vous vous posez sûrement. 
            Et si vous en avez d'autres, on est là pour y répondre !
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
            Une question qui n'est pas dans la liste ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline transition-all"
          >
            Écrivez-nous, on répond vite
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
              aria-hidden="true"
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
