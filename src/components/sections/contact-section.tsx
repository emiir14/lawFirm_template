import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            Contáctenos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Comuníquese con nosotros a través de cualquiera de los canales a continuación. Estamos comprometidos a responder rápidamente a sus consultas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="border shadow-md overflow-hidden h-full">
              <div className="h-64 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.2307189962776!2d-65.77785672489722!3d-28.46731748247854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942428b5aa6f0d17%3A0xb2c2e7671d2c4b83!2sVicario%20Segura%20546%2C%20San%20Fernando%20del%20Valle%20de%20Catamarca%2C%20Catamarca!5e0!3m2!1ses!2sar!4v1692131310687!5m2!1ses!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de oficina"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Dirección de Oficina</h3>
                      <p className="text-muted-foreground">Vicario Segura 546, Oficina 8<br />San Fernando del Valle de Catamarca, Argentina</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Teléfonos</h3>
                      <p className="text-muted-foreground">
                        <span className="block">Dra. Paula Valeria Gervan: 3834-683815</span>
                        <span className="block">Dr. Pablo Esteban Correa: 3834-354605</span>
                        <span className="block">Dra. Carolina Ale: 3834-649233</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Correos Electrónicos</h3>
                      <p className="text-muted-foreground">
                        <span className="block">valegervan@gmail.com</span>
                        <span className="block">pablocorrea2013@gmail.com</span>
                        <span className="block">dra.carolina.ale@gmail.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Conéctese Con Nosotros</h3>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo está listo para brindarle el apoyo legal que necesita. Comuníquese a través de cualquiera de nuestros canales o métodos de contacto.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Dra. Paula Valeria Gervan</div>
                    <div className="text-muted-foreground">3834-683815</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Dr. Pablo Esteban Correa</div>
                    <div className="text-muted-foreground">3834-354605</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Dra. Carolina Ale</div>
                    <div className="text-muted-foreground">3834-649233</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Correos Electrónicos</div>
                    <div className="text-muted-foreground">
                      <div>valegervan@gmail.com</div>
                      <div>pablocorrea2013@gmail.com</div>
                      <div>dra.carolina.ale@gmail.com</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-muted-foreground">
                      <div>https://www.instagram.com/valegervan</div>
                      <div>https://www.instagram.com/oso_correa</div>
                      <div>https://www.instagram.com/carolinaale1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}