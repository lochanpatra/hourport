import 'bootstrap/dist/css/bootstrap.min.css';

type TechnicalSkill = {
  skill: string;
  level: number;
};

type BadgeItem = {
  name: string;
  badgeClass: string;
};

const Skills = () => {
  const technicalSkills: TechnicalSkill[] = [
    { skill: "Remote Sensing & Geospatial Analysis", level: 85 },
    { skill: "Web Development", level: 75 },
    { skill: "Data Analysis (Python, R)", level: 90 },
    { skill: "AI / Machine Learning", level: 80 },
  ];

  const languages: BadgeItem[] = [
    { name: "Python", badgeClass: "bg-primary" },
    { name: "R", badgeClass: "bg-secondary" },
    { name: "JavaScript", badgeClass: "bg-success" },
    { name: "HTML5", badgeClass: "bg-warning text-dark" },
    { name: "CSS3", badgeClass: "bg-danger" },
  ];

  const frameworks: BadgeItem[] = [
    { name: "React", badgeClass: "bg-info text-dark" },
    { name: "Node.js", badgeClass: "bg-dark" },
    { name: "Bootstrap", badgeClass: "bg-primary" },
    { name: "Express.js", badgeClass: "bg-secondary" },
    { name: "Shiny (R)", badgeClass: "bg-success" },
  ];

  const tools: BadgeItem[] = [
    { name: "Leaflet", badgeClass: "bg-dark" },
    { name: "Google Earth Engine", badgeClass: "bg-secondary" },
    { name: "QGIS", badgeClass: "bg-success" },
    { name: "Git & GitHub", badgeClass: "bg-warning text-dark" },
    { name: "PostgreSQL", badgeClass: "bg-danger" },
  ];

  const renderBadgeList = (items: BadgeItem[]) => (
    <div className="d-flex flex-wrap gap-2">
      {items.map(({ name, badgeClass }) => (
        <span key={name} className={`badge ${badgeClass} p-2`}>
          {name}
        </span>
      ))}
    </div>
  );

  return (
    <section id="skills" className="bg-light text-dark py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-5 text-center">Skills & Technologies</h2>
        <div className="row g-4">

          {/* Technical Skills */}
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-4">
                  <i className="fas fa-tools me-2"></i>Technical Skills
                </h5>
                <ul className="list-unstyled">
                  {technicalSkills.map(({ skill, level }) => (
                    <li key={skill} className="mb-4">
                      <strong>{skill}</strong>
                      <div className="progress" style={{ height: '20px' }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${level}%` }}
                          aria-valuenow={level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          {level}%
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-4">
                  <i className="fas fa-code me-2"></i>Languages
                </h5>
                {renderBadgeList(languages)}
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-4">
                  <i className="fas fa-layer-group me-2"></i>Frameworks
                </h5>
                {renderBadgeList(frameworks)}
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="col-md-6 col-lg-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-4">
                  <i className="fas fa-wrench me-2"></i>Tools & Tech
                </h5>
                {renderBadgeList(tools)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;

