import {
  Zap,
  Settings,
  Rocket,
  ShoppingCart,
  Users,
  MessageSquare,
  BarChart3,
  Link,
  Bot,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const workflowSteps = [
  {
    number: "01",
    title: "Trigger",
    description: "Form submit, webhook, ya schedule",
    icon: Zap,
  },
  {
    number: "02",
    title: "Process",
    description: "Data filter, transform aur logic",
    icon: Settings,
  },
  {
    number: "03",
    title: "Action",
    description: "Email, WhatsApp, Sheet ya CRM",
    icon: Rocket,
  },
];

const workflowCards = [
  {
    title: "WooCommerce Automation",
    icon: ShoppingCart,
    tags: ["WooCommerce", "Google Sheets", "WhatsApp"],
  },
  {
    title: "Lead Capture System",
    icon: Users,
    tags: ["WordPress", "CRM", "Email"],
  },
  {
    title: "WhatsApp Business Bot",
    icon: MessageSquare,
    tags: ["WhatsApp API", "N8n", "Automation"],
  },
  {
    title: "Reporting & Analytics",
    icon: BarChart3,
    tags: ["Google Sheets", "WordPress", "Reports"],
  },
  {
    title: "API Integration",
    icon: Link,
    tags: ["REST API", "Webhooks", "WordPress"],
  },
  {
    title: "AI-Powered Workflows",
    icon: Bot,
    tags: ["OpenAI", "N8n", "WordPress"],
  },
];

const stats = [
  { number: "10+", label: "Workflows" },
  { number: "5+", label: "Platforms" },
  { number: "100%", label: "Automation" },
  { number: "Free vs", label: "Zapier" },
];

const n8nProjects = [
  {
    title: "AI-Powered LinkedIn Post Automation",
    description:
      "N8n workflow that automates LinkedIn post creation and scheduling using AI-generated content and GitHub-hosted workflow assets.",
    tags: ["N8n", "LinkedIn", "AI", "Automation"],
    github: "https://github.com/webd2276/AI-Powered-LinkedIn-Post-Automation",
    image:
      "https://raw.githubusercontent.com/webd2276/AI-Powered-LinkedIn-Post-Automation/main/Screenshot%20from%202026-02-06%2021-34-26.png",
  },
  {
    title: "Ai-Agent",
    description:
      "AI-driven workflow agent built with N8n to automate communication, data processing, and task orchestration across services.",
    tags: ["N8n", "AI", "Agent", "Automation"],
    github: "https://github.com/webd2276/Ai-Agent",
    image:
      "https://raw.githubusercontent.com/webd2276/Ai-Agent/main/Screenshot%20from%202026-02-06%2020-48-52.png",
  },
];

const AutomationSection = () => {
  return (
    <section id="automation" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            ⚡ Automation & N8n
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Automate Your Business with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              N8n Workflows
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect WordPress, WooCommerce, and 1000+ apps with powerful N8n
            workflows. No coding required. Save time and reduce manual work.
          </p>
        </AnimatedSection>

        {/* How It Works */}
        <AnimatedSection className="mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-0">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative">
                    <div className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div className="text-3xl font-bold text-primary/20 mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="h-6 w-6 text-primary/30" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Workflow Cards Grid */}
        <AnimatedSection className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Popular Workflows
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <AnimatedSection
                  key={card.title}
                  animation="fade-up"
                  delay={index * 80}
                >
                  <div className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {card.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection className="mb-20">
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 bg-background rounded-2xl border border-border text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* N8n Projects Section */}
        <AnimatedSection className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            N8n Projects on GitHub
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {n8nProjects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="group overflow-hidden bg-background rounded-2xl border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-2">
                  {project.image ? (
                    <div className="relative h-48 bg-muted/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  ) : null}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Ready to Automate?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="gradient" asChild>
              <a href="https://wa.me/923023487168" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp Pe Baat Karein
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:webd2276@gmail.com">
                📧 Email Karein
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AutomationSection;
