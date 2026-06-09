/*
  Edit portfolio content here.

  Add project screenshots/videos under public/assets/projects/.
  Add certificate images under public/assets/certificates/.
  Add your resume PDF under public/assets/resume/.

  Use assetPath for public files so links work on GitHub Pages subpaths:
  assetPath("assets/projects/visionsphere-home.png")
  assetPath("assets/certificates/security-plus.png")
  assetPath("assets/resume/resume.pdf")
*/

export const assetPath = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const profile = {
  name: "Nurul Hidayah Binti Leong Kam Soi",
  title: "Portfolio",
  intro:
    "IT diploma graduate focused on full-stack development, backend systems, and cybersecurity learning.",
  tagline: 
    "Curious, system-minded, and continuously learning.",
  summary:
    "Completed Diploma in Information Technology studies with hands-on experience building web applications, backend systems, and modern frontend interfaces. Developed projects including forum platforms, e-commerce systems, and responsive portfolio websites while continuously improving technical skills through practical development experience.",
  location: "Malaysia",
  currentStatus: "Software Support",
  typingRoles: [
    "Full-Stack Developer",
    "Backend Learner",
    "Cybersecurity Explorer",
  ],
  highlights: [
    ["Stack", "Node.js / Express.js / MongoDB"],
    ["Focus", "Full-stack systems"],
    ["Interest", "Cybersecurity"],
  ],
};

// Edit this timeline to update the About Me milestones.
// Keep the date short so it stays clean on mobile, for example "March 2023".
export const aboutMilestones = [
  {
    id: "completed-spm",
    date: "March 2023",
    title: "Completed SPM",
    description:
      "Completed Sijil Pelajaran Malaysia (SPM) with elective subjects including Geography, Additional Science, and Home Science.",
  },
  {
    id: "started-diploma",
    date: "July 2023",
    title: "Started Diploma in Information Technology",
    description:
      "Began diploma studies focused on programming, databases, web development, and practical IT coursework.",
  },
  {
    id: "ai-content-internship",
    date: "December 2025 - February 2026",
    title: "AI Content Development Internship",
    description:
      "Worked as an AI Content Development Intern using tools such as ChatGPT, HeyGen, Grok, HeyGen, Pippit, Canva, and CapCut for educational content creation and multimedia preparation.",
  },
  {
    id: "completed-diploma",
    date: "April 2026",
    title: "Completed Diploma in Information Technology",
    description:
      "Completed diploma coursework, internship, and final year project while awaiting official transcript and graduation documents.",
  },
  {
    id: "software-support-role",
    date: "June 2026 - Present",
    title: "Software Support Full-time Role",
    description:
      "Assists clients with SQL Payroll and SQL Accounting system setup, troubleshooting, and daily operations.",
  },
];

export const contactLinks = [
  {
    label: "GitHub",
    value: "Click here to view GitHub",
    href: "https://github.com/dayahtech",
    type: "github",
  },
  {
    label: "WhatsApp",
    value: "Click here to chat via WhatsApp",
    href: "https://wa.me/60196880861",
    type: "whatsapp",
  },
  {
    label: "Email",
    value: "Click here to send an email",
    href: "mailto:dayah.itwork@gmail.com",
    type: "email",
  },
  {
    label: "Resume",
    value: "Click here to view resume",
    href: assetPath("assets/resume/resume.pdf"),
    type: "resume",
  },
];

