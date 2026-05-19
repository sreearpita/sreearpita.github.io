export type Profile = {
  name: string;
  title: string;
  positioning: string;
  email: string;
  location: string;
  linkedIn: string;
  github: string;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type Project = {
  title: string;
  period: string;
  summary: string;
  problem: string;
  role: string;
  stack: string[];
  links: Array<{
    label: string;
    href: string;
  }>;
  featured: boolean;
  highlights?: string[];
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  tools: string[];
  proof: string;
};

export const profile: Profile = {
  name: 'Sree Arpita Patra',
  title: 'Software Engineer',
  positioning:
    'I build reliable web systems across telecom, fintech, and commerce with Java, Spring Boot, Angular, React, Flutter, and microservices.',
  email: 'sreearpitapatra@gmail.com',
  location: 'Singapore',
  linkedIn: 'https://www.linkedin.com/in/sree-arpita-patra',
  github: 'https://github.com/sreearpita',
};

export const metrics: Metric[] = [
  {
    value: '5+',
    label: 'Years shipping software',
    detail: 'Enterprise platforms, internal tools, and customer-facing web systems.',
  },
  {
    value: '3',
    label: 'Product domains',
    detail: 'Telecom analytics, fintech onboarding, and commerce workflows.',
  },
  {
    value: '6',
    label: 'Selected builds',
    detail: 'Full-stack projects spanning Spring Boot, Flutter, React, Angular, Node, and SQL.',
  },
  {
    value: 'SG',
    label: 'Based in Singapore',
    detail: 'Available for software engineering and platform roles.',
  },
];

export const projects: Project[] = [
  {
    title: 'Swipe2Eat',
    period: '2026',
    summary:
      'Food-ordering platform focused on streamlined browsing, ordering, and checkout experiences.',
    problem:
      'Restaurant ordering flows need to feel fast while still handling menus, carts, customer state, and transactional boundaries.',
    role:
      'Full-stack engineer shaping the Java/Spring Boot service layer and Flutter frontend experience.',
    stack: ['Java', 'Spring Boot', 'Flutter', 'MySQL'],
    links: [
      {
        label: 'Org repository',
        href: 'https://github.com/orgs/swipe2eat/repositories',
      },
    ],
    featured: true,
    highlights: [
      'Modeled core ordering surfaces around browse, cart, checkout, and confirmation states.',
      'Built the frontend experience with Flutter while keeping backend service responsibilities clear.',
      'Kept the project visible even though it lives under an organization account.',
    ],
  },
  {
    title: 'AI Friend',
    period: 'April 2025',
    summary:
      'Privacy-first locally hosted AI chatbot using Spring Boot with Mistral through Ollama.',
    problem:
      'Personal AI assistants are often cloud-dependent; this build explored friendly conversation while keeping model execution local.',
    role:
      'Designed the backend integration path, conversation flow, and secure local runtime expectations.',
    stack: ['Spring Boot', 'Mistral LLM', 'Ollama'],
    links: [
      {
        label: 'View code',
        href: 'https://github.com/sreearpita/AI-Friend',
      },
    ],
    featured: true,
    highlights: [
      'Integrated local model execution through Ollama instead of relying on hosted inference.',
      'Focused backend behavior on predictable, private chat interactions.',
      'Used Java service patterns to keep AI integration isolated and maintainable.',
    ],
  },
  {
    title: 'Flowelle',
    period: 'March 2025',
    summary:
      "Women's health and menstrual cycle tracking app with prediction, uploads, authentication, and consultation planning.",
    problem:
      'Health tracking workflows need clarity, privacy, and low-friction reporting for users across markets.',
    role:
      'Built full-stack product surfaces across React, Spring Boot, and MySQL.',
    stack: ['React', 'Spring Boot', 'MySQL'],
    links: [
      {
        label: 'View code',
        href: 'https://github.com/sreearpita/Flowelle',
      },
    ],
    featured: true,
    highlights: [
      'Created product areas for period prediction, health records, authentication, and consultation planning.',
      'Balanced user-facing simplicity with backend data organization.',
      'Designed the project as a global, privacy-conscious health product.',
    ],
  },
  {
    title: 'MakeMyBooking',
    period: 'February 2025',
    summary:
      'Event ticket booking platform for movies, concerts, theater, and sports.',
    problem:
      'Booking flows must support category discovery, search, cart state, and confirmation without losing user context.',
    role:
      'Implemented full-stack event browsing and booking workflows.',
    stack: ['React', 'Spring Boot', 'MySQL'],
    links: [
      {
        label: 'View code',
        href: 'https://github.com/sreearpita/MakeMyBooking',
      },
    ],
    featured: false,
  },
  {
    title: 'Project Q',
    period: '2021',
    summary:
      'Experimental e-commerce GraphQL API using Node.js, Express.js, Apollo Server, queries, mutations, and subscriptions.',
    problem:
      'E-commerce data surfaces benefit from flexible query shapes and real-time updates.',
    role:
      'Built API behavior for GraphQL data exchange and real-time subscription patterns.',
    stack: ['Node.js', 'Express.js', 'GraphQL'],
    links: [
      {
        label: 'View code',
        href: 'https://github.com/sreearpita/Project-Q',
      },
    ],
    featured: false,
  },
  {
    title: 'Essentials Store',
    period: '2021',
    summary:
      'Daily essentials marketplace with admin/shopper roles, CRUD operations, cart, and wishlist features.',
    problem:
      'Commerce systems need role-aware workflows that stay understandable for both administrators and shoppers.',
    role:
      'Built backend and server-rendered storefront behavior with Node, Express, Sequelize, and MySQL.',
    stack: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'EJS'],
    links: [
      {
        label: 'View code',
        href: 'https://github.com/sreearpita/Essentials-Store',
      },
    ],
    featured: false,
  },
];

