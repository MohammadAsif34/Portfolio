import {
  Award,
  Briefcase,
  Code,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Rocket,
  Twitter,
} from "lucide-react";
import React from "react";

export const experiences = [
  {
    icon: <Briefcase className="text-indigo-500 w-6 h-6" />,
    title: "Full Stack Developer Intern",
    company: "Prodigy Infotech",
    date: "Aug 2024 – Sept 2024",
    description:
      "Completed a 1-month internship as a Full Stack Developer. Built 3 projects: Secure User Authentication System, Employee Management System, and Real-time Chat App using the MERN stack.",
  },

  {
    icon: <Rocket className="text-orange-500 w-6 h-6" />,
    title: "Smart India Hackathon (SIH 2024)",
    company: "Aliah University",
    date: "2024",
    description:
      "Participated in Smart India Hackathon 2024; selected in the college-level round for innovative project development and teamwork under real-world constraints.",
  },
  {
    icon: <Award className="text-emerald-500 w-6 h-6" />,
    title: "Job Simulation ",
    company: "The Forage",
    // date: "2023 – 2024",
    description:
      "Completed multiple virtual job simulations designed by leading global companies through The Forage platform, gaining practical exposure to business problem-solving, cybersecurity, and data analysis.",
    list: [
      {
        name: "Solution Architect Virtual Experience",
        issuer: "Forage",
        issue_by: "AWS",
        date: "",
        link: "",
      },
      {
        name: "Cybersecurity Analyst Simulation",
        issuer: "Forage",
        issue_by: "AWS",
        date: "",
        link: "",
      },
      {
        name: "Cyber Program",
        issuer: "Forage",
        issue_by: "Deloitte",
        date: "",
        link: "",
      },
      {
        name: "GenAI-Powered Data Analyst Simulation",
        issuer: "Forage",
        issue_by: "TCS",
        date: "",
        link: "",
      },
    ],
  },
  {
    icon: <Code className="text-blue-500 w-6 h-6" />,
    title: "Workshops & Events",
    company: "Various Institutions",
    date: "2023 – 2024",
    description:
      "Attended hands-on workshops on full-stack development, AI/ML, and career development to strengthen practical understanding of technology trends.",
    list: [
      {
        name: "React.js Bootcamp",
        issuer: "Lets Upgrade",
        date: "",
        link: "",
      },
      {
        name: "Python React.js Bootcamp",
        issuer: "Lets Upgrade",
        date: "",
        link: "",
      },
      {
        name: "Git & GitHub React.js Bootcamp",
        issuer: "Lets Upgrade",
        date: "",
        link: "",
      },
      {
        name: "HTML & CSS React.js Bootcamp",
        issuer: "Lets Upgrade",
        date: "",
        link: "",
      },
    ],
  },
];
export const projects = [
  {
    _id: 10001,
    title: "Portfolio Website",
    desc: "Personal portfolio showcasing projects, skills, and experience.",
    tech: "React, Tailwind, Framer Motion",
    link: "https://mohammadasifhasnain.vercel.app/",
    github: "https://github.com/MohammadAsif34/Portfolio",
  },
  {
    _id: 10002,
    title: "ShortMail",
    desc: "A basic, secure, and fast email platform for sending and receiving messages.",
    tech: "MERN, REST API, Tailwind",
    link: "https://shortmail.vercel.app/",
    github: "https://github.com/MohammadAsif34/ShortMail",
  },
  // {
  //   _id: 10003,
  //   title: "ShortMain",
  //   desc: "URL shortener for creating and managing custom short links.",
  //   tech: "MERN, REST API, Tailwind",
  //   link: "https://",
  //   github: "https://github.com/your-username/shortmain",
  // },
  {
    _id: 10004,
    title: "Whiteboard",
    desc: "Real-time collaborative drawing board for teams and classrooms.",
    tech: "React, Canvas API, Socket.io",
    link: "https://whiteboard-mohammadasif34.vercel.app/",
    github: "https://github.com/mohammadasif34/whiteboard",
  },
  {
    _id: 10005,
    title: "EMS",
    desc: "Employee management system for handling records and departments.",
    tech: "MERN, Express.js, MongoDB",
    link: "https://ems-mohammadasif34.netlify.app/",
    github: "https://github.com/MohammadAsif34/Employee-Management-System",
  },
  {
    _id: 10006,
    title: "Secure Auth System",
    desc: "Role-based authentication with JWT and password encryption.",
    tech: "Node.js, Express, JWT, Bcrypt",
    link: "https://secureauthsystem-mohammadasif34.netlify.app/",
    github:
      "https://github.com/MohammadAsif34/Secure-User-Authentication-System",
  },
  {
    _id: 10007,
    title: "Calculator",
    desc: "Responsive calculator supporting basic arithmetic operations.",
    tech: "React, CSS, JavaScript",
    link: "https://calculator-mohammadasif34.netlify.app/",
    github: "https://github.com/MohammadAsif34/CodSoft",
  },
  {
    _id: 10008,
    title: "Landing Page",
    desc: "Modern landing page with smooth animations and responsive design.",
    tech: "HTML, CSS, JavaScript",
    link: "https://landingpage-mohammadasif34.netlify.app/",
    github: "https://github.com/MohammadAsif34/CodSoft",
  },
  {
    _id: 10009,
    title: "Chatsy",
    desc: "Real-time chat app with typing indicators and message storage.",
    tech: "MERN, Socket.io, Tailwind",
    link: "https://chatsy-mohammadasif34.netlify.app/",
    github: "https://github.com/MohammadAsif34/ChatSy-Chat-App",
  },
  {
    _id: 10010,
    title: "Weather App",
    desc: "Displays live weather updates using OpenWeather API.",
    tech: "React, OpenWeather API, Tailwind",
    link: "https://",
    github: "https://github.com/mohammadasif34/weather-app",
  },
  {
    _id: 10011,
    title: "Speed Test",
    desc: "Checks internet speed and latency with a clean UI.",
    tech: "React, JavaScript, Speed API",
    link: "https://",
    github: "https://github.com/mohammadasif34/speed-test",
  },
  {
    _id: 10012,
    title: "Workout App",
    desc: "Fitness tracker for exercises, progress, and daily goals.",
    tech: "React, Node.js, MongoDB",
    link: "https://",
    github: "https://github.com/mohammadasif34/workout-app",
  },
];

