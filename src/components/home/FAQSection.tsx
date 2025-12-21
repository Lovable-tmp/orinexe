import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "@/components/ui/SectionHeader";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Quel est votre processus de développement ?",
    answer:
      "Nous suivons une méthodologie agile structurée : analyse des besoins, conception technique, développement itératif avec validations régulières, tests approfondis et mise en production. Chaque étape est documentée et vous êtes impliqué dans les décisions clés.",
  },
  {
    question: "Quels sont les délais de réalisation ?",
    answer:
      "Un MVP fonctionnel nécessite généralement 4 à 8 semaines. Une application complète peut prendre 3 à 6 mois selon la complexité. Nous établissons un planning détaillé dès le cadrage du projet.",
  },
  {
    question: "Comment assurez-vous la sécurité des applications ?",
    answer:
      "Nous appliquons les standards de sécurité reconnus (OWASP, ISO 27001) : chiffrement des données, authentification renforcée, audits de vulnérabilités, et surveillance continue. La sécurité est intégrée dès la conception.",
  },
  {
    question: "Proposez-vous un accompagnement après le lancement ?",
    answer:
      "Oui, nous assurons la maintenance corrective et évolutive, les mises à jour de sécurité, le monitoring de performance et le support technique. Des formules d'accompagnement adaptées à vos besoins sont disponibles.",
  },
  {
    question: "Travaillez-vous avec des entreprises de toutes tailles ?",
    answer:
      "Nous accompagnons PME, startups et entrepreneurs. Notre approche s'adapte à votre contexte, vos ressources et vos objectifs de croissance.",
  },
];

const FAQSection = () => {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeader
          badge="Questions fréquentes"
          title="Informations pratiques"
          titleId="faq-title"
          subtitle="Les réponses aux questions essentielles sur notre accompagnement."
        />

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-xl px-6 bg-card shadow-sm"
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
            Une question spécifique à votre projet ?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:underline transition-all"
          >
            Contactez-nous
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
