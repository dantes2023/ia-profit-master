import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-ai-bg.jpg";

export const HeroSection = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-section");
    videoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-glow"></div>
        <div className="absolute inset-0 bg-gradient-navy opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Método Comprovado</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Por 2 Anos Eu Ensinei Marketing Digital{" "}
            <span className="text-gold">e FALHEI</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-foreground/90">
            Até Que Apaguei Tudo e Descobri o{" "}
            <span className="text-gold">Verdadeiro Segredo da Riqueza Digital</span>
          </h2>

          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            E Faturei{" "}
            <span className="text-gold font-bold text-2xl">R$ 15.437,00</span> em
            Apenas 2 Semanas Usando Este Método Comprovado com IA
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button
              size="lg"
              variant="hero"
              className="text-lg px-12 py-8 h-auto rounded-xl"
              onClick={scrollToVideo}
            >
              ASSISTIR APRESENTAÇÃO GRATUITA
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
