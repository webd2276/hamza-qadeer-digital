import SocialLinks from "./SocialLinks";

const services = [
  "WordPress Development",
  "Custom Website Development",
  "WooCommerce Stores",
  "Website Optimization",
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              Hamza Qadeer
            </h3>
            <p className="text-muted-foreground mb-6">
              Full Stack & WordPress Developer
            </p>
            <SocialLinks />
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/923023487168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  WhatsApp: +92 302 3487168
                </a>
              </li>
              <li>
                <a
                  href="mailto:webd2276@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  webd2276@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2026 Hamza Qadeer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
