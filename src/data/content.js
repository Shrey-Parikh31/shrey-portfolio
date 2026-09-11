export const profile = {
  name: "Shrey Parikh",
  roles: [
    "Full-Stack Developer",
    "AI / LLM Engineer",
    "UI/UX Designer",
    "Photonics Researcher",
  ],
  tagline:
    "CS student building across the stack — from LLM-powered apps to inverse-designed nanostructures.",
  location: "Middletown, PA",
  email: "shrey3106@gmail.com",
  phone: "+1 (717) 317-7128",
  linkedin: "https://www.linkedin.com/in/shrey-parikh31/",
  github: "https://github.com/Shrey-Parikh31",
};

export const stats = [
  { label: "gpa", value: "3.6", suffix: "/4.0" },
  { label: "research award", value: "2026", suffix: "" },
  { label: "internships", value: "2", suffix: "" },
  { label: "shipped live", value: "3", suffix: " apps" },
];

export const about = `Computer Science student at Penn State Harrisburg, graduating May 2027, with a background that spans further than most: designing and testing on an enterprise Odoo ERP platform, building and shipping full-stack LLM applications from scratch, and running independent research on inverse-designed nanostructures under a funded fellowship. Comfortable moving between a MATLAB solver, a React component tree, and a Figma file in the same afternoon.`;

export const skills = [
  {
    group: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Go", "Java", "C/C++", "SQL", "MATLAB", "HTML/CSS"],
  },
  {
    group: "AI & LLM",
    items: ["Gemini API", "MCP tool-calling agents", "Retrieval & embeddings", "Prompt & context design", "AI evaluation harnesses", "Claude Code"],
  },
  {
    group: "Cloud & Infra",
    items: ["Kubernetes", "Docker", "Terraform", "Prometheus / PromQL", "Vercel", "Serverless functions"],
  },
  {
    group: "ML & Data",
    items: ["NumPy", "Pandas", "Matplotlib", "SciPy", "Statistical Inference", "Numerical Solvers"],
  },
  {
    group: "Embedded & Systems",
    items: ["Arduino", "Accelerometer (ADXL335)", "HC-05 Bluetooth", "C/C++ Firmware", "Real-Time Data"],
  },
  {
    group: "Tools & Design",
    items: ["Git", "React", "Angular", "Figma", "Adobe XD", "Accessibility / Screen readers", "Oracle DB", "LaTeX"],
  },
];

