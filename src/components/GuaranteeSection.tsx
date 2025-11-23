import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-gold/30 shadow-card text-center">
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-navy" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Garantia de <span className="text-gold">30 Dias</span>
              <br />
              "Resultado ou Dinheiro De Volta"
            </h2>

            <p className="text-lg text-foreground/80 mb-6">
              Se em 1 mês você aplicar o método e não ver resultados reais, devolvemos{" "}
              <span className="font-bold text-gold">100% do seu investimento</span>.
            </p>

            <p className="text-foreground/70">
              Sem perguntas. Sem burocracia. Você não corre nenhum risco.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
