import { Project, Experience, SkillCategory, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: 'Pampati Naga Sharvani',
  title: 'Software Engineer & AI/ML Developer',
  tagline: 'Crafting intelligent full-stack systems, high-performance backends, and applied machine learning architectures.',
  email: 'pnagasharvani@gmail.com',
  github: 'https://github.com/hack-the-future-26',
  linkedin: 'https://www.linkedin.com/in/pampati-naga-sharvani',
  leetcode: 'https://leetcode.com',
  education: {
    institution: 'Chaitanya Bharathi Institute of Technology (CBIT)',
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    graduation: 'Expected Graduation: 2028',
    cgpa: '9.81 / 10',
    cgpaScore: 9.81,
    cgpaMax: 10,
    status: 'High Academic Distinction',
  },
  stats: [
    { label: 'Academic CGPA', value: '9.81', sub: 'at CBIT (CSE)', highlight: true },
    { label: 'LeetCode Solved', value: '200+', sub: 'DSA & Algorithms' },
    { label: 'Research Internship', value: 'IIT Ropar', sub: 'AI/ML Summer Fellow' },
    { label: 'Production Systems', value: '3 Major', sub: 'Full-Stack & ML' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'campus-thrift',
    title: 'Campus Thrift — Student Marketplace',
    subtitle: 'Verified Campus Commerce & Anti-Scam Protection System',
    description:
      'A secure, verified campus marketplace platform connecting university students for safe peer-to-peer textbook and gadget trading, equipped with real-time chat, location-aware discovery, and automated scam mitigation.',
    highlights: [
      'Developed the FastAPI backend for a verified student marketplace supporting product listings, image uploads, location-based discovery, chat, and wishlists.',
      'Designed PostgreSQL database models and REST APIs using SQLAlchemy for users, products, chats, messages, and wishlist management.',
      'Implemented location-based product recommendations and a rule-based scam-risk detection system to improve marketplace safety.',
    ],
    techStack: ['FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'REST APIs', 'Pydantic', 'Geospatial Discovery'],
    githubUrl: 'https://github.com/hack-the-future-26/HWF2026-0016-HELLO-WORLDERS?utm_source=chatgpt.com',
    badge: 'Featured System',
    accentColor: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    metrics: [
      { label: 'Backend Architecture', value: 'FastAPI + SQLAlchemy' },
      { label: 'Database', value: 'PostgreSQL Relational Engine' },
      { label: 'Safety Module', value: 'Rule-Based Scam Detection' },
      { label: 'Discovery Engine', value: 'Location-Based Radius Matching' },
    ],
  },
  {
    id: 'secure-campus-hub',
    title: 'Secure Campus Hub — Smart Identity Verification System',
    subtitle: 'Two-Step Institutional Authentication with Computer Vision',
    description:
      'A high-security campus gatekeeping ecosystem combining strict institutional email domain authorization with real-time YOLOv8 object detection pipelines for authentic student ID card validation.',
    highlights: [
      'Built a two-step campus authentication system with domain-restricted institutional login and YOLOv8-based identity verification.',
      'Implemented object-based image verification using a YOLO detection pipeline for identity validation.',
      'Designed a multi-service architecture integrating React frontend, Express backend, and FastAPI ML inference service through REST APIs.',
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'FastAPI', 'Python', 'YOLOv8', 'Computer Vision', 'REST APIs'],
    githubUrl: 'https://github.com/hack-the-future-26',
    badge: 'Computer Vision',
    accentColor: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    metrics: [
      { label: 'Architecture', value: 'React + Express + FastAPI' },
      { label: 'Model Pipeline', value: 'YOLOv8 Real-time Inference' },
      { label: 'Security Layer', value: 'Domain Restriction + ID Detection' },
      { label: 'Verification Latency', value: '< 180ms ML Inference' },
    ],
  },
  {
    id: 'cryptoscope',
    title: 'CryptoScope — Real-Time Market Analytics Dashboard',
    subtitle: 'Interactive Financial Visualizer & Technical Indicators',
    description:
      'High-throughput cryptocurrency analytical dashboard providing real-time pricing streams, live market performance metrics, technical indicator algorithms (RSI, Moving Averages), and multi-timeframe interactive visualizations.',
    highlights: [
      'Built a real-time cryptocurrency analytics dashboard for monitoring live market trends, asset performance, and price movements.',
      'Implemented live market cards, technical indicators (RSI, Moving Average), and timeframe-based interactive visualizations.',
      'Integrated CoinGecko REST APIs to power live market data, top gainers/losers, and historical trend visualizations.',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'CoinGecko API', 'REST APIs', 'Technical Indicators (RSI/MA)'],
    githubUrl: 'https://github.com/hack-the-future-26',
    badge: 'Real-Time Analytics',
    accentColor: 'from-amber-500/20 via-orange-500/10 to-transparent',
    metrics: [
      { label: 'API Provider', value: 'CoinGecko REST Engine' },
      { label: 'Indicators', value: 'RSI, 20-Day & 50-Day MA' },
      { label: 'Timeframes', value: '24H, 7D, 30D, 1Y' },
      { label: 'Frontend Stack', value: 'React + TypeScript' },
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'AI/ML Intern (Ongoing)',
    organization: 'Vicharanashala Lab for Education Design (VLED Lab)',
    subOrg: 'Indian Institute of Technology Ropar (IIT Ropar)',
    period: 'June 2026 – Present',
    status: 'Active Fellowship',
    bullets: [
      'Selected for Summer Internship 2026 through a competitive evaluation process.',
      'Contributing to an ML-based crop market price prediction project using agricultural datasets.',
      'Exploring data preprocessing, regression models, and model evaluation using Python and Scikit-learn.',
      'Engineering feature transformation pipelines to handle climate, seasonal supply shocks, and historical mandi price trends.',
    ],
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Agricultural Datasets', 'Regression Analysis', 'Data Preprocessing'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages utilized for system architecture and algorithmic programming',
    skills: [
      { name: 'Python', level: 'Advanced', note: 'FastAPI, Scikit-learn, ML pipelines' },
      { name: 'C++', level: 'Advanced', note: 'Competitive DSA, OOP, Memory structures' },
      { name: 'TypeScript', level: 'Proficient', note: 'Type-safe frontend & Node APIs' },
      { name: 'JavaScript', level: 'Proficient', note: 'ES6+, Async I/O, Web ecosystems' },
      { name: 'Java', level: 'Proficient', note: 'OOP fundamentals, Software paradigms' },
      { name: 'C', level: 'Foundational', note: 'Pointers, low-level architecture' },
    ],
  },
  {
    category: 'Backend & APIs',
    description: 'High-performance microservices, REST design, and server-side runtimes',
    skills: [
      { name: 'FastAPI', level: 'Advanced', note: 'Async routing, Pydantic, high-throughput' },
      { name: 'Node.js', level: 'Proficient', note: 'Event loop, server orchestration' },
      { name: 'Express.js', level: 'Proficient', note: 'Middleware, API gateways, routing' },
      { name: 'REST APIs', level: 'Advanced', note: 'Clean endpoint architecture, JWT, CORS' },
      { name: 'SQLAlchemy', level: 'Proficient', note: 'ORM mapping, transactional queries' },
    ],
  },
  {
    category: 'Databases & Storage',
    description: 'Relational data modeling, indexing, and NoSQL storage engines',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', note: 'Relational schemas, constraints, indexing' },
      { name: 'MySQL', level: 'Proficient', note: 'Relational design, normalization, queries' },
      { name: 'MongoDB', level: 'Proficient', note: 'Document schemas, aggregation pipelines' },
    ],
  },
  {
    category: 'Machine Learning & CV',
    description: 'Applied data science, computer vision pipelines, and predictive models',
    skills: [
      { name: 'YOLOv8', level: 'Proficient', note: 'Object detection, bounding boxes, CV' },
      { name: 'Scikit-learn', level: 'Proficient', note: 'Regression, classification, evaluation' },
      { name: 'Pandas', level: 'Proficient', note: 'Data wrangling, aggregation, cleaning' },
      { name: 'NumPy', level: 'Proficient', note: 'Matrix computations, vectorization' },
      { name: 'Matplotlib', level: 'Working', note: 'Exploratory data visualization' },
    ],
  },
  {
    category: 'CS Fundamentals & Problem Solving',
    description: 'Rigorous theoretical foundations and competitive algorithmic training',
    skills: [
      { name: 'Data Structures & Algorithms', level: '200+ Solved', note: 'Trees, Graphs, DP, Heaps' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Advanced', note: 'Design patterns, SOLID' },
      { name: 'Database Management (DBMS)', level: 'Advanced', note: 'ACID, Indexing, Transactions' },
      { name: 'Operating Systems (OS)', level: 'Core', note: 'Concurrency, Memory, Schedulers' },
      { name: 'Computer Networks (CN)', level: 'Core', note: 'TCP/IP, HTTP/S, Sockets' },
      { name: 'LeetCode Problem Solving', level: '200+ Solved', note: 'Consistent analytical solving' },
    ],
  },
  {
    category: 'Developer Tools & Frontend',
    description: 'Modern development workflows and interface engineering',
    skills: [
      { name: 'React.js', level: 'Proficient', note: 'Hooks, reactive state, component trees' },
      { name: 'HTML5 & CSS3', level: 'Advanced', note: 'Semantic structure, Tailwind styling' },
      { name: 'Git & GitHub', level: 'Advanced', note: 'Version control, collaborative workflows' },
      { name: 'VS Code', level: 'Proficient', note: 'Debugging, extensions, environment' },
      { name: 'Figma', level: 'Proficient', note: 'UI wireframing & prototype inspection' },
      { name: 'Postman', level: 'Proficient', note: 'API contract testing & debugging' },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'school-topper',
    title: 'School Topper (20-Year Record Broken)',
    yearOrHighlight: 'Historic Academic Distinction',
    description: 'Graduated as the overall school topper, achieving the highest academic score and breaking a 20-year unbroken school record.',
    iconName: 'Trophy',
  },
  {
    id: 'ncc-certificate',
    title: 'National Cadet Corps (NCC) — "A" Certificate',
    yearOrHighlight: 'Leadership & Discipline',
    description: 'Awarded the prestigious "A" Certificate by actively demonstrating discipline, drill precision, survival training, and teamwork-oriented activities.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'botfoundry-workshop',
    title: 'BotFoundry Workshop Organizer',
    organization: 'Research & Innovation (R&I) Club at CBIT',
    yearOrHighlight: 'Community & Technical Mentorship',
    description: 'Assisted in orchestrating and organizing the BotFoundry Workshop, guiding students in robotics, automation, and foundational coding principles.',
    iconName: 'Cpu',
  },
  {
    id: 'iit-ropar-internship',
    title: 'Competitive Fellowship Selection',
    organization: 'VLED Lab, IIT Ropar',
    yearOrHighlight: 'Summer 2026 Evaluation',
    description: 'Secured the Summer Internship 2026 fellowship at IIT Ropar through a highly competitive nationwide evaluation process.',
    iconName: 'Award',
  },
];
