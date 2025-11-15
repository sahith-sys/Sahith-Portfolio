// =================================================================
// 🎯 PORTFOLIO CONFIGURATION FILE
// =================================================================
// Update this file with your personal information to customize your portfolio.
// Place all images in the "img" folder inside the "public" directory and reference them using the path: "/img/FILE_NAME".
// This is the ONLY file you need to edit to customize your entire portfolio!

import { FiHome, FiMail } from "react-icons/fi";
import { FaAws, FaGithub, FaJava, FaLinkedinIn } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiLangchain,
  SiFastapi,
  SiStreamlit,
  SiPython,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaFigma,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";
import { DiAws, DiJava } from "react-icons/di";

// =================================================================
// 👤 PERSONAL INFORMATION
// =================================================================
export const personalInfo = {
  // Basic Information
  name: "Sahith", // Your full name
  title: "Full Stack Developer", // Your professional title
  tagline: "Crafting Beautiful & Functional Web Experiences", // Hero section tagline
  description:
    "Hey, I'm Sahith, a Full Stack Developer passionate about building performant, user-friendly, and scalable applications.", // Hero section description

  // Profile
  profileImage: "/img/profilepic.webp", // Your profile picture
  profileImageAlt: "Sahith Profile Picture", // Alt text for profile image
  summary:
    "I'm a passionate Software Engineer & Full-Stack Developer who loves building scalable, AI-powered applications and modern web experiences. Always exploring new technologies and creating solutions that have real-world impact.", // About section summary
  location: "Nandyal, India", // Your location

  // Professional Details
  availability: "Actively Seeking Job Opportunities", // Current availability status
  experience: "3+ years of experience", // Years of experience

  // Additional Info for SEO
  keywords: [
    "Sahith Kumar Kothuru", // Your name
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
    "TypeScript",
    "JavaScript",
  ],
};

// =================================================================
// 🌐 WEBSITE & SEO CONFIGURATION
// =================================================================
export const siteConfig = {
  // Website URLs
  siteUrl: "https://yourdomain.com", // Your deployed website URL
  siteName: "Sahith Portfolio", // Site name for social sharing

  // SEO Description
  seoDescription:
    "Building scalable and performant web applications with modern technologies.",

  // Social Preview Image (Take a screenshot of your homepage and save as "preview.png" in public/img/)
  previewImage: "/img/preview.png",
};

// =================================================================
// 📧 CONTACT INFORMATION
// =================================================================
export const contactInfo = {
  email: "sahithkothuru@gmail.com", // Your email address
  whatsappNumber: "916303929239", // Your WhatsApp number (without + sign)
  whatsappMessage: "Hi! I'm interested in working with you. Can we chat?", // Default WhatsApp message

  // Web3Forms Access Key (Get it free from https://web3forms.com/)
  // Step 1: Go to https://web3forms.com/
  // Step 2: Click "Create your Access Key" and generate your free access key
  // Step 3: Copy and paste it below
  web3formsAccessKey: "ef229c19-e3b4-48e3-b83c-f53515befed5", // Replace with your actual Web3Forms access key
};

// =================================================================
// 🔗 SOCIAL LINKS
// =================================================================
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sahith07/", // Your LinkedIn profile URL
  github: "https://github.com/sahith-sys", // Your GitHub profile URL
  resumeLink: "https://drive.google.com/file/d/1fnPUfWl5rev_-J33XrZM00PpMjDKgQWr/view?usp=drive_link", // Google Drive link to your resume
};

// =================================================================
// 🛠️ TECHNICAL SKILLS
// =================================================================
export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  { name: "ExpressJS", icon: SiExpress, color: "#C9D1D9" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#1572B6" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

// =================================================================
// 🧭 NAVIGATION CONFIGURATION
// =================================================================
type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};

export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: socialLinks.linkedin,
    size: "18px",
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: socialLinks.github,
    size: "18px",
  },
];

// =================================================================
// 💼 PROJECT PORTFOLIO
// =================================================================
export const projects = [
  {
    name: "PrepWise",
    description: "PrepWise is an AI-driven interview preparation platform that generates personalized quizzes for students and working professionals.",
    points: [
      "Generates personalized interview questions.",
      "Includes 10+ secure REST APIs with JWT authentication.",
      "95%+ mobile responsive UI with 30% faster load times.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Gemini API", icon: FaCuttlefish, color: "#7289DA" },
    ],
    githubLink: "https://github.com/sahith-sys/PrepWise",
    image: "/img/projectimage.jfif", // Update with the actual project image
  },
  {
    name: "AdSnap Studio",
    description: "AdSnap Studio is an AI-powered platform for generating product images, enabling creators and marketers to produce high-quality visuals instantly.",
    points: [
      "Generates AI-based product images using Bria API.",
      "95%+ cross-device responsive UI.",
      "Reduced content creation time by 60%.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Bria API", icon: FaCuttlefish, color: "#7289DA" },
    ],
    liveLink: "https://ad-snap-studio.vercel.app/",
    githubLink: "https://github.com/sahith-sys/Ad-Snap-Studio",
    image: "/img/project2.png", // Update with the actual project image
  },
  {
    name: "IntelliSearch",
    description: "IntelliSearch is a Retrieval-Augmented Generation (RAG) based AI assistant that processes documents, generates context-aware responses using LLMs.",
    points: [
      "Built a complete RAG pipeline for grounded AI answers.",
      "Semantic search powered by vector embeddings.",
      "Supports PDF/text ingestion with automatic chunking.",
    ],
    techStack: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Pinecone", icon: FaDatabase, color: "#0064a5" },
      { name: "Gemini API", icon: FaServer, color: "#6366F1" },
      { name: "Langchain", icon: SiLangchain, color: "#FF5733" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
    ],
    githubLink: "https://github.com/sahith-sys/Knowledge_Base_Search_Engine",
    image: "/img/project3.png", // Update with the actual project image
  },
  /*{
    name: "Sample Project 4",
    description: "Description about sample project 4",
    points: [
      "Feature 1 of the sample project.",
      "Feature 2 of the sample project.",
      "Feature 3 of the sample project.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Context API", icon: FaServer, color: "#6366F1" },
      { name: "OpenWeather API", icon: FaDatabase, color: "#0064a5" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/projectimage.jfif", // Update with the actual project image
  },*/
];

// =================================================================
// 🎓 EDUCATION INFORMATION
// =================================================================
export const education = {
  institution: "Vellore Institute of Technology",
  degree: "Bachelor of Technology in Computer Science",
  cgpa: "8.72",
  duration: "2022 - 2026",
  location: "Amaravati, Andhra Pradesh, India",
};

// =================================================================
// 💼 WORK EXPERIENCE
// =================================================================
export const experience = {
  companyName: "Infosys",
  position: "Web Development Intern",
  duration: "Aug 2025 - Oct 2025",
  location: "Remote",
  achievements: [
    "Built a Kanban-based task management system with drag-and-drop features for improved workflow clarity.",
    "Collaborated in daily standups with cross-functional teams to deliver features on time.",
    "Fixed UI/UX issues and optimized frontend performance for smoother interactions.",
    "Quickly adapted to Angular for the project despite primarily working with React.",
  ],
};

// =================================================================
// 📝 ADDITIONAL CONFIGURATION
// =================================================================

// Copyright year (automatically uses current year)
export const currentYear = new Date().getFullYear();
