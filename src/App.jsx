import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function App() {
  const mountRef = useRef(null);

  useEffect(() => {
    // === THREE.JS CODE START ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Check if mountRef.current is available before appending
    if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x64FFDA, wireframe: true });
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      icosahedron.rotation.x += 0.001;
      icosahedron.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
        // Check if mountRef.current exists before trying to remove the child
        if (mountRef.current && renderer.domElement) {
           mountRef.current.removeChild(renderer.domElement);
        }
        window.removeEventListener('resize', handleResize);
    };
    // === THREE.JS CODE END ===
  }, []);

  return (
    <div id="app">
      <div id="animus-background" ref={mountRef}></div>
      <div className="main-content">
        <header id="profile">
          <h1>[SUBJECT: DEVESH SHARMA]</h1>
          <h2>AI & DATA SCIENCE ENGINEER // MLOPS & DEVOPS</h2>
          <p className="summary">
            AI & Data Science Engineer with hands-on experience in MLOps, DevOps, and cloud infrastructure. Proven track record in building end-to-end ML pipelines and deploying scalable applications.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com/in/devesh-sharma-814b3919a" target="_blank" rel="noopener noreferrer">>> LinkedIn_</a>
            <a href="https://github.com/SharmajiKabetaDevesh" target="_blank" rel="noopener noreferrer">>> GitHub_</a>
            <a href="mailto:deveshrs2016@gmail.com">>> Email_</a>
          </div>
        </header>

        <main>
          <section id="sequences">
            <h2>[MEMORY SEQUENCES] // PROJECTS</h2>
            <div className="project-grid">
              {/* To add a new project, copy a "project-card" div and change the content */}
              <div className="project-card">
                <h3>Wine Quality Predictor: End-to-End MLOps Pipeline</h3>
                <p>Architected a complete MLOps pipeline featuring automated data ingestion, schema validation, and model versioning with DVC. Achieved 95% accuracy via automated hyperparameter tuning.</p>
                <div className="technologies">
                  <span>Python</span><span>MLflow</span><span>DVC</span><span>Azure</span><span>Docker</span><span>CI/CD</span>
                </div>
              </div>
              <div className="project-card">
                <h3>2048 Game: Cloud-Native Deployment</h3>
                <p>Implemented an automated CI/CD pipeline with GitHub Actions, cutting compute costs by 50%. Deployed the application on Azure Kubernetes Service with zero-downtime rollouts.</p>
                <div className="technologies">
                  <span>GitHub Actions</span><span>Docker</span><span>AKS</span><span>DNS</span>
                </div>
              </div>
              <div className="project-card">
                <h3>Fly: Chat App with ML Content Moderation</h3>
                <p>Developed real-time content moderation using computer vision models. Deployed production-ready ML services with 99.9% uptime using Kubernetes orchestration.</p>
                <div className="technologies">
                  <span>Python</span><span>CompVision</span><span>Azure ML</span><span>Kubernetes</span><span>Firebase</span>
                </div>
              </div>
              <div className="project-card">
                <h3>Swasthaveda: RAG Medicine Recommender</h3>
                <p>Architected a Retrieval-Augmented Generation system on Azure. Built scalable REST API endpoints with automated testing and production deployment workflows.</p>
                <div className="technologies">
                  <span>Python</span><span>RAG</span><span>Azure</span><span>Docker</span><span>Kubernetes</span>
                </div>
              </div>
            </div>
          </section>

          <section id="arsenal">
            <h2>[SKILLS & ARSENAL] // TECHNICAL ABILITIES</h2>
            {/* THIS IS THE SECTION THAT HAS BEEN FIXED */}
            <div className="skill-category">
              <h3>{">>"} Cloud & DevOps_</h3>
              <p>{'Microsoft Azure, Docker, Kubernetes, Jenkins, Terraform, Git, CI/CD, GitHub Actions, Linux.'}</p>
            </div>
            <div className="skill-category">
              <h3>{">>"} MLOps & ML Tools_</h3>
              <p>{'MLflow, DVC, Airflow, Model Versioning, Experiment Tracking, Model Deployment.'}</p>
            </div>
            <div className="skill-category">
              <h3>{">>"} Programming & Data Science_</h3>
              <p>{'Python, Java, SQL, Pandas, NumPy, Scikit-learn, Keras, PyTorch.'}</p>
            </div>
            <div className="skill-category">
              <h3>{">>"} Frameworks_</h3>
              <p>{'Spring Boot, Flask.'}</p>
            </div>
          </section>

          <section id="chronicles">
            <h2>[CHRONICLES] // EXPERIENCE</h2>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>DevOps Intern // Eastri Quick Commerce Startup</h3>
                <p className="date">[JULY 2025 – AUGUST 2025]</p>
                <ul>
                  <li>> Built comprehensive CI/CD pipelines for backend and Flutter mobile app deployments.</li>
                  <li>> Deployed microservices architecture on Amazon EKS with automated container orchestration.</li>
                  <li>> Implemented infrastructure automation, reducing deployment time by 60%.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer id="contact">
          <h2>[CONTACT THE BROTHERHOOD]</h2>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to initiate contact.</p>
          <a href="mailto:deveshrs2016@gmail.com" className="cta-button">>> SEND MESSAGE_</a>
          <p className="copyright">&copy; 2025 DEVESH SHARMA</p>
        </footer>
      </div>
    </div>
  );
}

export default App;