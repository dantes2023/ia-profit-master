import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const includes = [
  "Acesso Vitalício ao Curso",
  "Bônus: Biblioteca de Scripts (R$ 997)",
  "Bônus: Configuração em Grupo AO VIVO (R$ 697)",
  "Bônus: Comunidade VIP (R$ 497)",
  "Suporte Direto no Telegram",
  "Atualizações Gratuitas",
];

export const PricingSection = () => {
  return (
    <section className="py-20 bg-navy-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Escolha Seu Plano de <span className="text-gold">Acesso</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 border-4 border-gold shadow-gold-strong relative">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-gold px-6 py-2 rounded-full flex items-center gap-2">
                <Zap className="w-4 h-4 text-navy" />
                <span className="text-navy font-bold">MAIS POPULAR</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Método IA Profit Master
                <br />
                <span className="text-gold">COMPLETO</span>
              </h3>

              <div className="mb-2">
                <span className="text-2xl text-muted-foreground line-through">
                  R$ 2.997
                </span>
              </div>

              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-black text-gold">
                  R$ 497
                </span>
              </div>

              <p className="text-foreground/70">
                ou <span className="text-gold font-bold">12x de R$ 49,70</span>
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {includes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              variant="cta"
              className="w-full text-xl py-8 h-auto rounded-xl"
            >
              QUERO MEU ACESSO AGORA!
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              🔒 Pagamento 100% seguro e protegido
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
