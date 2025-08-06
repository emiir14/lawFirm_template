import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const lawyers = [
  {
    name: "Dra. Paula Valeria Gerván",
    specialties: [
      "Derecho de Familia", 
      "Derecho Civil", 
      "Derecho Sucesorio", 
      "Prescripciones Adquisitivas"],
    mat: "MP 2041 - MF Tomo 112 - folio 567",
    image: 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQq6ULGn_i9qOq_8a_IHVv5nONOieep9Iw7w&s",
  },
  {
    name: "Dr. Pablo Esteban Correa",
    specialties: [
      "Derecho Civil",
      "Derecho Administrativo",
      "Derecho Parlamentario",
    ],
    image: 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQq6ULGn_i9qOq_8a_IHVv5nONOieep9Iw7w&s",
  },
  {
    name: "Dra. Carolina Ale",
    specialties: [
      "Derecho Comercial y Empresarial",
      "Derecho Civil, Administrativo",
      "Derecho Minero y Agrario",
      "Ciberdelitos, Inteligencia Artificial",
      "Derechos del Consumidor",
    ],
    mat: "MP 2061 - MF Tomo 112 - folio 572",
    image:
      "https://i.imgur.com/fxVhOUS.jpeg",
  },
];

export function LawyersSection() {
  return (
    <section id="abogados" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-[800px] mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Nuestros Abogados
          </h2>
          <p className="text-muted-foreground text-lg">
            Conozca a nuestro equipo de profesionales especializados en diversas
            áreas del derecho.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {lawyers.map((lawyer, index) => (
            <Card
              key={index}
              className={cn(
                "group relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border-none",
                "transform hover:-translate-y-1"
              )}
            >
              <div className="relative h-[200px] w-full">
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80"
                  style={{
                    backgroundImage: `url(${lawyer.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <CardContent className="relative z-10 p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {lawyer.name}
                </h3>
                <ul className="space-y-1">
                  {lawyer.specialties.map((specialty, i) => (
                    <li
                      key={i}
                      className="text-sm md:text-base text-muted-foreground"
                    >
                      • {specialty}
                    </li>
                  ))}
                </ul>
                {lawyer.mat && (
                  <p className="mt-3 text-sm md:text-base text-muted-foreground font-medium">
                    {lawyer.mat}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