export const experience: Experience[] = [
  {
    role: 'SVC Info Developer II',
    company: 'Hewlett Packard Enterprise',
    location: 'Bengaluru, India',
    period: 'April 2022 - Nov 2024',
    summary:
      'Delivered analytical dashboards and monitoring systems for international telecom clients.',
    highlights: [
      'Built Angular and TypeScript dashboards for Safari, DU Dubai, and Telefonica Spain.',
      'Created alarm monitoring systems with protocol categorization and severity classification.',
      'Led scratch-built resource management work for DU Dubai.',
      'Reverse-engineered legacy telecom flows to support modernization work.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Cognizant Technology Solutions',
    location: 'Bengaluru, India',
    period: 'May 2020 - April 2022',
    summary:
      'Built fintech onboarding services and commerce systems across Java and Node stacks.',
    highlights: [
      'Built merchant onboarding platform capabilities for PayPal.',
      'Refactored a monolithic API into three discrete services for better throughput.',
      'Created a bulk onboarding engine for Facebook Marketplace using Spring Batch.',
      "Contributed to Macy's e-commerce product recommendation work.",
    ],
  },
  {
    role: 'Full Stack Development Intern',
    company: 'Cognizant Technology Solutions',
    location: 'Hyderabad, India',
    period: 'Jan 2019 - April 2019',
    summary:
      'Completed hands-on full-stack training across frontend, backend, and deployment foundations.',
    highlights: [
      'Selected for a full-stack development program.',
      'Trained across Angular, JavaScript, Java, Spring Boot, and Docker.',
      'Delivered mentored projects using professional engineering practices.',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    label: 'Frontend systems',
    tools: ['Angular', 'React', 'Flutter', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    proof: 'Dashboards, booking flows, mobile-first product surfaces, and responsive UI systems.',
  },
  {
    label: 'Backend engineering',
    tools: ['Java', 'Spring Boot', 'Spring Batch', 'Hibernate', 'JPA', 'Node.js'],
    proof: 'Service APIs, batch onboarding, persistence layers, and domain workflows.',
  },
  {
    label: 'Data and integration',
    tools: ['MySQL', 'Oracle', 'PostgreSQL', 'Cassandra', 'MongoDB', 'GraphQL'],
    proof: 'Relational data modeling, API contracts, and flexible query surfaces.',
  },
  {
    label: 'Platform and delivery',
    tools: ['AWS', 'DevSecOps', 'CI/CD', 'GitHub Actions', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Maven', 'Postman'],
    proof: 'Cloud-aware delivery, secure development practices, container foundations, and repeatable release workflows.',
  },
  {
    label: 'Architecture and testing',
    tools: ['Microservices', 'REST APIs', 'Kafka', 'JUnit', 'Mockito', 'TestNG'],
    proof: 'Modernization, service decomposition, monitoring flows, and testable boundaries.',
  },
];

export const education = [
  {
    qualification: 'M.Tech, Software Engineering (Pursuing)',
    institution: 'National University of Singapore',
    period: 'Jan 2026 - Dec 2027',
  },
  {
    qualification: 'B.Tech, Computer Science & Engineering',
    institution: 'C.V Raman College of Engineering, Bhubaneswar, India',
    period: 'Aug 2015 - May 2019',
  },
  {
    qualification: 'Diploma in IT Architecture',
    institution: 'CDAC, India',
    period: 'April 2016 - March 2019',
  },
];

export const certifications = [
  'Full Stack Web Development Training - Cognizant',
  'Docker & Kubernetes Training - Cognizant',
];
