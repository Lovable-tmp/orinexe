import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* SEO Meta Tags handled in index.html */}
      <Hero />
      <Services />
      <ExpertiseSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
