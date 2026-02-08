import { Helmet } from 'react-helmet';
import Layout from '@/components/layout/Layout';

const MentionsLegales = () => {
  const currentDate = new Date();
  const updateDate = currentDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

  return (
    <Layout>
      <Helmet>
        <title>Mentions Légales | ORINexe Lyon - Expert technique</title>
        <meta name="description" content="Mentions légales du site ORINexe - Expert technique CTO as a Service à Lyon. Informations juridiques et conditions d'utilisation." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://orinexe.fr/mentions-legales" />
      </Helmet>

      <section className="min-h-screen bg-background pt-24 pb-16" aria-labelledby="mentions-title">
        <div className="container-section max-w-4xl">
          <h1 id="mentions-title" className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Mentions Légales
          </h1>

          <div className="space-y-8 text-muted-foreground">
            {/* Éditeur du site */}
            <article className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Éditeur du site
              </h2>
              <dl className="space-y-2">
                <div>
                  <dt className="inline font-medium text-foreground">Raison sociale : </dt>
                  <dd className="inline">ORINexe</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">Forme juridique : </dt>
                  <dd className="inline">Micro-entreprise</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">SIRET : </dt>
                  <dd className="inline">En cours d'immatriculation</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">Adresse : </dt>
                  <dd className="inline">15 Quai de la Gare d'Eau, 69009 Lyon, France</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">Email : </dt>
                  <dd className="inline">
                    <a href="mailto:contact@orinexe.fr" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded">
                      contact@orinexe.fr
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">Activité : </dt>
                  <dd className="inline">Conseil en systèmes et logiciels informatiques - CTO as a Service, développement web et mobile, audit technique, cybersécurité</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">Directeur de la publication : </dt>
                  <dd className="inline">Le gérant de ORINexe</dd>
                </div>
              </dl>
            </article>

            {/* Hébergement */}
            <article className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Hébergement
              </h2>
              <dl className="space-y-2">
                <div>
                  <dt className="inline font-medium text-foreground">Hébergeur : </dt>
                  <dd className="inline">Lovable Technologies Inc.</dd>
                </div>
                <div>
                  <dt className="inline font-medium text-foreground">Site web : </dt>
                  <dd className="inline">
                    <a 
                      href="https://lovable.dev" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded"
                    >
                      lovable.dev
                    </a>
                  </dd>
                </div>
              </dl>
            </article>

            {/* Propriété intellectuelle */}
            <article className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Propriété intellectuelle
              </h2>
              <p className="leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, logos, éléments graphiques, code source) est la propriété exclusive d'ORINexe, 
                sauf mention contraire. Toute reproduction, représentation, modification ou diffusion, totale ou partielle, 
                du contenu de ce site sans autorisation préalable écrite est strictement interdite et constituerait une contrefaçon 
                sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </article>

            {/* Protection des données */}
            <article className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Protection des données personnelles (RGPD)
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Conformément au Règlement Général sur la Protection des Données (RGPD - UE 2016/679) et à la loi Informatique et Libertés modifiée, 
                  vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement (droit à l'oubli)</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition</li>
                </ul>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Responsable du traitement :</strong> ORINexe, 15 Quai de la Gare d'Eau, 69009 Lyon.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Finalités du traitement :</strong> Les données collectées via le système de prise de rendez-vous (Calendly) 
                  sont utilisées exclusivement pour la gestion des rendez-vous et le suivi de la relation commerciale.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Durée de conservation :</strong> Les données sont conservées pendant la durée de la relation commerciale 
                  et pendant 3 ans après le dernier contact, conformément aux obligations légales.
                </p>
                <p className="leading-relaxed">
                  Pour exercer vos droits ou pour toute question relative à vos données personnelles, contactez-nous à :{" "}
                  <a href="mailto:contact@orinexe.fr" className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded">
                    contact@orinexe.fr
                  </a>
                </p>
                <p className="leading-relaxed">
                  En cas de litige non résolu, vous pouvez adresser une réclamation à la CNIL (Commission Nationale de l'Informatique et des Libertés).
                </p>
              </div>
            </article>

            {/* Cookies */}
            <article className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Cookies
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  Ce site utilise des cookies strictement nécessaires à son fonctionnement technique. 
                  Ces cookies ne collectent aucune donnée personnelle à des fins publicitaires ou de profilage.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">Cookies tiers :</strong> Le widget de prise de rendez-vous Calendly peut déposer ses propres cookies. 
                  Pour plus d'informations, consultez la{" "}
                  <a 
                    href="https://calendly.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded"
                  >
                    politique de confidentialité de Calendly
                  </a>.
                </p>
              </div>
            </article>

            {/* Responsabilité */}
            <article className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Limitation de responsabilité
              </h2>
              <p className="leading-relaxed">
                ORINexe s'efforce de fournir des informations exactes et à jour sur ce site. 
                Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées. 
                L'utilisation des informations de ce site se fait sous votre entière responsabilité. 
                ORINexe ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site.
              </p>
            </article>

            {/* Liens externes */}
            <article className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Liens externes
              </h2>
              <p className="leading-relaxed">
                Ce site peut contenir des liens vers des sites externes (LinkedIn, Calendly, etc.). 
                ORINexe n'exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité 
                quant à leur contenu ou leurs pratiques en matière de protection des données.
              </p>
            </article>

            {/* Droit applicable */}
            <article className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Droit applicable et juridiction compétente
              </h2>
              <p className="leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. 
                En cas de litige relatif à l'interprétation ou à l'exécution des présentes, 
                et à défaut de résolution amiable, les tribunaux de Lyon seront seuls compétents.
              </p>
            </article>

            {/* Date de mise à jour */}
            <p className="text-sm text-muted-foreground/70 text-center pt-4">
              Dernière mise à jour : {updateDate}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MentionsLegales;
