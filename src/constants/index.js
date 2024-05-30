import { Description } from "@radix-ui/react-dialog";

export const NavbarLinks = [
  {
    title: "Home",
    name: "home",
    route: "#home",
  },
  {
    title: "About",
    name: "about",
    route: "#about",
  },
  {
    title: "Projects",
    name: "projects",
    route: "#projects",
  },
  {
    title: "Contact",
    name: "contacts",
    route: "#contacts",
  },
];

export const projects = [
  {
    title: "Tamarind House",
    subtitle: "Token Generation System",
    image: "./projects/tamarind.png",
    techStack: ['NextJS','Firebase','NodeMailer','Brevo','TailwindCSS'],
    githubLink: "https://github.com/niranjan-official/Tamarind-House-Web",
    websiteLink: "https://tamarind-house-web.vercel.app",
    description:
      "A dynamic platform designed to streamline the process of token generation and dispensation for students. Implemented user authentication to make sure each user can only generate the token number once in a day",
  },
  {
    title: "Treasure Hunt",
    subtitle: "Technical QR Code Hunt",
    image: "./projects/treasure.png",
    techStack: ['NextJS','Firebase','TailwindCSS'],
    githubLink: "https://github.com/niranjan-official/treasure-hunt",
    websiteLink: "https://treasure-hunt-niranjan-official.vercel.app/",
    description:
      "A dynamic treasure hunting game where users to to find the hidden QR codes and scan it using the inbuilt scanning mechanism in the website. Along with scanning the user need to answer the questions set by the admin on each scan.",
  },
  {
    title: "Rasam'24",
    subtitle: "PRC Techno-cultural Fest",
    image: "./projects/rasam.png",
    techStack: ['NextJS','Firebase','shadcn/ui','framer-motion','TailwindCSS'],
    githubLink: "https://github.com/niranjan-official/rasam-2024",
    websiteLink: "https://www.rasam.live",
    description:
      "Official website of the Rasam'24 techno-cultural fest of Providence college of Engineering. Implemented using NextJS 14, framer-motion for animations, firebase as database for asset storage, shadcn/ui and tailwindCSS for styling.",
  },
  {
    title: "Redd-Matrix",
    subtitle: "Digital Marketing Company",
    image: "./projects/redmatrix.png",
    techStack: ['NextJS','shadcn/ui','TailwindCSS'],
    githubLink: "https://github.com/niranjan-official/red-matrix",
    websiteLink: "https://red-matrix.vercel.app/",
    description:
      "Redd-Matrix's website is a cutting-edge platform for digital marketing and consultations. Built with Next.js and shadcn/ui, it features a modern design with TailwindCSS styling for a sleek user experience.",
  },
];

export const skills = [
  {
    icon: "./skills/static.svg",
    title: "Static Web Dev",
    description:
      "I specialize in static web development, creating responsive, visually appealing websites using HTML, CSS, and JavaScript, with expertise in frameworks like Tailwind CSS.",
  },
  {
    icon: "./skills/dynamic.svg",
    title: "Dynamic Web Dev",
    description:
      "I excel in dynamic web development, creating interactive websites using JavaScript, Node.js, and React, with strong API integration skills.",
  },
  {
    icon: "./skills/devops.png",
    title: "Dev ops",
    description:
      "I am skilled in DevOps, streamlining deployment and operations with tools like Docker, Kubernetes, and CI/CD pipelines for efficient, automated workflows.",
  },
  {
    icon: "./skills/automation.webp",
    title: "Automation",
    description:
      "I specialize in integrating IoT devices with web applications, enabling seamless real-time data interaction through efficient use of APIs and protocols.",
  },
];