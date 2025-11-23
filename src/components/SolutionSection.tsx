import { motion } from "framer-motion";
import { Check, Bot, Calendar, Filter, Clock } from "lucide-react";
import growthChart from "@/assets/growth-chart.png";

const benefits = [
  {
    icon: Bot,
    title: "Atendimento Automático",
    description: "Seu WhatsApp respondendo sozinho 24h",
  },
  {
    icon: Clock,
    title: "Máquina de Vendas",
    description: "Robôs que fecham negócios automaticamente",
  },
  {
    icon: Calendar,
    title: "Agendamento Inteligente",
    description: "Calendário que se preenche sozinho",
  },
  {
    icon: Filter,
    title: "Qualificação de Leads",
    description: "Sistema que filtra apenas clientes qualificados",
  },
];

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-navy-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={growthChart}
          alt="Growth"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-full px-6 py-2 mb-6">
            <span className="text-gold font-semibold">A Solução Definitiva</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Apresentando: O Método{" "}
            <span className="text-gold">IA Profit Master</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            O Sistema Comprovado Para Criar Seu Funcionário Virtual 24/7
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-card p-6 rounded-xl border border-border hover:border-gold/50 transition-all shadow-card h-full hover:shadow-gold">
                  <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-navy" />
                  </div>
                  
                  <div className="flex items-start gap-2 mb-2">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold">{benefit.title}</h3>
                  </div>
                  
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