export const certificates = [
  {
    title: "Git & GitHub Bootcamp",
    issuer: "Lets Upgrade",
    date: "3 march 2025",
    link: "Bootcamp_Git_&_GitHub.pdf",
    verifyLink: "",
  },
  {
    title: "HTML CSS Bootcamp",
    issuer: "Lets Upgrade",
    date: "6 march 2025",
    link: "Bootcamp_HTML_CSS.pdf",
    verifyLink: "",
  },
  {
    title: "Python Bootcamp",
    issuer: "Lets Upgrade",
    date: "21 may 2025",
    link: "Bootcamp_Python.pdf",
    verifyLink: "",
  },
  {
    title: "React.js Bootcamp",
    issuer: "Lets Upgrade",
    date: "3 feb 2025",
    link: "Bootcamp_React.js.pdf",
    verifyLink: "",
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte",
    date: "21 oct 2025",
    link: "Cyber_Job_Simulation.pdf",
    verifyLink: "",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "TCS",
    date: "7 july 2025",
    link: "Cybersecurity_Analyst_Job_Simulation.pdf",
    verifyLink: "",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TCS",
    date: "23 oct 2025",
    link: "GenAI_Powered_Data_Analytics_Job_Simulation.pdf",
    verifyLink: "",
  },
  {
    title: "JavaScript Basic",
    issuer: "Udemy",
    date: "2 july 2025",
    link: "JavaScript_Basic.pdf",
    verifyLink: "",
  },
  {
    title: "REST API with Node JS",
    issuer: "Udemy",
    date: "24 oct 2025",
    link: "REST_API_with_Node_Js.pdf",
    verifyLink: "",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Quantium",
    date: "3 july 2025",
    link: "Software_Engineering_Job_Simulation.pdf",
    verifyLink: "",
  },
  {
    title: "Solution Architecture Job Simulation",
    issuer: "AWS",
    date: "17 june 2025",
    link: "Solutions_Architecture_Job_Simulation.pdf",
    verifyLink: "",
  },
  {
    title: "Ultimate C++ Advanced Programming",
    issuer: "Udemy",
    date: "24 oct 2025",
    link: "Ultimate_C++_Advanced.pdf",
    verifyLink: "",
  },
];
export const skills = [
  // Frontend
  { name: "React", icon: "/images/skills/react.svg" },
  { name: "Redux", icon: "/images/skills/redux.svg" },
  { name: "JavaScript", icon: "/images/skills/js.svg" },
  { name: "TailwindCSS", icon: "/images/skills/tailwind.svg" },
  { name: "HTML", icon: "/images/skills/html.svg" },
  { name: "CSS", icon: "/images/skills/css.svg" },
  // Backend
  { name: "Node.js", icon: "/images/skills/node.svg" },
  { name: "Express.js", icon: "/images/skills/js.svg" },
  // Database
  { name: "MongoDB", icon: "/images/skills/mongo.svg" },
  { name: "SQL", icon: "/images/skills/sql.svg" },
  // Tools
  { name: "Git & GitHub", icon: "/images/skills/git.svg" },
  { name: "Linux", icon: "/images/skills/linux.svg" },
  // CS
  { name: "Python", icon: "/images/skills/python.svg" },
  { name: "C++", icon: "/images/skills/cpp.svg" },
  { name: "C", icon: "/images/skills/cpp.svg" },
  // { name: "Flask", icon: "/images/skills/flask.svg" }, // or Django if you prefer
  // Python
];
export const about = `I am Mohammad Asif, a B.Tech (CSE) student at Aliah University, passionate about software
 development and web technologies. I have hands-on experience in MERN stack development through academic
 projects and multiple micro-internships at Forage. During college, I learned and explored multiple 
 technologies, and now I aim to express my skills, enhance my problem-solving abilities, and grow my 
 skills and abilities by tackling real-life challenges from companies.`;

