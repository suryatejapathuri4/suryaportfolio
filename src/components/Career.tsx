import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Neurealm (formerly GS Lab | GAVS)</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Modernized a large-scale e-commerce platform supporting 900,000+
              automotive parts, migrated the front end from Angular to React.js and
              Next.js, built reusable UI components, integrated GraphQL and REST
              APIs, and optimized front-end performance and stability across
              production.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead</h4>
                <h5>Trianz</h5>
              </div>
              <h3>2021 – 2025</h3>
            </div>
            <p>
              Led the migration and enhancement of Hayneedle.com using React.js and
              Bulma, improved the GAP checkout and shopping bag experience, and
              built microfrontend and backend services using Java 8, Spring Boot,
              Python, Flask, and FastAPI for scalable retail experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Software Engineer</h4>
                <h5>Zensar Technologies</h5>
              </div>
              <h3>2015 – 2018</h3>
            </div>
            <p>
              Designed HRMS and admin portal features using Node.js, Moleculer.js,
              PostgreSQL, Vue.js, Vuex, Vuetify, and D3.js while creating
              microservices with Docker and Redis, and delivering responsive
              systems for healthcare and enterprise workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
