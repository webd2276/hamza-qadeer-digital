import {
  Code,
  Database,
  Globe,
  Layout,
  Lock,
  Server,
} from "lucide-react";

const skillCategories = [
  {
    icon: Globe,
    title: "WordPress Development",
    skills: [
      "Custom Themes",
      "Plugin Customization",
      "WooCommerce",
      "Speed Optimization",
      "Security Hardening",
    ],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["PHP", "MySQL", "Custom Admin Panels"],
  },
  {
    icon: Lock,
    title: "APIs & Authentication",
    skills: ["REST APIs", "Secure Login Systems"],
  },
  {
    icon: Code,
    title: "Deployment & Tools",
    skills: ["GitHub", "cPanel", "VPS", "XAMPP"],
  },
  {
    icon: Database,
    title: "System Basics",
    skills: ["Hosting Setup", "Database Management", "Website Optimization"],
  },
];

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "WordPress",
  "WooCommerce",
  "Git",
  "REST API",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What I{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bring to the Table
            </span>
          </h2>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                <category.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-6 py-3 bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl text-foreground font-medium hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
