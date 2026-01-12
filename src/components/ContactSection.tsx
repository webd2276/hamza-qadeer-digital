import { Mail, MessageCircle, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+92 302 3487168",
    href: "https://wa.me/923023487168",
  },
  {
    icon: Mail,
    title: "Email",
    value: "webd2276@gmail.com",
    href: "mailto:webd2276@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 302 3487168",
    href: "tel:+923023487168",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Reach out through any of these
            channels.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <AnimatedSection
              key={method.title}
              animation="fade-up"
              delay={index * 100}
            >
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-background rounded-2xl border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  <method.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {method.value}
                </p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
