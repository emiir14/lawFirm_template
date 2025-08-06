import { motion } from "framer-motion";
import { Car, HardHat, HeartPulse, Home, ScaleIcon, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const practiceAreas = [
  {
    icon: Car,
    title: "Accidentes de Auto",
    description: "Representación para víctimas de accidentes automovilísticos, incluyendo negociaciones con compañías de seguros y litigios cuando sea necesario.",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  },
  {
    icon: Truck,
    title: "Accidentes de Camiones",
    description: "Representación especializada para casos complejos de accidentes de camiones que involucran vehículos comerciales y múltiples partes.",
    color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
  },
  {
    icon: HardHat,
    title: "Lesiones Laborales",
    description: "Apoyo legal para lesiones sufridas en el lugar de trabajo, incluidas reclamaciones de compensación para trabajadores y responsabilidad de terceros.",
    color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
  },
  {
    icon: Home,
    title: "Responsabilidad de Locales",
    description: "Representación por lesiones que ocurren en propiedades peligrosas o inseguras debido a mantenimiento negligente.",
    color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
  },
  {
    icon: HeartPulse,
    title: "Negligencia Médica",
    description: "Defensa para víctimas de negligencia médica, incluidos errores en el diagnóstico, tratamiento o cuidados posteriores.",
    color: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400",
  },
  {
    icon: ScaleIcon,
    title: "Muerte Injusta",
    description: "Apoyo legal compasivo para familias que han perdido a un ser querido debido a acciones negligentes de otros.",
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
  },
];

export function PracticeSection() {
  return (
    <section id="practice" className="section bg-accent/50 dark:bg-accent/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-2"
          >
            Nuestra Experiencia
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            Áreas de Práctica
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Nuestro bufete de abogados se especializa en varios aspectos del derecho de lesiones personales. Proporcionamos servicios legales integrales en las siguientes áreas de práctica.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-card hover:shadow-md transition-all border">
                <CardHeader>
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                    area.color
                  )}>
                    <area.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-serif">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}