export const skills = [
  {
    name: "JavaScript",
    category: "Tech",
    level: "Project Experience",
    description: "Used for interactive frontend features and application logic.",
    related: ["VisionSphere", "CloudClean", "CyberStyle", "Portfolio"],
  },
  {
    name: "HTML",
    category: "Tech",
    level: "Project Experience",
    description: "Used to build webpage structures, forms, and application layouts.",
    related: ["VisionSphere", "CloudClean", "CyberStyle", "Portfolio"],
  },
  {
    name: "CSS",
    category: "Tech",
    level: "Project Experience",
    description: "Used for responsive layouts, UI styling, and interface customization.",
    related: ["VisionSphere", "CloudClean", "CyberStyle", "Portfolio"],
  },
  {
    name: "React",
    category: "Tech",
    level: "Project Experience",
    description: "Used to build the personal portfolio frontend interface.",
    related: ["Portfolio"],
  },
  {
    name: "Tailwind CSS",
    category: "Tech",
    level: "Project Experience",
    description: "Used for modern and responsive portfolio styling.",
    related: ["Portfolio"],
  },
  {
    name: "Node.js",
    category: "Tech",
    level: "Project Experience",
    description: "Used to develop backend systems for full-stack applications.",
    related: ["VisionSphere", "CloudClean", "CyberStyle"],
  },
  {
    name: "Express.js",
    category: "Tech",
    level: "Project Experience",
    description: "Used for backend routing, middleware, and server-side handling.",
    related: ["VisionSphere", "CloudClean", "CyberStyle"],
  },
  {
    name: "MongoDB",
    category: "Tech",
    level: "Project Experience",
    description: "Used for storing and managing application data.",
    related: ["VisionSphere", "CloudClean"],
  },
  {
    name: "EJS",
    category: "Tech",
    level: "Project Experience",
    description: "Used to create dynamic server-rendered pages.",
    related: ["VisionSphere", "CloudClean", "CyberStyle"],
  },
  {
    name: "Authentication Systems",
    category: "Tech",
    level: "Project Experience",
    description:
      "Implemented login systems, password hashing, sessions, and email verification.",
    related: ["VisionSphere", "CloudClean", "CyberStyle"],
  },
  {
    name: "File Upload Handling",
    category: "Tech",
    level: "Project Experience",
    description: "Implemented image and media upload functionality.",
    related: ["VisionSphere", "CloudClean"],
  },
  {
    name: "API Integration",
    category: "Tech",
    level: "Project Experience",
    description:
      "Integrated third-party services and external APIs into web applications.",
    related: ["CloudClean"],
  },
  {
    name: "Python",
    category: "Tech",
    level: "Certification, Project Experience",
    description:
      "Learning Python fundamentals and applying them to backend development, scripting, and web application logic.",
    related: ["Finora", "Coursera Certificate"],
  },
  {
    name: "Flask",
    category: "Tech",
    level: "Project Experience",
    description:
      "Used for backend routes, server-side logic, and web application development.",
    related: ["Finora"],
  },
  {
    name: "PostgreSQL",
    category: "Tech",
    level: "Project Experience",
    description:
      "Used for relational database storage and structured data management.",
    related: ["Finora"],
  },
  {
    name: "Bootstrap 5",
    category: "Tech",
    level: "Project Experience",
    description:
      "Used for responsive layouts and reusable UI components.",
    related: ["Finora"],
  },
  {
    name: "WordPress",
    category: "Tools",
    level: "Certification, Project Experience",
    description:
      "Used to build and customize websites through practical project work and certification learning.",
    related: ["CyberSafeMY", "Coursera Certificate"],
  },
  {
    name: "Manual Testing",
    category: "Tech",
    level: "Project Experience",
    description:
      "Tested application features, user flows, and interface functionality during development.",
    related: ["VisionSphere", "CloudClean", "CyberStyle", "Portfolio"],
  },
  {
    name: "Java",
    category: "Tech",
    level: "Academic Exposure",
    description: "Learned object-oriented programming fundamentals.",
    related: [],
  },
  {
    name: "C++",
    category: "Tech",
    level: "Academic Exposure",
    description: "Learned programming logic and problem-solving fundamentals.",
    related: [],
  },
  {
    name: "VB.NET",
    category: "Tech",
    level: "Academic Exposure",
    description: "Learned desktop application programming fundamentals.",
    related: [],
  },
  {
    name: "Visual Studio Code",
    category: "Tools",
    level: "Academic Exposure, Project Experience",
    description: "Used as the primary development environment for academic work and projects.",
    related: ["VisionSphere", "CloudClean", "CyberStyle", "Portfolio"],
  },
  {
    name: "Visual Studio",
    category: "Tools",
    level: "Academic Exposure",
    description: "Used for academic VB.NET programming and desktop application development practice.",
    related: ["VB.NET"],
  },
  {
    name: "Git",
    category: "Tools",
    level: "Project Experience",
    description: "Used for version control and development workflow management.",
    related: ["VisionSphere", "CloudClean", "CyberStyle", "Portfolio"],
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Project Experience",
    description: "Used for repository management and project hosting.",
    related: ["VisionSphere", "CloudClean", "CyberStyle", "Portfolio"],
  },
  {
    name: "MongoDB Atlas",
    category: "Tools",
    level: "Project Experience",
    description: "Used for cloud database hosting.",
    related: ["VisionSphere"],
  },
  {
    name: "Render",
    category: "Tools",
    level: "Project Experience",
    description: "Used for deploying and hosting full-stack web applications.",
    related: ["CyberStyle", "Finora"],
  },
  {
    name: "Heroku",
    category: "Tools",
    level: "Project Experience",
    description: "Used for deploying full-stack applications.",
    related: ["VisionSphere"],
  },
  {
    name: "Canva",
    category: "Tools",
    level: "Internship Experience, Project Experience",
    description: "Used for presentation design and multimedia editing.",
    related: [],
  },
  {
    name: "CapCut",
    category: "Tools",
    level: "Internship Experience",
    description: "Used for video editing and content preparation.",
    related: [],
  },
  {
    name: "ChatGPT",
    category: "Tools",
    level: "Internship Experience, Project Experience",
    description: "Used for AI-assisted development and content generation workflows.",
    related: [],
  },
  {
    name: "GitHub Copilot",
    category: "Tools",
    level: "Project Experience",
    description: "Used for AI-assisted coding support.",
    related: [],
  },
  {
    name: "Grok",
    category: "Tools",
    level: "Internship Experience",
    description: "Used for AI-assisted content generation during internship work.",
    related: [],
  },
  {
    name: "HeyGen",
    category: "Tools",
    level: "Internship Experience",
    description: "Used for AI-generated content creation.",
    related: [],
  },
  {
    name: "Pippit",
    category: "Tools",
    level: "Internship Experience",
    description: "Used for multimedia and AI content workflows.",
    related: [],
  },
  {
    name: "Apache NetBeans",
    category: "Tools",
    level: "Academic Exposure",
    description: "Used for academic programming and development activities.",
    related: [],
  },
  {
    name: "Dev-C++",
    category: "Tools",
    level: "Academic Exposure",
    description: "Used for academic programming and C++ learning activities.",
    related: [],
  },
  {
    name: "Malay",
    category: "Languages",
    level: "Native",
    description: "Native language ability.",
    related: [],
  },
  {
    name: "English",
    category: "Languages",
    level: "Fluent",
    description: "Fluent language ability.",
    related: [],
  },
  {
    name: "Chinese",
    category: "Languages",
    level: "Conversational",
    description: "Conversational language ability.",
    related: [],
  },
  {
    name: "Japanese",
    category: "Languages",
    level: "Basic",
    description: "Basic language ability.",
    related: [],
  },
  {
    name: "Problem Solving",
    category: "Soft Skills",
    level: "Intermediate",
    description: "Applied debugging and logical thinking during development.",
    related: [],
  },
  {
    name: "Time Management",
    category: "Soft Skills",
    level: "Intermediate",
    description:
      "Managed academic projects, internship tasks, and development timelines.",
    related: [],
  },
  {
    name: "Responsibility",
    category: "Soft Skills",
    level: "Intermediate",
    description: "Handled independent project development responsibilities.",
    related: [],
  },
  {
    name: "Willingness to Learn",
    category: "Soft Skills",
    level: "Intermediate",
    description: "Actively learning new technologies and development practices.",
    related: [],
  },
  {
    name: "Adaptability",
    category: "Soft Skills",
    level: "Intermediate",
    description: "Quickly adapts to new tools and workflows.",
    related: [],
  },
];

