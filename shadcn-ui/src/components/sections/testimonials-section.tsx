import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/testimonial-card";

const testimonials = [
  {
    quote: "After my accident, I was overwhelmed with medical bills and insurance claims. The team at Justice Law guided me through the entire process and secured a settlement that covered all my expenses.",
    author: "Sarah Johnson",
    role: "Car Accident Client",
    rating: 5,
  },
  {
    quote: "Professional, compassionate, and effective. They truly care about their clients and fight tirelessly for the best outcome. I couldn't have asked for better representation.",
    author: "Michael Rodriguez",
    role: "Workplace Injury Client",
    rating: 5,
  },
  {
    quote: "The attorneys were always available to answer my questions and kept me informed throughout my case. Their expertise in personal injury law is unmatched.",
    author: "Jennifer Chen",
    role: "Medical Malpractice Client",
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section bg-muted/30 dark:bg-muted/10">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-2"
          >
            Client Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-serif mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Don't take our word for it. Hear from clients who have trusted us with their personal injury cases.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}