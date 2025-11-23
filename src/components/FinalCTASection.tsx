import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

export const FinalCTASection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Sua Decisão Agora Define
            <br />
            <span className="text-gold">Seu Amanhã</span>
          </h2>

          <p className="text-xl md:text-2xl text-foreground/80 mb-12">
            Ou você continua na mesma... ou clica no botão abaixo e{" "}
            <span className="text-gold font-bold">muda tudo</span>.
          </p>

          {/* Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-4 bg-card border-2 border-gold/30 rounded-xl px-8 py-4 mb-12"
          >
            <Clock className="w-6 h-6 text-gold" />
            <div>
              <p className="text-sm text-muted-foreground mb-1">Oferta expira em:</p>
              <div className="flex gap-2 text-2xl font-bold text-gold">
                <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                <span>:</span>
                <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span>:</span>
                <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button
              size="lg"
              variant="cta"
              className="text-xl md:text-2xl px-12 py-10 h-auto rounded-xl mb-4 animate-pulse"
            >
              SIM, QUERO MUDAR DE VIDA AGORA!
            </Button>
            <p className="text-sm text-muted-foreground">
              ⚡ Vagas limitadas - Garanta a sua agora!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
