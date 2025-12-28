import {
  jsdev,
  sastec,
  instructor,
  fullstack,
  javascript,
  reactjs,
  nodejs,
  mongodb,
  sastecskills,
  docker,
  ExisES,
  cjt,
schoolmngmnt,
  backenddev,
  mysql,
  ubuntu,
  expressjs,
  golang,
  wordpress,
  aws,
  python,
  person,
  github
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  { title: "Full Stack Developer", icon: fullstack },
  { title: "Backend Developer", icon: backenddev },
  { title: "Javascript Developer", icon: jsdev },
  { title: "Technical Instructor", icon: instructor },
];

const technologies = [
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },


  { name: "Node JS", icon: nodejs },
  { name: "Express.js", icon: expressjs },

  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },

  { name: "Python", icon: python },
  { name: "Golang", icon: golang },

  { name: "Docker", icon: docker },

  { name: "AWS", icon: aws },
  { name: "Ubuntu", icon: ubuntu },

  { name: "WordPress", icon: wordpress },

];


const experiences = [
{
  id: "exis",
  title: "Full Stack Developer",
  company_name: "Exis Engineering Solutions Srl",
  icon: ExisES,
  iconBg: "#E6DEDD",
  date: "March 2025 - Present",
  points: [
    "Developed and maintained a traffic analytics dashboard for traffic planning, simulation, and optimization (Pianificazione e simulazione di reti di traffico).",
    "Implemented data analytics pipelines for traffic flow analysis using interactive maps, charts, and real-time visualizations.",
    "Built advanced geospatial and 3D visualizations leveraging Deck.gl, Leaflet, and .PLY 3D models to represent traffic networks and simulation results.",
    "Designed and enhanced data visualization components to highlight key traffic indicators and decision-support insights.",
    "Developed backend services using Python and Flask to process, analyze, and expose traffic data via REST APIs.",
    "Collaborated closely with engineering teams to translate traffic modeling requirements into scalable software solutions.",
    "Handled application deployment and environment configuration, ensuring performance, reliability, and maintainability of production systems.",
  ],
},
{
  id: "cookiejar",
  title: "Full Stack Developer | Project Manager",
  company_name: "Cookie Jar Tech",
  icon: cjt,
  iconBg: "#E6DEDD",
  date: "September 2022 - October 2024",
  points: [
    "Developed and contributed to large-scale, multi-platform e-commerce systems supporting high-traffic online stores.",
    "Maintained, refactored, and enhanced legacy projects by applying clean code principles, design patterns, and industry best practices.",
    "Significantly reduced the number of production bugs by identifying root causes and delivering fixes within tight and respectful deadlines, earning the internal nickname \"Sara the Bug Slayer\" from the CTO.",
    "Designed and developed a Human Resources (HR) management platform including employee leave (leaves management) and absence tracking workflows.",
    "Collaborated closely with product owners, CTO, and cross-functional teams to improve system reliability, scalability, and long-term maintainability.",
    "Improved overall application performance and stability, accelerating feature delivery and reducing maintenance overhead.",
  ],
},


  {
    id: "sastecskills",
    title: "JavaScript Instructor (Part-time)",
    company_name: "SastecSkills",
    icon: sastecskills,
    iconBg: "#1a1d5dff",
    date: "June 2022 - October 2022",
    points: [
      "Delivered JavaScript and MERN Stack bootcamps.",
      "Supervised students on frontend and backend projects.",
      "Conducted workshops on task management and problem-solving in professional environments.",
    ],
  },

  {
    id: "sastec",
    title: "Backend Developer (Golang)",
    company_name: "SASTEC Group",
    icon: sastec,
    iconBg: "#E6DEDD",
    date: "October 2021 - September 2022",
    points: [
      "Developed REST and GraphQL APIs using Golang.",
      "Maintained and improved existing backend systems.",
      "Integrated SaaS services, video processing, and live webinar platforms.",
      "Worked within SCRUM methodology in a collaborative team.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Sara joined Cookie Jar Tech with a strong foundation in full-stack development, but what truly sets her apart is her versatility and problem-solving mindset. She has taken on challenging technical tasks, approaching each one with enthusiasm and creative thinking. She was also very quick to adjust herself into project management roles when needed.What I particularly appreciate about Sara is her ability to see beyond immediate solutions. When faced with technical limitations, she doesn't just solve the problem at hand – she proposes thoughtful improvements that enhance overall systems. Her collaborative nature and technical expertise make her a valuable team player. Thank you for our work together, Sara!",
    name: "Mantas Desknys",
    designation: "CTO",
    company: "Cookie jar tech",
    image: person,
  },
    {
    testimonial:
      "Sara is a highly skilled, patient, and motivated full-stack developer with strong experience in backend development using GoLang and Node.js, as well as frontend development with Vue.js and React.js. She has an excellent technical mindset and a solid understanding of both backend architectures and modern frontend frameworks.Beyond her technical capabilities, Sara is very respectful, professional, and reliable. She consistently demonstrated the ability to handle pressure and tight deadlines while maintaining high-quality standards. Her calm approach, strong sense of responsibility, and problem-solving skills made her a key contributor to the team.Sara has a bright and sharp mind, a great work ethic, and a continuous desire to learn and improve. I strongly recommend her to any organization looking for a dependable, versatile, and talented developer.",
    name: "Amine beji",
    designation: "Technical Team leader",
    company: "Cookie jar tech",
    image: person,
  },
];

export const projects = [
  {
  id: "school-management",
  name: "School Management System",
  description:
    "Designed and developed a comprehensive web and mobile-based school management platform that covers the entire academic workflow. The system manages academic years and trimesters, student enrollment, teachers, parents, subjects, and class assignments. Advanced features include timetable generation and management, subject-to-teacher assignment, attendance tracking, grades and exam management, and payment and fee handling. A dedicated mobile application for parents allows real-time access to their children’s attendance, grades, timetables, exam schedules, and academic progress. The platform is built with a strong focus on role-based access control, data accuracy, scalability, and usability for administrators, teachers, students, and parents.",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    { name: "react-native", color: "green-text-gradient" },
    { name: "nodejs", color: "pink-text-gradient" },
    { name: "mongodb", color: "green-text-gradient" },
    { name: "school-management", color: "orange-text-gradient" },
  ],
  image: schoolmngmnt,
  company: "Personal",
},
  {
    id: "products-management",
    name: "Products Management System",
    description:
      "Designed and developed a complete product and inventory management system tailored for warehouse and retail businesses. The platform handles end-to-end product lifecycle management, automated order processing, multi-warehouse stock and quantity tracking, and advanced reporting. Implemented PDF generation for invoices and reports, along with multi-channel product export and synchronization with external e-commerce platforms such as WooCommerce, PrestaShop, and Shopify using multiple data formats (XML, JSON, etc.). Focused on scalability, performance optimization, and seamless integration with third-party services.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "e-commerce", color: "orange-text-gradient" },
    ],
    image: github,
    source_code_link: "https://github.com/Latrachesara",
    company: "Cookie Jar Tech",
  },

  {
    id: "traffic-dashboard",
    name: "Traffic Dashboard Monitoring",
    description:
      "Developed and maintained an advanced traffic analytics and monitoring dashboard aimed at traffic planning, simulation, and optimization (Pianificazione e simulazione di reti di traffico). Built data analytics pipelines to process and analyze traffic flow data, presenting insights through interactive maps, dynamic charts, and near real-time visualizations. Implemented complex geospatial and 3D visualizations using Deck.gl, Leaflet, and .PLY 3D models to accurately represent traffic networks and simulation outputs. Collaborated closely with traffic engineers and domain experts to translate complex modeling requirements into scalable and maintainable software solutions. Also managed deployment, environment configuration, and performance tuning to ensure high reliability and responsiveness.",
    tags: [
      { name: "javascript", color: "yellow-text-gradient" },
      { name: "deck.gl", color: "blue-text-gradient" },
      { name: "leaflet", color: "green-text-gradient" },
      { name: "data-visualization", color: "pink-text-gradient" },
    ],
    image: github,
    company: "Exis Engineering Solutions Srl",
  },

  {
    id: "video-solution",
    name: "Professional Video Solution for Businesses",
    description:
      "Contributed to the development and long-term maintenance of a professional video platform designed for enterprise use. The solution includes multiple modules such as advanced analytics, public and private APIs, video editing tools, TV portals, live broadcasting, and pay-per-view services. The platform supports a wide range of business use cases including marketing campaigns, internal HR communication, corporate messaging, and employee training. Focused on building scalable backend services, ensuring high availability for live streaming, and delivering a seamless user experience across web and TV platforms.",
    tags: [
      { name: "video-streaming", color: "red-text-gradient" },
         { name: "gonlang", color: "red-text-gradient" },
      { name: "api", color: "blue-text-gradient" },
      { name: "analytics", color: "green-text-gradient" },
      { name: "live-broadcast", color: "pink-text-gradient" },
      { name: "webinar", color: "pink-text-gradient" },
    ],
    image: github,
    company: "Sastech Group",
  },
];


export { services, technologies, experiences, testimonials };