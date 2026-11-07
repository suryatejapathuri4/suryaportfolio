import { useEffect } from "react";
import "./styles/ResumePage.css";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resume-page">
      <a href="/" className="resume-back" data-cursor="disable">
        ← Back to site
      </a>

      <div className="resume-paper">
        <div className="resume-header">
          <h1>SURYA TEJA PATHURI</h1>
          <p className="resume-tagline">
            SENIOR SOFTWARE ENGINEER | FULL-STACK DEVELOPER
          </p>
          <div className="resume-contact">
            <span>+91 9032625086</span>
            <span className="resume-dot" />
            <span>suryatejapathuri4@gmail.com</span>
            <span className="resume-dot" />
            <span>github.com/suryateja</span>
            <span className="resume-dot" />
            <span>India (open to remote work)</span>
          </div>
        </div>

        <div className="resume-section">
          <h2>Professional Summary</h2>
          <div className="resume-item">
            <p className="resume-item-desc">
              Senior Software Engineer and Full-Stack Developer with 11+ years of
              experience in full-stack web development, project management, and
              enterprise application development.
            </p>
            <p className="resume-item-desc">
              9+ years of specialized front-end experience across HTML5, CSS3,
              JavaScript, TypeScript, React.js, Redux, Vue.js, Next.js, and
              modern product development. Strong backend expertise in Java,
              Python, Node.js, Express.js, Spring Boot, Flask, FastAPI, Django,
              GraphQL, REST APIs, and microservices architecture.
            </p>
            <p className="resume-item-desc">
              Hands-on with Generative AI, LLMs, OpenAI GPT APIs, AI chatbots,
              prompt engineering, RAG, vector databases, semantic search, and
              AI-powered recommendation systems. Skilled in AWS serverless
              architecture, application architecture, performance optimization,
              SSR, security, scalability, and maintainable code.
            </p>
          </div>
        </div>

        <div className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>B.Tech, Computer Science and Engineering</h3>
              <span className="resume-date">May 2013</span>
            </div>
            <p className="resume-item-desc">
              Vignan Institute of Information Technology (JNTU affiliated),
              Andhra Pradesh, India
            </p>
          </div>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Advanced Diploma: Real Time Embedded Systems and Linux Device Drivers</h3>
              <span className="resume-date">Cranes Varsity</span>
            </div>
            <p className="resume-item-desc">Bangalore</p>
          </div>
        </div>

        <div className="resume-section">
          <h2>Technical Skills</h2>
          <div className="resume-item">
            <p className="resume-item-desc">
              <strong>Front-end:</strong> HTML5, CSS3, JavaScript, TypeScript,
              React.js, Redux, Vue.js, Vuex, Vuetify, Next.js, Angular,
              Material UI, Bulma, Storybook, Atomic Design, Micro Frontend,
              D3.js, SSR
            </p>
            <p className="resume-item-desc">
              <strong>Back-end:</strong> Java 8, Python, Node.js, Express.js,
              Moleculer.js, Spring Boot, Hibernate, Flask, FastAPI, Django,
              GraphQL, REST APIs, Microservices, Swagger
            </p>
            <p className="resume-item-desc">
              <strong>Generative AI:</strong> LLMs, OpenAI GPT APIs, AI
              Chatbots, Prompt Engineering, RAG, Vector Databases, Semantic
              Search, AI Recommendation Systems
            </p>
            <p className="resume-item-desc">
              <strong>Cloud and DevOps:</strong> AWS Lambda, API Gateway,
              DynamoDB, Docker, CI/CD, Jenkins, Bamboo, Rancher, Terraform,
              New Relic, PagerDuty
            </p>
            <p className="resume-item-desc">
              <strong>Databases and Tools:</strong> PostgreSQL, Redis, IBM
              WebSphere Commerce, Tealium, Google Analytics, SonarQube,
              ESLint, Prettier, Jira, Lighthouse, Agile Scrum
            </p>
          </div>
        </div>

        <div className="resume-section">
          <h2>Experience</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Senior Software Engineer (Full-Stack Developer)</h3>
              <span className="resume-date">February 2025 – Present</span>
            </div>
            <p className="resume-item-desc">
              Neurealm (formerly GS Lab | GAVS)
            </p>
            <p className="resume-item-desc">
              • Modernized a large-scale e-commerce platform for Advance
              Professional, supporting 900,000+ automotive parts.<br />
              • Migrated front-end from Angular to React.js and Next.js for better
              performance, scalability, and UX.<br />
              • Built responsive, reusable UI components with React.js, Next.js,
              JavaScript, TypeScript, and Material UI.<br />
              • Designed and integrated GraphQL APIs and RESTful services for
              data-driven functionality.<br />
              • Implemented new e-commerce pricing features and supported A/B
              testing.<br />
              • Managed IBM WebSphere Commerce configurations, including eSpot
              setup and integrations.<br />
              • Automated New Relic alert configurations using Terraform scripts.
            </p>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Technical Lead</h3>
              <span className="resume-date">August 2021 – February 2025</span>
            </div>
            <p className="resume-item-desc">Trianz</p>
            <p className="resume-item-desc">
              <strong>Project 1: Hayneedle (Walmart)</strong> – Website Migration
              and Enhancement<br />
              • Migrated and modernized Hayneedle.com using React.js and Bulma.
              <br />
              • Built reusable, responsive UI components using React.js,
              Storybook, and Atomic Design principles.<br />
              <strong>Project 2: GAP – Online Retail Checkout Experience
              Enhancement</strong><br />
              • Enhanced the e-commerce checkout and shopping bag experience for
              GAP.<br />
              • Implemented a Micro Frontend architecture for shopping bag and
              checkout modules.<br />
              • Developed scalable backend services and REST APIs using Java 8,
              Spring Boot, Python, Flask, and FastAPI.<br />
              • Improved code quality using ESLint, Prettier, SonarQube,
              Storybook, and reusable patterns.
            </p>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Lead Software Engineer</h3>
              <span className="resume-date">August 2015 – February 2018</span>
            </div>
            <p className="resume-item-desc">Zensar Technologies</p>
            <p className="resume-item-desc">
              <strong>Project 1: DWS HRMS Portal – DWS 2.0 ATL</strong><br />
              • Designed HRMS portal features using Node.js, Moleculer.js, and
              PostgreSQL.<br />
              • Implemented a Docker-based microservices architecture with Redis
              for inter-service communication.<br />
              <strong>Project 2: Admin Portal – Optum</strong><br />
              • Developed a customer dashboard using Vue.js, Vuex, Vuetify, and
              D3.js.<br />
              • Integrated D3.js visualizations for KPI charts and business
              metrics.
            </p>
          </div>
        </div>

        <div className="resume-section">
          <h2>Awards</h2>
          <div className="resume-item">
            <p className="resume-item-desc">
              • Best Employee – Trianz<br />
              • Consistent and efficient Team Player – Zensar<br />
              • Champion in Badminton and Volleyball at engineering level;
              continuing in corporate internal sports
            </p>
          </div>
        </div>

        <div className="resume-footer">
          <p>Open to remote opportunities and collaborative product teams.</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