export const socialLink = [
  {
    id: 123,
    icon: <Linkedin />,
    title: "linkedin",
    link: "https://www.linkedin.com/in/mohammadasif34/",
  },
  {
    id: 124,
    icon: <Github />,
    title: "github",
    link: "https://github.com/mohammadasif34",
  },
  {
    id: 125,
    icon: <Instagram />,
    title: "instagram",
    link: "",
  },
  {
    id: 126,
    icon: <Twitter />,
    title: "twitter",
    link: "",
  },
  {
    id: 127,
    icon: <Code2 />,
    title: "leetcode",
    link: "https://leetcode.com/u/MohammadAsif34_dev/",
  },
];
export const education = [
  {
    level: "10th",
    school: "ABC High School",
    board: "CBSE",
    year_of_passing: 2018,
    percentage: 88,
    location: "Kolkata, India",
    achievements: ["Top 5% of the class", "Science Fair Winner 2018"],
  },
  {
    level: "12th",
    school: "XYZ Higher Secondary School",
    board: "CBSE",
    year_of_passing: 2020,
    percentage: 85,
    location: "Kolkata, India",
    stream: "Science (PCM)",
    achievements: ["School Topper in Physics", "Math Olympiad Participant"],
  },
  {
    level: "Graduation",
    college: "Aliah University",
    degree: "B.Tech",
    branch: "Computer Science and Engineering",
    year_of_passing: 2025,
    cgpa: 8.5,
    location: "Kolkata, India",
    achievements: [
      "Completed MERN Stack Projects",
      "Python Automation Mini-Project",
      "Hackathon Winner 2024",
    ],
  },
  {
    level: "Certification",
    name: "Full Stack Web Development",
    platform: "Coursera",
    year: 2023,
    skills: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
  },
  {
    level: "Certification",
    name: "Data Structures and Algorithms in C++",
    platform: "Udemy",
    year: 2022,
    skills: ["C++", "DSA", "Problem Solving"],
  },
  {
    level: "Online Course",
    name: "Python for Beginners",
    platform: "edX",
    year: 2021,
    skills: ["Python Basics", "Automation", "Scripting"],
  },
];
export const quickLink = [
  { id: 202, label: "Experience", to: "#experience" },
  { id: 204, label: "Project", to: "#projects" },
  { id: 203, label: "Certificate", to: "#certificates" },
  { id: 201, label: "About", to: "#about" },
  { id: 205, label: "ContactUs", to: "#contact" },
];
export const navlink = [
  { to: "#", label: "Home" },
  { to: "#experience", label: "Experience" },
  { to: "#certificates", label: "Certificate" },
  { to: "#projects", label: "Projects" },
  { to: "#skills", label: "Skills" },
  { to: "#contact", label: "Contact" },
];