export const experience = [
  {
    role: "Multimedia Specialist",
    org: "Center for Teaching Excellence, Penn State Harrisburg",
    location: "Middletown, PA",
    dates: "Jun 2026 – Present",
    bullets: [
      "Create audio descriptions and closed captions for recorded lecture videos, improving accessibility for visually impaired students university-wide.",
      "Edit and process video content in Adobe Premiere Pro alongside the department's multimedia specialist to prepare polished, accessible final cuts.",
      "Record original narration audio for description tracks, balancing clarity and pacing to meet accessibility standards.",
      "Bring creative problem-solving to new captioning tools and workflows, keeping output professional and accessible to all users.",
    ],
  },
  {
    role: "Technical Team Manager",
    org: "CoBuy (university-incubated startup)",
    location: "Ahmedabad, India",
    dates: "Jun 2024 – Nov 2025",
    bullets: [
      "Led a 13-person technical team, replacing ad-hoc tooling with systems the company could scale on across a 2,000-student campus.",
      "Talked with students and potential users to understand their needs and pain points, then fed their feedback into feature priorities and user flows.",
      "Found the retention bottleneck in engagement data, shipped the changes that followed, and drove a 39% rise in engagement.",
      "Presented the analysis and the reasoning behind each recommendation to company leadership.",
    ],
  },
  {
    // CONFIRMED 2026-09-11: design + QA. Matches the signed internship report,
    // which documents Figma wireframes for the ERP front end and a job portal.
    role: "Software Development Intern",
    org: "Silver Touch Technologies Limited",
    location: "Ahmedabad, India",
    dates: "Aug 2024 – Jan 2025",
    bullets: [
      "Designed wireframes and mockups in Figma for the ERP front end and a job portal, covering the homepage, job search and user dashboard, with responsive layouts.",
      "Ran functional and regression testing against project requirements, reproducing and documenting defects so developers could act on them, and verifying each fix.",
      "Validated application and database behaviour to confirm data accuracy and expected system behaviour.",
      "Worked in an Agile team of 10+ engineers; performance exceeded team expectations per official completion letter.",
    ],
  },
  {
    // CONFIRMED 2026-09-11: QA only. The previous UI/UX design bullets here were
    // inaccurate and have been removed.
    role: "Software Engineering / QA Intern",
    org: "BexCode IT / Outsourcing Services",
    location: "Ahmedabad, India",
    dates: "Jun 2024 – Aug 2024",
    bullets: [
      "Tested core application workflows for MyPillPal, a connected medication-adherence product that reports real-time usage data into clinical care-management software.",
      "Designed positive and negative test scenarios for authentication, registration and login to improve application reliability.",
      "Validated database operations and data consistency to ensure accurate storage and retrieval of application data.",
      "Identified and documented defects across user-facing features, supporting developers in troubleshooting and verification.",
    ],
  },
  {
    role: "Technical Member Head",
    org: "ISTE Students' Chapter IT-NU",
    location: "Ahmedabad, India",
    dates: "Aug 2023 – Oct 2025",
    bullets: [
      "Collaborated on student-centric technical workshops, promoting knowledge sharing and professional development among peers.",
      "Led event planning and coordination for chapter activities, contributing to increased participation and awareness.",
      "Introduced problem-solving methodologies that fostered a stronger culture of peer learning.",
    ],
  },
  {
    role: "Technical Team Member",
    org: "Computer Society of India, Nirma University",
    location: "Ahmedabad, India",
    dates: "May 2023 – Oct 2025",
    bullets: [
      "Contributed to technical projects involving Logisim and Simulink, ensuring accurate and efficient implementation of designs.",
      "Facilitated peer learning sessions on emerging technologies, raising technical proficiency across the team.",
      "Supported the organization of seminars and hackathons, boosting engagement and community-building efforts.",
    ],
  },
];

export const research = {
  title: "A Novel Inverse Design Methodology for Multi-Layered High-Contrast Media",
  role: "MCREU Summer Research Fellow",
  advisor: "Dr. Taoufik Meklachi, Penn State Harrisburg",
  dates: "Jun 2026 – Aug 2026 · Funded Stipend",
  abstract:
    "Designing nanoparticle contrast agents requires full-wave simulations that are computationally expensive, and the field lacks a stable, efficient way to screen multi-layered geometries for targeted responses. This project addresses that gap with a reduced-order inverse design methodology based on asymptotic resonance theory — engineering a MATLAB algorithm that optimizes outer shell parameters around a fixed core to match targeted resonances. Benchmarking against Mie theory and COMSOL validated spectral Q-factors for double-sphere geometries, providing a rapid screening tool for metamaterials with ongoing extensions to double-cylinder geometries.",
  bullets: [
    "Extended a MATLAB Fixed-Point Iterative Solver to derive Scattering Cross Section, Q-factor, and Enhancement Factor for 2- and 3-layer spherical nanostructures (Silica/Gold) using Johnson & Christy empirical datasets.",
    "Prior role (Undergraduate Research Assistant, Jan–May 2026): validated Au₂S@Au nanoshell plasmon resonance tuning curves against Halas (1999) benchmarks via pchip-interpolated permittivity solvers.",
  ],
  honors: [
    "CPEWC Undergraduate Research Award 2026",
    "Poster Presenter, PSU Undergraduate Exhibition (Apr 2026)",
  ],
};

