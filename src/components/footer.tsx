import { Instagram, Mail, Phone } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo variant="footer" />
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Dedicados a proporcionar asesoramiento legal excepcional para resolver sus problemas cotidianos.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#abogados" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nuestros Abogados
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold">Horario de Oficina</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>A convenir con cita previa</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Estudio Jurídico. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Correo electrónico</span>
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Teléfono</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}