import { useState } from "react";
import { MapPin, Mail, Linkedin, Instagram, Youtube, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Merci de renseigner votre nom").max(100, "Le nom est trop long"),
  email: z.string().trim().email("Cette adresse email ne semble pas valide").max(255, "Email trop long"),
  message: z.string().trim().min(1, "N'oubliez pas votre message !").max(2000, "Message trop long (2000 caractères max)"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message bien reçu !",
      description: "Nous reviendrons vers vous rapidement.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/orinexe", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/orinexe", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@orinexe", label: "YouTube" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Contactez ORINexe | Expert technique à Lyon</title>
        <meta 
          name="description" 
          content="Une idée de projet ? Contactez ORINexe à Lyon. Discutons de votre application web ou mobile, sans jargon technique." 
        />
        <link rel="canonical" href="https://orinexe.fr/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4 animate-fade-up">
              Contact
            </span>
            <h1 className="section-title mb-6 animate-fade-up delay-100">
              Parlons de votre projet
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              Une idée, une question ? Nous sommes à votre écoute pour échanger sur vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-background" aria-labelledby="contact-form-title">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 id="contact-form-title" className="text-2xl font-bold text-foreground mb-2">
                Écrivez-nous
              </h2>
              <p className="text-muted-foreground mb-6">
                Décrivez votre projet en quelques mots, on revient vers vous rapidement.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Comment vous appelez-vous ?
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Votre nom"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Votre email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                      errors.email ? "border-destructive" : "border-border"
                    }`}
                    placeholder="votre@email.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Parlez-nous de votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Décrivez votre idée, vos besoins, vos questions..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer mon message
                      <Send className="w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up delay-200">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Où nous trouver
              </h2>

              <div className="space-y-6 mb-10">
                {/* Address */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                  <div className="icon-box shrink-0">
                    <MapPin className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Notre adresse</h3>
                    <p className="text-muted-foreground">
                      15 Quai de la Gare d'Eau<br />
                      69009 Lyon, France
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                  <div className="icon-box shrink-0">
                    <Mail className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Par email</h3>
                    <a 
                      href="mailto:contact@orinexe.fr"
                      className="text-accent hover:underline"
                    >
                      contact@orinexe.fr
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  Suivez-nous
                </h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                      aria-label={`Suivez-nous sur ${social.label}`}
                    >
                      <social.icon size={20} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              {/* LinkedIn CTA */}
              <div className="mt-10 p-6 rounded-xl bg-primary text-primary-foreground">
                <div className="flex items-center gap-3 mb-2">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <h3 className="font-semibold">Envie de discuter directement ?</h3>
                </div>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  LinkedIn est souvent le moyen le plus rapide pour échanger. 
                  On répond généralement dans l'heure !
                </p>
                <a
                  href="https://www.linkedin.com/in/orinexe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  aria-label="Nous contacter sur LinkedIn"
                >
                  <Linkedin size={18} aria-hidden="true" />
                  Discuter sur LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
