// ============================================================
// portfolioData.js — Centralized configuration for Pasham Dhanush Reddy's Portfolio
// ============================================================

export const personalInfo = {
  name: "Pasham Dhanush Reddy",
  firstName: "Pasham Dhanush Reddy",
  brandName: "Pasham Dhanush Reddy",
  title: "Software Engineer & Backend Developer",
  location: "Hyderabad, India",
  phone: "+91 7680005284",
  emails: {
    primary: "pashamdhanushreddy@gmail.com",
    secondary: "pashamdhanushreddy@gmail.com",
  },
  summary:
    "Motivated Software Development Intern with hands-on experience in Python and SQL, focusing on backend development using Django and FastAPI. Skilled in writing SQL queries and debugging, with version control knowledge using Git.",
  resumeUrl: "/Pasham_Dhanush_Reddy_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/PashamDhanushReddy",
  linkedin: "https://linkedin.com/in/PashamDhanushReddy",
  instagram: "https://www.instagram.com/mr_reddy_1729?igsh=MWx0Yjh0Zzc0b2I0bg%3D%3D&utm_source=qr",
};

export const heroContent = {
  greeting: "Hi, I'm Pasham Dhanush Reddy",
  titleHighlight: "Software Engineer",
  subtitle:
    "I build fast, scalable applications using Python, Django, FastAPI, and React.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:pashamdhanushreddy@gmail.com",
  },
  ctaResume: { text: "Download Resume", href: "/Pasham_Dhanush_Reddy_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Pasham Dhanush Reddy</span>, a passionate software engineer based in Hyderabad, dedicated to crafting clean, functional, and highly scalable applications.`,
  techStack: ["Python", "Django", "FastAPI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture and database schemas that guarantee scalability and fast response times.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and integrating responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, database tuning, and seamless deployment.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 }
      ]
    },
    {
      title: "Frameworks & Backend",
      skills: [
        { name: "Django", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "React", level: 80 },
        { name: "Flutter", level: 75 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "NeonDB", level: 85 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Render", level: 85 },
        { name: "Prompt Engineering", level: 80 }
      ]
    }
  ]
};

// Repurposed content creation for continuous learning to keep layout intact
export const contentCreation = {
  badge: "Beyond Coding",
  heading: "Continuous Learning & Exploration",
  description: "I actively participate in hackathons and continuously explore new technologies in AI, ML, and Backend Development.",
  categories: [
    {
      title: "Hackathons",
      description: "Participating and organizing college level hackathons.",
      stats: "CodeStorm & Ignite",
      icon: "🏆"
    },
    {
      title: "AI & ML",
      description: "Developing face mask detection and AI cartooning applications.",
      stats: "Deep Learning",
      icon: "🤖"
    }
  ]
};

export const leadershipList = [
  {
    title: "Hackathon Organizer",
    description: "Organized and hosted CodeStorm-2026 & Ignite-2K26, managing technical infrastructure and participants.",
    role: "Event Organizer",
    badge: "Leadership"
  }
];

export const internshipsList = [
  {
    organization: "Infosys Springboard",
    role: "Full-Stack Python Intern",
    duration: "11/2025 - 02/2026",
    skills: ["Python", "Django", "React", "PostgreSQL"],
    tech: ["Full-Stack", "REST APIs", "Git"]
  },
  {
    organization: "Shaaka",
    role: "Android App Development Intern",
    duration: "10/2025 - 12/2025",
    skills: ["Flutter", "Django", "NeonDB", "API Optimization"],
    tech: ["Android", "Backend Tuning", "Render"]
  }
];

