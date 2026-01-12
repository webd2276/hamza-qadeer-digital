import { Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/hamza-qadeer-830671348",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/webd2276",
    color: "hover:text-foreground",
  },
  {
    name: "Fiverr",
    icon: () => (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.903-.546h1.473c-.3.964-1.08 1.583-2.387 1.583-1.466 0-2.509-.958-2.509-2.453 0-1.437.955-2.453 2.433-2.453 1.525 0 2.455.973 2.455 2.394 0 .234-.015.44-.015.617zm-1.562-.925c-.02-.507-.39-.81-.894-.81-.498 0-.868.278-.963.81h1.857zm-4.12-2.022h1.61v4.874h-1.61v-2.612c0-.585-.293-.857-.777-.857-.491 0-.865.309-.865.909v2.56h-1.61v-4.874h1.61v.585c.255-.457.639-.703 1.257-.703.87 0 1.385.564 1.385 1.55v3.442h-.001v-4.874h.001zm-5.665 4.91c-1.48 0-2.509-.965-2.509-2.453 0-1.481 1.029-2.453 2.509-2.453 1.477 0 2.506.972 2.506 2.453 0 1.488-1.029 2.453-2.506 2.453zm0-1.3c.57 0 .89-.405.89-1.153 0-.755-.32-1.159-.89-1.159-.574 0-.893.404-.893 1.159 0 .748.319 1.153.893 1.153z" />
      </svg>
    ),
    href: "https://fiverr.com/webdeveloper534",
    color: "hover:text-[#1DBF73]",
  },
  {
    name: "Upwork",
    icon: () => (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
    href: "https://www.upwork.com/freelancers/~01ed30bcd8b418a670?mp_source=share",
    color: "hover:text-[#6FDA44]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/webd2276",
    color: "hover:text-[#E4405F]",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:bg-primary/10 ${social.color}`}
          aria-label={social.name}
        >
          <social.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
