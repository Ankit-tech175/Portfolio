import { title } from "process";

const Info =  {
    name: "Ankit Chauhan",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Freelancer"],
    bio: "I'm a passionate Software Engineer, Full Stack Developer, Competitive Programmer, and Freelancer. I thrive on solving complex problems, exploring new technologies, and continuously improving my skills. As a quick learner and team player, I enjoy collaborating with others and contributing to impactful projects. Driven and dedicated, I'm always ready to take on new challenges and grow both personally and professionally."

}

const ProjectInfo = [
    {
        title: "Portfolio",
        description: "This is my portfolio website. It is built using React, TypeScript, Tailwind CSS and Vanta.js. It is a responsive website and works on all devices.",
        image: "project1.png",
        live: true,
        github: "https://github.com/Ankit-tech175/portfolio",
        link: "https://ankit-tech175.github.io/Portfolio/",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Vanta.js"],
        type: "Web",
        status: "Completed",
    },
   {
    title: "Personal Voice Assistant",
    description: "This is a personal voice assistant built using Python. It can recognize voice commands and perform tasks such as opening applications, searching the web, telling the time, and more.",
    image: "project2.png",
    live: false,
    github: "https://github.com/Ankit-tech175/Personal-Voice-Assistant",
    link: "https://github.com/Ankit-tech175/Personal-Voice-Assistant/blob/main/assets/demo.png",
    techStack: ["Python", "SpeechRecognition", "pyttsx3", "webbrowser", "datetime"],
    type: "Desktop",
    status: "ongoing"
}


]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", ],
    },
    {
        title: "Backend",
        skills: ["Node.js",  "MongoDB", "MySQL",  "Firebase", ],
    },
    {
        title: "Programming Languages",
        skills: ["C", "C++", "Java", "Python", "JavaScript", ],
    },
    {
        title: "Competitive Programming",
        skills: ["LeetCode", "HackerRank","Codeforces"],
    },
    {
        title: "tools",
        skills: ["Git", "GitHub",  "Kubernetes", "Google Cloud"],
    },
]

const ExperienceInfo = [
    {
        role: "Intern Web Developer",
        company: "Tech Company",
        date: "Jan 2022 - Present",
        description: "Working as a Software Engineer at Tech Company. Responsible for developing and maintaining web applications using React, Node.js and MongoDB.",
        skills: ["React", "Node.js", "MongoDB", "Express.js"],
    },
    {
        role:"Ethical Hacker",
        company: "Tech Company",
        date: "July 2025 - Present",
        description: "Worked as an Ethical Hacker at Tech Company. Responsible for finding and fixing security vulnerabilities in web applications.",
        skills: ["Ethical Hacking", "Penetration Testing", "Vulnerability Assessment"]
    },
    
    
]

// const Slugs = [
//     "typescript",
//     "javascript",
//     "react",
//     "nodejs",
//     "html",
//     "css",
//     "python",
//     "java",
//     "c++",
//     "c",
//     "mongodb",
//     "mysql",
//     "postgresql",
//     "firebase",
//     "graphql",
//     "docker",
//     "kubernetes",
//     "aws",
//     "azure",
//     "google-cloud",
//     "git",
//     "github",
//     "leetcode",
//     "hackerrank",
//     "codechef",
//     "android",
//     "flutter",
//     "vanta-js",
//     "tailwind-css",
//     "bootstrap",
//     "material-ui",
//     "express-js",
//     "vercel",
//     "netlify",

// ]

const Slugs = [
    "mongodb",
    "vanta",
    "tailwindcss",
    "bootstrap",
    "aws",
    "kubernetes",
    "azure",
    "googlecloud",
  "mysql",
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export {Info, ProjectInfo, SkillInfo, ExperienceInfo, Slugs};
