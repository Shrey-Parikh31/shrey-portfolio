export const profile = {
  name: "Shrey Parikh",
  roles: [
    "Full-Stack Developer",
    "AI / LLM Engineer",
    "Photonics Researcher",
    "UI/UX Designer",
  ],
  tagline:
    "CS student building across the stack — from LLM-powered apps to inverse-designed nanostructures.",
  location: "Middletown, PA",
  email: "shrey3106@gmail.com",
  phone: "+1 (717) 317-7128",
  linkedin: "https://linkedin.com/in/shreyparikh31",
  github: null,
};

export const stats = [
  { label: "gpa", value: "3.6", suffix: "/4.0" },
  { label: "research award", value: "2026", suffix: "" },
  { label: "internships", value: "2", suffix: "" },
  { label: "technologies", value: "20", suffix: "+" },
];

export const about = `Computer Science student at Penn State Harrisburg with a background that spans further than most: shipping production front-end features at an enterprise Odoo ERP shop, building full-stack LLM applications from scratch, and running independent research on inverse-designed nanostructures under a funded fellowship. Comfortable moving between a MATLAB solver, a React component tree, and a Figma file in the same afternoon.`;

export const skills = [
  {
    group: "Languages",
    items: ["Python", "C/C++", "JavaScript", "TypeScript", "SQL", "MATLAB", "Java", "HTML/CSS"],
  },
  {
    group: "ML & Data",
    items: ["NumPy", "Pandas", "Matplotlib", "SciPy", "Linear Regression", "Statistical Inference", "Kaggle", "NVIDIA CUDA (in progress)"],
  },
  {
    group: "AI & Research",
    items: ["LLM API Integration", "Dynamic Prompting", "Inverse Design", "Numerical Solvers", "Asymptotic Analysis"],
  },
  {
    group: "Embedded & Systems",
    items: ["Arduino", "LiDAR", "Accelerometer (ADXL335)", "HC-05 Bluetooth", "C/C++ Firmware", "Real-Time Data"],
  },
  {
    group: "Tools & Design",
    items: ["Git", "VS Code", "React", "Angular", "Oracle DB", "Odoo ERP", "LaTeX", "Figma", "Adobe XD"],
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    org: "Silver Touch Technologies Limited",
    location: "Ahmedabad, India",
    dates: "Aug 2024 – Jan 2025",
    bullets: [
      "Contributed to enterprise-scale production using Python, Odoo ERP, Java, and JavaScript/TypeScript in an Agile team.",
      "Shipped 3+ production features integrating front-end UI with backend APIs.",
      "Performance exceeded team expectations per official completion letter.",
    ],
  },
  {
    role: "Software Developer",
    org: "BexCode IT / Outsourcing Services",
    location: "Ahmedabad, India",
    dates: "Jun 2024 – Aug 2024",
    bullets: [
      "Contributed to the Easy Health Pharma project by designing user-friendly, functional front-end interfaces.",
      "Developed UI/UX designs using Figma, Adobe XD, HTML, and CSS.",
      "Collaborated with developers and project managers to deliver aesthetically pleasing, usable designs.",
    ],
  },
  {
    role: "Marketing & Technical Team Member",
    org: "CoBuy",
    location: "Ahmedabad, India",
    dates: "Jun 2024 – Present",
    bullets: [
      "Supports both marketing initiatives and technical execution for the team.",
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
    name: "AI Academic Assistant",
    year: "2024",
    tech: ["React", "JavaScript", "Gemini Flash", "Claude Sonnet"],
    description:
      "Full-stack LLM chatbot covering 12 academic subjects, with dynamic role-based system prompting, CORS handling, and secure API key management. Applied prompt engineering to tailor responses per subject.",
    link: null,
    linkLabel: "Runs locally via VS Code — not yet deployed",
  },
  {
    name: "Data Analysis & Numerical Methods Suite",
    year: "2024 – 2026",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "SciPy", "MATLAB"],
    description:
      "Applied linear regression, probability, and statistical inference to Kaggle/Scopus datasets. Implemented bisection, Newton's method, and fixed-point iteration with convergence and error-bound analysis.",
    link: null,
    linkLabel: "Source not yet published",
  },
];

export const education = [
  {
    school: "Pennsylvania State University Harrisburg",
    degree: "B.S. Computer Science",
    gpa: "3.6 / 4.0",
    dates: "Aug 2025 – Expected Aug 2027",
    location: "Middletown, PA",
    detail: "Relevant coursework: Data Structures & Algorithms, Numerical Analysis, Database Design, Formal Languages & Automata.",
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
