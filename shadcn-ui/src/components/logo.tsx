import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "footer";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/assets/images/logo.png" 
        alt="Estudio Jurídico" 
        className="h-12 md:h-16"
      />
      <div className={cn(
        "ml-2 font-serif text-xl md:text-2xl font-bold tracking-tight",
        variant === "footer" ? "text-white" : "text-foreground"
      )}>
        Estudio<span className={cn(
          "font-bold", 
          variant === "footer" ? "text-white" : "text-primary"
        )}>Jurídico</span>
      </div>
    </div>
  );
}