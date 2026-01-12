import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/hamza-profile.png";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div
              className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-primary font-medium text-sm">
                Full Stack & WordPress Developer
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hamza Qadeer
              </span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              I build fast, secure, and scalable WordPress websites using clean
              HTML, CSS, JavaScript, PHP, and MySQL. I specialize in custom
              development, performance optimization, and business-focused
              solutions that convert visitors into customers.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="gradient" size="lg" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://wa.me/923023487168"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Let's Talk
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 lg:gap-8 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl scale-110" />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl animate-float" />
              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/10 rounded-xl animate-float"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/15 rounded-lg animate-float"
                style={{ animationDelay: "2s" }}
              />

              {/* Main image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <img
                  src={profileImage}
                  alt="Hamza Qadeer - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Tech badges */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {["HTML", "CSS", "JS", "PHP"].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-foreground shadow-lg animate-fade-up"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
