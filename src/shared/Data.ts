import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import type {
  HeaderDetails,
  ExperienceDetails,
  SkillDetails,
  ProjectDetails,
  TimelineDetails,
  ContactDetails,
} from "./Types";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const headerDetails: HeaderDetails = {
  name: "Yuvankumar Rajagopal",
  id: "Yukon2077",
  role: "Software Developer",
  summary:
    "I'm a software developer with 2+ years of experience using Angular to create pixel-perfect, clean and beautiful user interfaces, seeking for an opportunity to build high-quality, impactful web applications",
  summaryAfterRole:
    "with 2+ years of experience using Angular to create pixel-perfect, clean and beautiful user interfaces, seeking for an opportunity to build high-quality, impactful web applications",
};
export const experience: ExperienceDetails[] = [
  {
    company: "Accenture",
    role: "Software Analyst",
    startDate: new Date("2023-10-17"),
    endDate: null,
    summary: [
      "Developed Angular interfaces, implementing full UI functionality including interactive data tables and user-driven input.",
      "Implemented functionality across frontend, APIs, and database components, debugging and resolving issues as needed.",
      "Refactored Angular code and redesigned UI for compatibility with the latest framework version, improving performance, consistency, and stability.",
      "Enhanced product quality by addressing UI and functional defects and collaborating across teams to accelerate delivery.",
    ],
  },
];
export const skills: SkillDetails[] = [
  {
    category: "Front-end",
    skills: ["Angular", "TypeScript", "HTML", "SCSS", "TailwindCSS"],
  },
  {
    category: "Back-end",
    skills: ["Flask", "ASP.NET"],
  },
  {
    category: "Databases",
    skills: ["SQL Server", "SQLite"],
  },
  {
    category: "Mobile",
    skills: ["Android", "Flutter"],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "VS Code",
      "Visual Studio",
      "Android Studio",
      "Figma",
      "Postman",
    ],
  },
];
export const projects: ProjectDetails[] = [
  {
    title: "Rash Driving Analyzer",
    tech: ["Flask", "Flutter"],
    summary:
      "Web and Android application for multi-vehicle monitoring, analyzing vehicle telemetry data to detect rash driving and visualizing driving behavior through graphical insights",
    endDate: new Date("2023-04-01"),
  },
  {
    title: "Student Attendance Tracker",
    tech: ["Flask"],
    summary:
      "Web application for managing and tracking student attendance, displaying attendance records and highlighting potential detention risk",
    endDate: new Date("2022-07-01"),
  },
  {
    title: "Pollify",
    tech: ["Android"],
    summary:
      "Android application for creating and sharing polls, implementing SMS-based OTP verification to validate voters",
    endDate: new Date("2021-03-01"),
  },
];
export const timelines: TimelineDetails[] = [];
export const contacts: ContactDetails[] = [
  {
    name: "E-mail",
    link: "yuvankumar2077@gmail.com",
    icon: faEnvelope,
  },
  {
    name: "WhatsApp",
    link: "+91 74189 06123",
    icon: faWhatsapp,
  },
  {
    name: "Github",
    link: "https://github.com/Yukon2077",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yuvankumar-r-739a0419b/",
    icon: faLinkedin,
  },
];
