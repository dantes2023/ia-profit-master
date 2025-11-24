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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Plano Completo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card rounded-2xl p-8 md:p-10 border-4 border-gold shadow-gold-strong relative h-full flex flex-col">
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
              className="w-full text-xl py-8 h-auto rounded-xl mt-auto"
            >
              QUERO MEU ACESSO AGORA!
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              🔒 Pagamento 100% seguro e protegido
            </p>
            </div>
          </motion.div>

          {/* Plano Premium com Mentoria */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 md:p-10 border-4 border-accent shadow-gold-strong relative h-full flex flex-col">
              {/* Premium badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent px-6 py-2 rounded-full flex items-center gap-2">
                  <Zap className="w-4 h-4 text-navy" />
                  <span className="text-navy font-bold">PREMIUM</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Método IA Profit Master
                  <br />
                  <span className="text-accent">+ MENTORIA EXCLUSIVA</span>
                </h3>

                <div className="mb-2">
                  <span className="text-2xl text-muted-foreground line-through">
                    R$ 3.997
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-5xl md:text-6xl font-black text-accent">
                    R$ 997
                  </span>
                </div>

                <p className="text-foreground/70">
                  ou <span className="text-accent font-bold">12x de R$ 99,70</span>
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/90 font-semibold">TUDO do Plano Completo +</span>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 bg-accent/10 p-4 rounded-xl border border-accent/30"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <span className="text-foreground font-bold block">Acompanhamento Exclusivo</span>
                    <span className="text-foreground/70 text-sm">1 reunião por semana durante 3 meses</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/90">Suporte Prioritário VIP</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/90">Análise Personalizada do Seu Negócio</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground/90">Estratégias Customizadas para Você</span>
                </motion.div>
              </div>

              <Button
                size="lg"
                variant="cta"
                className="w-full text-xl py-8 h-auto rounded-xl mt-auto bg-accent hover:bg-accent/90 text-navy"
              >
                QUERO MENTORIA EXCLUSIVA!
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-6">
                🔒 Pagamento 100% seguro e protegido
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
