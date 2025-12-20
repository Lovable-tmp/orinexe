import { Helmet } from 'react-helmet';
import Layout from '@/components/layout/Layout';

const MentionsLegales = () => {
  return (
    <Layout>
      <Helmet>
        <title>Mentions Légales | ORINexe Lyon - Développement Web & DevSecOps</title>
        <meta name="description" content="Mentions légales du site ORINexe - Consultant DevSecOps et développement web & mobile à Lyon. Informations juridiques et conditions d'utilisation." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://orinexe.fr/mentions-legales" />
      </Helmet>

      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Mentions Légales
          </h1>

          <div className="space-y-8 text-muted-foreground">
            {/* Éditeur du site */}
            <section className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Éditeur du site
              </h2>
              <div className="space-y-2">
                <p><strong className="text-foreground">Raison sociale :</strong> ORINexe</p>
                <p><strong className="text-foreground">Forme juridique :</strong> Micro-entreprise</p>
                <p><strong className="text-foreground">Adresse :</strong> 15 Quai de la Gare d'Eau, 69009 Lyon, France</p>
                <p><strong className="text-foreground">Email :</strong> contact@orinexe.fr</p>
                <p><strong className="text-foreground">Activité :</strong> Conseil et développement en informatique - DevSecOps, développement web et mobile</p>
              </div>
            </section>

            {/* Hébergement */}
            <section className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Hébergement
              </h2>
              <div className="space-y-2">
                <p><strong className="text-foreground">Hébergeur :</strong> Lovable (Lovable Technologies)</p>
                <p><strong className="text-foreground">Site web :</strong> <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">lovable.dev</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Propriété intellectuelle
              </h2>
              <p className="leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, logos, éléments graphiques) est protégé par le droit d'auteur. 
                Toute reproduction, représentation ou diffusion, totale ou partielle, du contenu de ce site sans autorisation 
                préalable est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </section>

            {/* Protection des données */}
            <section className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Protection des données personnelles
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
                  vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="leading-relaxed">
                  Les informations collectées via le formulaire de contact sont uniquement utilisées pour répondre à vos demandes. 
                  Elles ne sont jamais transmises à des tiers sans votre consentement.
                </p>
                <p className="leading-relaxed">
                  Pour exercer vos droits ou pour toute question relative à vos données personnelles, 
                  contactez-nous à : <a href="mailto:contact@orinexe.fr" className="text-accent hover:underline">contact@orinexe.fr</a>
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Cookies
              </h2>
              <p className="leading-relaxed">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                Ces cookies ne collectent aucune donnée personnelle à des fins publicitaires ou de suivi commercial.
              </p>
            </section>

            {/* Responsabilité */}
            <section className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Limitation de responsabilité
              </h2>
              <p className="leading-relaxed">
                ORINexe s'efforce de fournir des informations exactes et à jour sur ce site. 
                Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées. 
                L'utilisation des informations de ce site se fait sous votre entière responsabilité.
              </p>
            </section>

            {/* Droit applicable */}
            <section className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Droit applicable
              </h2>
              <p className="leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. 
                En cas de litige, les tribunaux de Lyon seront seuls compétents.
              </p>
            </section>

            {/* Date de mise à jour */}
            <p className="text-sm text-muted-foreground/70 text-center pt-4">
              Dernière mise à jour : Décembre 2024
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default MentionsLegales;