export const projectCategories = [
  {
    id: "work-coursework",
    title: "Work / Coursework Journey",
    description: "Academic and coursework projects built through practical development experience and technical learning.",
  },
  {
    id: "self-projects",
    title: "Self Projects Journey",
    description: "Independent projects built to explore ideas, improve skills, and expand technical experience.",
  },
];

export const projects = [
  {
    id: "visionsphere",
    title: "VisionSphere",
    status: "Completed",
    category: "Work / Coursework Journey",
    type: "Final Year Project",
    date: "2025",
    shortDescription:
      "Forum-based web application for authorized Vision University College users.",
    description:
      "VisionSphere is a forum-based web application developed as a Final Year Project (FYP) for Vision University College. The platform is designed for authorized users to participate in community-based discussions through posts, comments, notifications, and moderated interactions.",
    features: [
      "User authentication and session-based access control",
      "Email verification and password reset flow",
      "Community creation and management",
      "Post creation, editing, and deletion",
      "Comments and interaction features",
      "Poll voting and reaction features",
      "Notification system",
      "Search functionality",
      "Karma system",
      "Profile management with avatar and banner upload",
      "Role-based moderation and user management",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "EJS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "Express Session",
      "Cloudinary",
      "Multer",
      "Nodemailer",
      "Heroku",
    ],
    roleGroups: [
      {
        label: "My Role",
        items: [
          "System design and full development: Independently developed.",
        ],
      },
      {
        label: "Collaborator Role",
        items: ["Prototype design and multimedia: Azlina Lee."],
      },
    ],
    media: [],
    links: [
      {
        label: "Live Demo",
        href: "https://visionsphere-b310b3771fcb.herokuapp.com/",
      },
      {
        label: "GitHub",
        href: "https://github.com/dayahtech/VisionSphere",
      },
    ],
    duration: "July 2025 - October 2025",
  },

  {
    id: "cloudclean",
    title: "CloudClean",
    status: "Completed",
    category: "Work / Coursework Journey",
    type: "Assignment Project",
    date: "2025",
    shortDescription:
      "Cleaning service booking web application assignment.",
    description:
      "CloudClean is a cleaning service web application developed for assignment purposes using Agile methodology. The system supports user authentication, service browsing, booking management, profile updates, reviews, and payment simulation in a structured service-booking workflow.",
    features: [
      "User signup, login, and logout",
      "JWT-based authentication with cookies",
      "Forgot password and reset password flow",
      "Service listing and checkout flow",
      "Booking submission and booking list management",
      "User profile viewing and updating",
      "Review system with image upload",
      "PayPal Sandbox payment integration",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "EJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Multer",
      "Nodemailer",
      "PayPal Sandbox API",
      "Google Maps JavaScript API",
    ],
    roleGroups: [
      {
        label: "My Role",
        items: ["System development: Independently developed."],
      },
      {
        label: "Collaborator Role",
        items: ["Prototype design and multimedia: Azlina Lee."],
      },
    ],
    media: [],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/dayahtech/CloudClean",
      },
    ],
    unavailableLinks: [
      {
        label: "Live Demo",
        reason:
          "This project was not deployed publicly because it uses a local MongoDB database.",
      },
    ],
    duration: "December 2024 - February 2025",
  },

  {
    id: "cyberstyle",
    title: "CyberStyle",
    status: "Completed",
    category: "Work / Coursework Journey",
    type: "Assignment Project",
    date: "2024",
    shortDescription:
      "Full-stack e-commerce web application assignment.",
    description:
      "CyberStyle is an e-commerce web application developed as an early website development project in 2024. The system provides product browsing, cart management, checkout flow, user authentication, and product review features in a server-rendered shopping platform.",
    features: [
      "User signup and login",
      "Product listing and product detail pages",
      "Category-based browsing",
      "Search and autocomplete",
      "Add to cart and remove from cart flow",
      "Buy Now checkout flow",
      "Checkout, payment, and order confirmation flow",
      "Purchased items history",
      "Product reviews for purchased items",
      "User profile management",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "EJS",
      "Node.js",
      "Express.js",
      "Express Session",
      "bcrypt",
      "Nodemailer",
      "JSON file data",
      "Render",
    ],
    roleGroups: [
      {
        label: "My Role",
        items: ["System development: Independently developed."],
      },
      {
        label: "Collaborator Roles",
        items: [
          "Prototype design: Azlina Lee.",
          "Product designs: Puteri Nurelisah, Rahmah, Muhammad Hakeem, and Ehsan Ali Khan.",
        ],
      },
    ],
    media: [],
    links: [
      {
        label: "Live Demo",
        href: "https://cyberstyle.onrender.com",
      },
      {
        label: "GitHub",
        href: "https://github.com/dayahtech/CyberStyle",
      },
    ],
    duration: "September 2024 - October 2024",
  },

  {
    id: "finora",
    title: "Finora",
    status: "Completed",
    category: "Self Projects Journey",
    type: "Personal Project",
    date: "2026",
    shortDescription:
      "Full-stack personal finance dashboard built with Python Flask and PostgreSQL.",
    description:
      "Finora is a finance tracking web application that allows users to manage income, expenses, savings goals, analytics, and profile preferences through a responsive dashboard.",
    features: [
      "User authentication",
      "Dashboard summary",
      "Transaction management",
      "Savings goals",
      "Analytics charts",
      "Profile preferences",
      "Responsive layout",
    ],
    techStack: ["Python", "Flask", "PostgreSQL", "Bootstrap 5", "Render"],
    roleGroups: [
      {
        label: "My Role",
        items: ["Designed and developed the full-stack personal finance dashboard independently."],
      },
    ],
    media: [],
    links: [
      {
        label: "Live Demo",
        href: "https://finora-vdnf.onrender.com/",
      },
      {
        label: "GitHub",
        href: "https://github.com/dayahtech/Finora",
      },
    ],
    duration: "May 2026",
  },

  {
    id: "portfolio",
    title: "Portfolio",
    status: "Active Development",
    category: "Self Projects Journey",
    type: "Personal Project",
    date: "2026",
    shortDescription:
      "Interactive frontend-only developer portfolio website.",
    description:
      "A modern frontend-only developer portfolio website built to showcase projects, certifications, skills, milestones, and technical learning journey through interactive sections and responsive design.",
    features: [
      "Interactive project journeys",
      "Certificate detail modals",
      "Skills showcase section",
      "Milestone timeline",
      "Responsive design",
      "Smooth animations",
      "GitHub Pages deployment",
    ],
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub Pages",
    ],
    roleGroups: [
      {
        label: "My Role",
        items: ["Designed and developed the frontend-only portfolio website independently."],
      },
    ],
    media: [],
    links: [
      {
        label: "Live Demo",
        href: "https://dayahtech.github.io/Portfolio",
      },
      {
        label: "GitHub",
        href: "https://github.com/dayahtech/Portfolio",
      },
    ],
    duration: "May 2026",
  },
  
  {
    id: "cybersafemy",
    title: "CyberSafeMY",
    status: "In Progress",
    category: "Self Projects Journey",
    type: "WordPress Project",
    date: "2026",
    shortDescription:
      "WordPress website focused on cybersecurity awareness content.",
    description:
      "CyberSafeMY is a WordPress website developed and customized to present cybersecurity awareness content in a structured public website. The project focused on setting up pages, organizing content, adjusting the theme, and practicing website customization through the WordPress dashboard.",
    features: [
      "WordPress website setup",
      "Page creation and content organization",
      "Theme customization",
      "Basic UI layout customization",
      "WordPress dashboard usage",
      "Public website publishing",
    ],
    techStack: ["WordPress", "Website Customization"],
    roleGroups: [
      {
        label: "My Role",
        items: [
          "Built and customized the website structure, pages, layouts, and content using WordPress tools and dashboard features.",
        ],
      },
    ],
    media: [],
    links: [
      {
        label: "Live Demo",
        href: "https://testmy575.wordpress.com",
      },
    ],
    duration: "May 2026",
  },
];

