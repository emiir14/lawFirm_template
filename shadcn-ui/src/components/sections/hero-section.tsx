import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=2070')] bg-cover bg-center opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/40 dark:from-background dark:to-background/80" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-accent/50 px-3 py-1 rounded-full text-sm text-primary font-medium"
            >
              <span className="animate-pulse w-2 h-2 rounded-full bg-primary"></span>
              Representación Legal Profesional
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Justicia para <span className="text-primary">la ciudadanía</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Estamos para ayudarle a solucionar los problemas y dudas legales que tenga en su vida diaria. Nuestro experimentado equipo está a su disposición.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="gap-2" onClick={() => scrollToSection("#contact")}>
                Contáctenos <ChevronRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#abogados">Nuestros Abogados</a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-4 flex items-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="bg-accent/70 p-1 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01l-3-3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-muted-foreground">Servicio Personalizado</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="bg-accent/70 p-1 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 4L12 14.01l-3-3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-muted-foreground">Atención Especializada</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="w-full h-[500px] rounded-lg bg-accent/30 backdrop-blur-sm relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="scales-svg w-40 h-40 text-primary opacity-80" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M12 3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M12 4c.267 0 .5.183.5.41v11.18c0 .227-.233.41-.5.41s-.5-.183-.5-.41V4.41c0-.227.233-.41.5-.41z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M7 21h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M18 10h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h.5zM6 10h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M5 13.5h2a.5.5 0 0 1 .5.5 4 4 0 0 0 4 4 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5 7 7 0 0 1-7 7 7 7 0 0 1-7-7 .5.5 0 0 1 .5-.5z" 
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-2xl font-semibold font-serif">Justicia. Integridad. Resultados.</h3>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071" 
                alt="Justice" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 backdrop-blur-sm rounded-full animate-float" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 backdrop-blur-sm rounded-full animate-float" style={{ animationDelay: "1s" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}