import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber programação?",
    answer:
      "Não! O método é 100% visual, arrasta e solta. Qualquer pessoa consegue configurar, mesmo sem conhecimento técnico.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Alunos relatam primeiras vendas em 3-7 dias após aplicar o método corretamente. Quanto mais rápido você implementar, mais rápido verá resultados.",
  },
  {
    question: "O suporte é bom?",
    answer:
      "Sim! Comunidade ativa no Telegram + suporte direto. Você nunca ficará sozinho na jornada.",
  },
  {
    question: "Funciona para qualquer nicho?",
    answer:
      "Sim! O método funciona para consultores, coaches, profissionais liberais, e-commerce e muito mais. É totalmente adaptável.",
  },
  {
    question: "Preciso investir em outras ferramentas?",
    answer:
      "O curso ensina a usar ferramentas gratuitas para começar. Conforme você cresce, pode investir em ferramentas premium se desejar.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-navy-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Perguntas <span className="text-gold">Frequentes</span>
          </h2>
          <p className="text-xl text-foreground/70 text-center mb-12">
            Tire suas dúvidas antes de começar
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-card hover:border-gold/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-gold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