export const certificates = [
  {
    id: "spm-certificate",
    title: "SPM and CEFR Records",
    category: "Education",
    topic: "Secondary Education",
    platform: "Ministry of Education Malaysia",
    date: "March 2023",
    images: [
      assetPath("assets/certificates/SPM.png"),
      assetPath("assets/certificates/CEFR.png"),
    ],
    description:
      "Completed Sijil Pelajaran Malaysia (SPM), including the related CEFR English proficiency record issued with the SPM results.",
    learnedTitle: "Record Details",
    whatILearned: [
      "Completed national secondary school examination",
      "SPM certificate and CEFR English proficiency record grouped together",
      "Elective subjects included Geography, Additional Science, and Home Science",
    ],
    practicedTitle: "Available Records",
    whatIPracticed: [
      {
        title: "SPM and CEFR Records",
        description:
          "Available SPM and CEFR images are grouped here as one education record.",
      },
    ],
    links: [],
  },
  {
    id: "deans-list-diploma",
    title: "Dean's List Awards",
    category: "Education",
    topic: "Academic Excellence",
    platform: "Vision University College",
    date: "Multiple Semesters",
    images: [
      assetPath("assets/certificates/DipDean1.png"),
      assetPath("assets/certificates/DipDean2.png"),
      assetPath("assets/certificates/DipDean3.png"),
    ],
    description:
      "Recognized for academic excellence across multiple semesters during Diploma in Information Technology studies. Three certificate records are shown, with an additional Semester 5 Dean's List achievement noted with GPA 4.00; the certificate copy is unavailable.",
    learnedTitle: "Recognition Details",
    whatILearned: [
      "Dean's List recognition across multiple diploma semesters",
      "Academic excellence in Diploma in Information Technology coursework",
      "Semester 5 Dean's List achievement with GPA 4.00; certificate copy unavailable",
    ],
    practicedTitle: "Available Records",
    whatIPracticed: [
      {
        title: "Dean's List Certificates",
        description:
          "Available certificate images are grouped here as one achievement record to keep the portfolio clean.",
      },
    ],
    links: [],
  },
  {
    id: "python-project",
    title: "Create Your First Python Program From UST",
    category: "Tech",
    topic: "Python",
    platform: "Coursera",
    date: "May 10, 2026",
    image: assetPath("assets/certificates/Python.png"),
    description:
      "Completed a Python project certificate focused on creating a first Python program and practicing beginner programming fundamentals.",
    whatILearned: [
      "Basic Python program structure",
      "Python syntax and logic fundamentals",
      "Beginner programming workflow",
      "Practical project-based coding practice",
    ],
    whatIPracticed: [
      {
        title: "First Python Program",
        description:
          "Practiced building a simple Python program through a guided Coursera project.",
      },
    ],
    links: [
      {
        label: "Coursera Certificate",
        url: "https://coursera.org/verify/6SWMJXEIBROD",
      },
    ],
  },
  {
    id: "wordpress-project",
    title: "Build a Free Website with WordPress",
    category: "Tech",
    topic: "WordPress",
    platform: "Coursera",
    date: "May 8, 2026",
    image: assetPath("assets/certificates/WordPress.png"),
    description:
      "Completed a WordPress project certification focused on building and customizing a functional website using WordPress tools and features.",
    whatILearned: [
      "WordPress website setup and customization",
      "Website structure and page management",
      "Basic UI customization and content organization",
      "WordPress dashboard and plugin usage",
    ],
    whatIPracticed: [
      {
        title: "CyberSafeMY Website",
        description:
          "Built and customized a WordPress website as practical hands-on experience using layouts, pages, and content management features.",
      },
    ],
    links: [
      {
        label: "CyberSafeMY Website",
        url: "https://testmy575.wordpress.com",
      },
      {
        label: "Coursera Certificate",
        url: "https://coursera.org/verify/7Z7YULV266MX",
      },
    ],
  },
];
