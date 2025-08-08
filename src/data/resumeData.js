export const resumeData = {
    profile: {
      name: "Devesh Sharma",
      title: "AI & Data Science Engineer",
      location: "Mumbai, India",
      email: "deveshrs2016@gmail.com",
      website: "github.com/SharmajiKabetaDevesh",
      linkedin: "linkedin.com/in/deveshrsharma",
      github: "github.com/SharmajiKabetaDevesh",
      summary:
        "AI & Data Science Engineer with hands-on experience in MLOps, DevOps, and cloud infrastructure. Proven track record in building end-to-end ML pipelines, implementing CI/CD workflows, and deploying scalable applications on cloud platforms.",
    },
    skills: [
      { name: "Microsoft Azure", level: 95, category: "Cloud & DevOps" },
      { name: "Docker", level: 90, category: "Cloud & DevOps" },
      { name: "Kubernetes", level: 85, category: "Cloud & DevOps" },
      { name: "Jenkins", level: 80, category: "Cloud & DevOps" },
      { name: "Terraform", level: 75, category: "Cloud & DevOps" },
      { name: "MLflow", level: 90, category: "MLOps & ML Tools" },
      { name: "DVC", level: 85, category: "MLOps & ML Tools" },
      { name: "Python", level: 95, category: "Programming & Data Science" },
      { name: "SQL", level: 85, category: "Programming & Data Science" },
      { name: "Scikit-learn", level: 90, category: "Programming & Data Science" },
      { name: "PyTorch", level: 80, category: "Programming & Data Science" },
      { name: "Spring Boot", level: 70, category: "Frameworks & APIs" },
      { name: "Flask", level: 85, category: "Frameworks & APIs" },
      { name: "Airflow", level: 85, category: "MLOps & ML Tools" },
    ],
    projects: [
      {
        id: "proj-1",
        title: "Wine Quality Predictor",
        description: "Architected a complete MLOps pipeline with automated data ingestion, schema validation, experiment tracking with MLflow, and a containerized Flask API for scalable model serving.",
        role: "End-to-End MLOps",
        tech: ["Python", "MLflow", "DVC", "Azure", "Flask", "Docker", "CI/CD"],
        image: "/assets/projects/wine-quality.png", // Placeholder
        link: "https://github.com/SharmajiKabetaDevesh",
      },
      {
        id: "proj-2",
        title: "2048 Game: Cloud-Native Deployment",
        description: "Implemented an automated CI/CD pipeline using GitHub Actions, containerized the application, and orchestrated its deployment on Azure Kubernetes Service (AKS) with zero-downtime strategies.",
        role: "Cloud & DevOps",
        tech: ["GitHub Actions", "Docker", "ACR", "AKS", "Ingress"],
        image: "/assets/projects/2048-game.png", // Placeholder
        link: "https://github.com/SharmajiKabetaDevesh",
      },
      {
        id: "proj-3",
        title: "Fly: A Chat Application for Kids",
        description: "Developed a real-time content moderation system using computer vision models within a scalable microservices architecture. Deployed production-ready models on Azure ML with 99.9% uptime.",
        role: "ML Engineering",
        tech: ["Python", "Computer Vision", "Azure ML", "Kubernetes", "Firebase"],
        image: "/assets/projects/fly-chat.png", // Placeholder
        link: "https://github.com/SharmajiKabetaDevesh",
      },
      {
        id: "proj-4",
        title: "Swasthaveda: RAG Medicine Recommender",
        description: "Architected a Retrieval-Augmented Generation (RAG) system with automated data pipelines. Built scalable REST APIs on Azure with MLOps best practices for continuous integration and deployment.",
        role: "RAG & MLOps",
        tech: ["Python", "RAG", "Azure", "MLOps", "Kubernetes", "REST APIs"],
        image: "/assets/projects/swasthaveda.png", // Placeholder
        link: "https://github.com/SharmajiKabetaDevesh",
      },
    ],
    experience: [
      {
        company: " An Quick Commerce Startup",
        title: "DevOps  Intern",
        start: "June 2025",
        end: "August 2025",
        bullets: [
            "• Built comprehensive CI/CD pipelines for backend services and Flutter mobile application deployments",
            "• Deployed microservices architecture on Amazon EKS with automated scaling and container orchestration",
            "• Created Kubernetes deployment manifests, services, and ingress configurations for production workloads",
            "Implemented infrastructure automation reducing deployment time by 30% and reduced cost through Github actions by 20%"
        ],
      },
    ],
    education: [
      {
        school: "Datta Meghe College of Engineering, Mumbai",
        degree: "B.E in Artificial Intelligence and Data Science",
        start: "2022",
        end: "2025",
        details: "Overall Score: 8.98 CGPA",
      },
      {
        school: "Government Polytechnic, Thane",
        degree: "Diploma in Mechanical Engineering",
        start: "2018",
        end: "2021",
        details: "Overall Score: 94%",
      },
      {
        school: "Don Bosco High School,Kalyan",
        degree: "SSC",
        start: "2017",
        end: "2018",
        details: "Overall Score: 91.8",
      },
    ],
    certifications: [
      {
        name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        description: "Demonstrates foundational knowledge of cloud concepts, Azure services, security, storage, and compute services.",
      },
    ],
    achievements: [
        { event: "A.I Spark Mini Project Presentation", prize: "Second Prize", year: 2023 },
        { event: "Quasar Hackathon", prize: "Top 10 Finalist", year: null },
        { event: "College Technical Events (SHAIDS)", prize: "Active Contributor & Publicity Team", year: null }
    ]
  };