export const softSkillsList = [
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks and adapt to fast-paced environments." },
  { name: "Leadership", icon: "👑", desc: "Guiding teams, managing tasks, and organizing events like hackathons." },
  { name: "Fast Learning", icon: "🚀", desc: "Rapidly mastering new technologies and applying them to real-world problems." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical solutions." }
];

export const projects = [
  {
    id: "talentlink",
    number: "01",
    badge: "🚀 Featured",
    title: "TalentLink",
    description:
      "A platform designed to connect job seekers and recruiters by streamlining job postings, applications, and contract management. Independently designed, developed, and deployed a Full-stack job portal using React, Django Rest API, and PostgreSQL.",
    techTags: ["React", "Django Rest API", "PostgreSQL", "Render"],
    links: {
      github: "https://github.com/PashamDhanushReddy/TalentLink",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "shaaka-app",
    number: "02",
    badge: "💡 E-Commerce",
    title: "Shaaka App",
    description:
      "Built and upgraded a farmer-merchant Android app to improve market access and user engagement. Led API optimization efforts, reducing response time and enhancing platform reliability.",
    techTags: ["Flutter", "Django Rest API", "NeonDB"],
    links: {
      github: "https://github.com/PashamDhanushReddy/shaaka",
      frontendDemo: null,
      backendApi: null,
    },
    isFlagship: true,
  },
  {
    id: "cs-2k26",
    number: "03",
    badge: "Event",
    title: "CodeStorm & Ignite",
    description:
      "Designed and developed responsive event management websites with secure registration systems, backend API integration, and optimized database operations.",
    techTags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/PashamDhanushReddy/cs_2k26",
    },
    isFlagship: false,
  },
  {
    id: "face-mask",
    number: "04",
    badge: "AI/CV",
    title: "Face Mask Detection",
    description:
      "A high-performance computer vision model utilizing deep learning and OpenCV to detect face masks in real-time video streams.",
    techTags: ["Python", "OpenCV", "Deep Learning"],
    links: {
      github: "https://github.com/PashamDhanushReddy/Face_Mask_Detection",
    },
    isFlagship: false,
  },
  {
    id: "ai-cartooning",
    number: "05",
    badge: "AI",
    title: "AI Cartooning",
    description:
      "Artificial Intelligence based application to convert real-world images into cartoon-style graphics.",
    techTags: ["Python", "OpenCV", "AI"],
    links: {
      github: "https://github.com/PashamDhanushReddy/AI_BASED_CARTOONING",
    },
    isFlagship: false,
  },
  {
    id: "attendance-system",
    number: "06",
    badge: "Machine Learning",
    title: "AIML Attendance",
    description:
      "AI & ML based automated attendance system utilizing facial recognition or advanced data processing techniques.",
    techTags: ["Python", "Machine Learning"],
    links: {
      github: "https://github.com/PashamDhanushReddy/Attendance_System_AIML",
    },
    isFlagship: false,
  },
  {
    id: "loan-prediction",
    number: "07",
    badge: "Data Science",
    title: "Loan Prediction",
    description:
      "A machine learning model developed to predict loan approval status based on applicant demographic and financial data.",
    techTags: ["Python", "Scikit-Learn"],
    links: {
      github: "https://github.com/PashamDhanushReddy/Loan_Approval-_Prediction",
    },
    isFlagship: false,
  },
  {
    id: "movie-recommender",
    number: "08",
    badge: "Machine Learning",
    title: "Movie Recommender",
    description:
      "A machine learning recommendation system that suggests movies to users based on collaborative filtering or content-based algorithms.",
    techTags: ["Python", "Machine Learning"],
    links: {
      github: "https://github.com/PashamDhanushReddy/movie_recommendation_system",
    },
    isFlagship: false,
  },
  {
    id: "plant-disease",
    number: "09",
    badge: "AI",
    title: "Plant Disease AI",
    description:
      "An application aimed at assisting farmers by automatically detecting plant diseases from images using machine learning models.",
    techTags: ["JavaScript", "Machine Learning"],
    links: {
      github: "https://github.com/PashamDhanushReddy/plant-_disease_detection",
    },
    isFlagship: false,
  },
  {
    id: "women-safety",
    number: "10",
    badge: "Mobile",
    title: "Women Safety App",
    description:
      "A cross-platform mobile application built with Flutter, designed to provide immediate assistance and safety features for women in emergency situations.",
    techTags: ["Flutter", "Dart", "Mobile"],
    links: {
      github: "https://github.com/PashamDhanushReddy/Women_Safety_Flutter_App",
    },
    isFlagship: false,
  },
  {
    id: "internspark-1",
    number: "11",
    badge: "Task",
    title: "InternSpark Task 1",
    description:
      "Data science and analysis tasks completed as part of the InternSpark internship program.",
    techTags: ["Python", "Jupyter", "Data Science"],
    links: {
      github: "https://github.com/PashamDhanushReddy/InternSpark_Task-1",
    },
    isFlagship: false,
  },
  {
    id: "internspark-2",
    number: "12",
    badge: "Task",
    title: "InternSpark Task 2",
    description:
      "Data science and analysis tasks completed as part of the InternSpark internship program.",
    techTags: ["Python", "Data Science"],
    links: {
      github: "https://github.com/PashamDhanushReddy/InternSpark_Task-2",
    },
    isFlagship: false,
  },
  {
    id: "internspark-3",
    number: "13",
    badge: "Task",
    title: "InternSpark Task 3",
    description:
      "Data science and analysis tasks completed as part of the InternSpark internship program.",
    techTags: ["Python", "Data Science"],
    links: {
      github: "https://github.com/PashamDhanushReddy/InternSpark_Task-3",
    },
    isFlagship: false,
  }
];

export const certificates = {
  featured: [
    {
      name: "Git-Certified Python Developer",
      issuer: "GeeksforGeeks (2025)",
      icon: "📜",
    },
    {
      name: "Android Developer Certificate",
      issuer: "EduSkills & Google for Developers & AICTE",
      icon: "📱",
    }
  ],
  viewAllUrl: "#",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Narsimha Reddy Engineering College",
  cgpa: "8.80",
  graduation: "Present",
  twelfth: "Intermediate (MPC) – 95%",
  tenth: "SSC – 100%",
};

export const footerContent = {
  taglines: [
    "Software Engineering & Backend Dev",
    "Python · Django · React",
    "Full Stack Applications",
  ],
  credential: "B.Tech CSE · CGPA 8.80",
  copyright: `© ${new Date().getFullYear()} Pasham Dhanush Reddy | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
