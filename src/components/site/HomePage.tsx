import { Footer, FloatingWhatsApp } from "./Footer";
import { Header } from "./Header";
import {
  AboutSection,
  BenefitsSection,
  ContactSection,
  CtaSection,
  FaqSection,
  GallerySection,
  HeroSection,
  InstagramSection,
  StudioSection,
  TeamSection,
  TestimonialsSection,
} from "./sections";

export function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#conteudo-principal"
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-primary px-4 py-2 font-semibold text-white transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal">
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CtaSection />
        <StudioSection />
        <GallerySection />
        <InstagramSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
