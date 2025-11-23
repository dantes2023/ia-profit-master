import { motion } from "framer-motion";
import { Star, Shield, Headphones, Lock } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Ex-Uber",
    text: "Em 1 semana já tinha R$ 2.000 em vendas! O robô não para!",
    rating: 5,
  },
  {
    name: "Ana Santos",
    role: "Desempregada",
    text: "Método salvou minha família! Primeira venda em 3 dias!",
    rating: 5,
  },
  {
    name: "Pedro Oliveira",
    role: "Autônomo",
    text: "Nunca pensei que IA poderia trabalhar pra mim. Mudou tudo!",
    rating: 5,
  },
];

const trustBadges = [
  { icon: Shield, text: "Pagamento Seguro" },
  { icon: Lock, text: "Garantia de 30 Dias" },
  { icon: Headphones, text: "Suporte 24/7" },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Não Acredite Apenas na{" "}
            <span className="text-gold">Minha Palavra</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Veja o que nossos alunos estão dizendo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-6 rounded-xl border border-border shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-foreground/90 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="border-t border-border pt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <span className="font-semibold">{badge.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
