import { CheckCircle, Clock, Target, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "WordPress Development", value: 85 },
  { name: "JavaScript", value: 90 },
  { name: "PHP & MySQL", value: 95 },
];

const features = [
  {
    icon: CheckCircle,
    title: "Quality-Focused Development",
    description: "Clean, maintainable code that follows best practices",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Understanding your needs to deliver perfect solutions",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Committed to meeting deadlines without compromising quality",
  },
  {
    icon: Target,
    title: "Results-Driven Solutions",
    description: "Building websites that convert visitors into customers",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Passionate developer delivering
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              modern WordPress solutions
            </span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Description & Skills */}
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated Full Stack & WordPress Developer with hands-on
                experience in building custom websites from scratch using HTML,
                CSS, JavaScript, PHP, and MySQL. I focus on performance, security,
                clean code, and scalable architecture to help businesses grow
                online.
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">
                  My Core Skills
                </h3>
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-primary font-semibold">
                        {skill.value}%
                      </span>
                    </div>
                    <Progress value={skill.value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="p-6 bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
