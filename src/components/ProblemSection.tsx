import { motion } from "framer-motion";
import { X } from "lucide-react";

const problems = [
  "Trabalho 12, 14 horas por dia e no final do mês não sobra quase nada",
  "Mando currículos todos os dias e não consigo emprego",
  "Troco 8h do meu dia por um salário que não cobre minhas contas",
  "Preciso de uma renda extra urgente",
  "Meu chefe não valoriza meu trabalho e vivo com medo de ser demitido",
  "Quero entrar no digital mas não sei programar",
];

export const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Se Você Se Identifica Com Isso,
          </h2>
          <p className="text-2xl md:text-3xl text-gold font-bold mb-16">
            Você Precisa Desta Solução:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-6 bg-card rounded-xl border border-destructive/30 shadow-card"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-left text-foreground/90">{problem}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