export const projects = [
  {
    name: "RBAC RAG Assistant",
    year: "2026",
    tech: ["Python", "MCP", "Gemini API", "Embeddings", "NumPy"],
    description:
      "A role-aware knowledge agent that answers only from documents you are cleared to read. Tools are exposed over MCP, the caller's role is bound outside the tool interface so a prompt cannot escalate its own access, and the clearance filter runs before ranking so restricted material never reaches the context window. A 48-question evaluation set scores retrieval separately from generation: switching to embedding-based search took retrieval from 83.3% to 93.8%, with 94.7% end-to-end correctness and zero leaks.",
    liveLink: null,
    link: "https://github.com/Shrey-Parikh31/rbac-rag-assistant",
    linkLabel: null,
  },
  {
    name: "AI Classroom Assistant",
    year: "2026",
    tech: ["React", "Vite", "Gemini API", "Vercel", "Claude Code"],
    description:
      "A live study assistant for students and teachers. Every model call runs server-side in a Vercel function so the API key never reaches the browser, and the teacher role is verified on the server — staff data is never placed in the payload at all, so prompt injection cannot surface it. Each call is bounded by a timeout, retries a transient overload once, and fails over to a second model when the daily quota for one is exhausted.",
    liveLink: "https://highschool-rag-chatbot.vercel.app",
    link: "https://github.com/Shrey-Parikh31/highschool-rag-chatbot",
    linkLabel: null,
  },
  {
    name: "DriveScore Cloud",
    year: "2026",
    tech: ["Go", "Kubernetes", "Docker", "Terraform", "Prometheus"],
    description:
      "Telemetry ingest for DriveScore. A Go service on Kubernetes with liveness and readiness probes, tuned resource limits and a 13.6 MB distroless image declared in Terraform. Instrumented with latency histograms and five PromQL alerting rules; deliberate failure drills found memory requests over-provisioned by 4x.",
    liveLink: null,
    link: "https://github.com/Shrey-Parikh31/drivescore-cloud",
    linkLabel: null,
  },
  {
    name: "DriveScore",
    year: "2026",
    tech: ["React Native", "Expo", "On-device signal processing"],
    description:
      "Real-time driving safety scoring from on-device accelerometer data. Classifies discrete driving events from a 10 Hz sensor stream, estimating and subtracting a drifting baseline to recover the true signal and debouncing false positives. Detection is kept as a pure function so the whole signal path is testable against recorded traces without hardware.",
    liveLink: null,
    link: "https://github.com/Shrey-Parikh31/drivescore",
    linkLabel: null,
  },
  {
    name: "splitwise-lite",
    year: "2026",
    tech: ["React", "JavaScript"],
    description:
      "Client-side debt-simplification app — log shared expenses and get the minimum number of payments needed to settle up, via a from-scratch greedy min-cash-flow algorithm. All state stays in the browser; nothing leaves your device.",
    liveLink: "https://splitwise-lite-vert.vercel.app",
    link: "https://github.com/Shrey-Parikh31/splitwise-lite",
    linkLabel: null,
  },
  {
    name: "Local Salon Website",
    year: "2025",
    tech: ["HTML", "CSS", "JavaScript", "Windows Narrator"],
    description:
      "A responsive multi-page site for a local salon — services, business information, contact and location, and appointment details. Tested with Windows Narrator the way a screen-reader user would navigate it, which surfaced unlabelled elements and content announced out of order; fixed the labels, alternative text and semantic structure, then retested to confirm the fixes held.",
    liveLink: null,
    link: null,
    linkLabel: "Built for a local business — source not published",
  },
  {
    name: "Data Analysis & Numerical Methods Suite",
    year: "2024 – 2026",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "SciPy", "MATLAB"],
    description:
      "Applied linear regression, probability, and statistical inference to Kaggle/Scopus datasets. Implemented bisection, Newton's method, and fixed-point iteration with convergence and error-bound analysis.",
    liveLink: null,
    link: "https://github.com/Shrey-Parikh31/matlab-statistics-coursework",
    linkLabel: null,
  },
  {
    name: "Snake Game in Java",
    year: "2023",
    tech: ["Java", "Swing", "Linked List"],
    description:
      "Classic Snake game implemented with a linked-list-based data structure, featuring real-time movement, collision detection, and a Java Swing GUI.",
    liveLink: null,
    link: "https://github.com/Shrey-Parikh31/Snake-Game-in-Java",
    linkLabel: null,
  },
];

export const education = [
  {
    school: "Pennsylvania State University Harrisburg",
    degree: "B.S. Computer Science",
    gpa: "3.6 / 4.0",
    dates: "Aug 2025 – Expected May 2027",
    location: "Middletown, PA",
    detail: "Relevant coursework: Data Structures & Algorithms, Numerical Analysis, Database Design, Operating Systems, Computer Architecture, Formal Languages & Automata.",
  },
  {
    school: "Nirma University",
    degree: "B.S. Computer Science & Engineering (transferred via MoU)",
    gpa: "3.5 / 4.0",
    dates: "Jul 2023 – Jun 2025",
    location: "Ahmedabad, India",
    detail: null,
  },
];
