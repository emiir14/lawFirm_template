import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  rating: number;
  delay?: number;
};

export function TestimonialCard({ quote, author, role, rating, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-amber-500 fill-amber-500" : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <blockquote className="text-lg mb-6 italic text-muted-foreground">"{quote}"</blockquote>
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}