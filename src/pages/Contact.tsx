import { useState } from "react";
import { MapPin, Mail, Linkedin, Instagram, Youtube, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom est trop long"),
  email: z.string().trim().email("Email invalide").max(255, "Email trop long"),
  message: z.string().trim().min(1, "Le message est requis").max(2000, "Message trop long"),
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
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
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
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wide mb-4 animate-fade-up">
              Contact
            </span>
            <h1 className="section-title mb-6 animate-fade-up delay-100">
              Contactez-nous et lançons votre projet ensemble
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up delay-200">
              Une question, un projet ? Nous sommes à votre écoute. 
              Réponse garantie sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
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
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Adresse email
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
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
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
                    placeholder="Décrivez votre projet ou posez votre question..."
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
                      Envoyer le message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-up delay-200">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-10">
                {/* Address */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                  <div className="icon-box shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      15 Quai de la Gare d'Eau<br />
                      69009 Lyon, France
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                  <div className="icon-box shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
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
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* LinkedIn CTA */}
              <div className="mt-10 p-6 rounded-xl bg-primary text-primary-foreground">
                <h3 className="font-semibold mb-2">Préférez LinkedIn ?</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Envoyez-nous un message direct et obtenez une réponse rapide.
                </p>
                <a
                  href="https://www.linkedin.com/in/orinexe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Linkedin size={18} />
                  Nous contacter sur LinkedIn
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
