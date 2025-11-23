import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section id="video-section" className="py-20 bg-navy-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Assista Minha História Completa
          </h2>
          <p className="text-xl text-foreground/70 mb-12">
            (45 Segundos Que Vão Mudar Tudo)
          </p>

          {/* Video Player Placeholder */}
          <div className="relative aspect-video bg-navy-light rounded-2xl overflow-hidden shadow-card group cursor-pointer border-2 border-gold/20 hover:border-gold/40 transition-all">
            <div className="absolute inset-0 bg-gradient-radial from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 md:w-28 md:h-28 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-strong"
              >
                <Play className="w-8 h-8 md:w-12 md:h-12 text-navy fill-navy ml-1" />
              </motion.div>
            </div>

            {/* Placeholder background */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Clique para assistir o vídeo</span>
            </div>
          </div>

          <p className="text-foreground/60 mt-8 italic">
            "Por que eu apaguei meu perfil de 2 anos e como a IA se tornou minha máquina de
            lucro 24/7"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
