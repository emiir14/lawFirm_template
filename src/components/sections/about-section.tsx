import { motion } from "framer-motion";
import { Shield, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Shield,
    title: "Asesoramiento Legal Experto",
    description: "Nuestro equipo de abogados experimentados está comprometido a proporcionar la más alta calidad de asesoramiento legal para resolver sus problemas cotidianos.",
  },
  {
    icon: Users,
    title: "Enfoque Centrado en el Cliente",
    description: "Creemos en poner a nuestros clientes primero, proporcionando atención personalizada y apoyo durante todo su caso.",
  },
  {
    icon: Award,
    title: "Resultados Probados",
    description: "Con un historial de casos exitosos, tenemos la experiencia para ayudarle a resolver cualquier problema legal que pueda enfrentar.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-2"
          >
            Sobre Nuestra Firma
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            Dedicados a Servir Sus Necesidades Legales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Estamos para ayudarle a solucionar los problemas y dudas legales que tenga en su vida diaria, con el compromiso de proporcionar una representación excepcional y atención personalizada a cada cliente.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/D58m8LQ.png"
                alt="Our legal team"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-primary/10 backdrop-blur-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-lg bg-primary/10 backdrop-blur-sm -z-10" />
          </motion.div>

          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-serif font-semibold"
            >
              Por Qué Elegir Nuestra Firma Legal
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground"
            >
              Desde nuestra fundación, nos hemos dedicado a ayudar a las personas a resolver sus problemas legales cotidianos. Nuestro enfoque combina experiencia legal con servicio compasivo al cliente.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground"
            >
              Creemos que cada cliente merece atención personalizada y una estrategia legal diseñada para lograr el mejor resultado posible para su caso específico.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-6"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Atención Profesional</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Equipo Experimentado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Servicio Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Resultados Probados</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                "bg-primary/10 text-primary"
              )}>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}