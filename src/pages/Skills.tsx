// const Skills = () => (
//   <section id="skills" style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
//     <h2>Skills</h2>
//     <ul>
//       <li>HTML / CSS / JavaScript</li>
//       <li>React / Vite</li>
//       <li>TypeScript</li>
//       <li>Node.js</li>
//       <li>Git & GitHub</li>
//     </ul>
//   </section>
// );

// export default Skills;
// const skills = ['React', 'TypeScript', 'Vite', 'Node.js', 'CSS'];

// const Skills = () => (
//   <section className="skills">
//     <h2>My Skills</h2>
//     <div className="skill-cards">
//       {skills.map((skill) => (
//         <div className="card" key={skill}>{skill}</div>
//       ))}
//     </div>
//   </section>
// );

// export default Skills;
//==========================================

// import styles from './Skills.module.css';
// import SkillCard from '../components/SkillCard';

// const Skills = () => {
//   return (
//     <section className={styles.container}>
//       <h1>My Skills</h1>
//       <div className={styles.grid}>
//         <SkillCard skill="JavaScript" level="Advanced" />
//         <SkillCard skill="React" level="Advanced" />
//         <SkillCard skill="TypeScript" level="Intermediate" />
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import 'bootstrap/dist/css/bootstrap.min.css';

// const Skills = () => {
//   return (
//     <section id="skills" className="bg-light text-dark" data-aos="fade-up">
//       <div className="container">
//         <h2 className="mb-4">Skills & Technologies</h2>
//         <div className="row">
//           {/* Technical Skills */}
//           <div className="col-md-6">
//             <h4><i className="fas fa-tools me-2"></i>Technical Skills</h4>
//             <ul>
//               {[
//                 { skill: "Remote sensing & Geospatial Analysis", level: 85 },
//                 { skill: "Web Development", level: 75 },
//                 { skill: "Data Analysis (Python, R)", level: 90 },
//                 { skill: "AI ML", level: 80 }
//               ].map(({ skill, level }) => (
//                 <li key={skill}>
//                   <strong>{skill}</strong>
//                   <div className="progress mb-3" style={{ height: '25px' }}>
//                     <div
//                       className="progress-bar"
//                       role="progressbar"
//                       style={{ width: `${level}%` }}
//                       aria-valuenow={level}
//                       aria-valuemin={0}
//                       aria-valuemax={100}
//                     >
//                       {level}%
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Technologies */}
//           <div className="col-md-6">
//             <h4><i className="fas fa-laptop-code me-2"></i>Technologies</h4>
//             <ul className="list-unstyled">
//               {[
//                 { tech: "Python", badgeClass: "bg-primary" },
//                 { tech: "R", badgeClass: "bg-secondary" },
//                 { tech: "JavaScript", badgeClass: "bg-success" },
//                 { tech: "HTML5", badgeClass: "bg-warning" },
//                 { tech: "CSS3", badgeClass: "bg-danger" },
//                 { tech: "Node.js", badgeClass: "bg-info" },
//                 { tech: "Leaflet", badgeClass: "bg-dark" },
//                 { tech: "Google Earth Engine", badgeClass: "bg-secondary" },

//               ].map(({ tech, badgeClass }) => (
//                 <li key={tech}>
//                   <span className={`badge ${badgeClass}`}>{tech}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


//==========================

import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  const technicalSkills = [
    { skill: "Remote Sensing & Geospatial Analysis", level: 85 },
    { skill: "Web Development", level: 75 },
    { skill: "Data Analysis (Python, R)", level: 90 },
    { skill: "AI / Machine Learning", level: 80 },
  ];

  const languages = [
    { name: "Python", badgeClass: "bg-primary" },
    { name: "R", badgeClass: "bg-secondary" },
    { name: "JavaScript", badgeClass: "bg-success" },
    { name: "HTML5", badgeClass: "bg-warning text-dark" },
    { name: "CSS3", badgeClass: "bg-danger" },
  ];

  const frameworks = [
    { name: "React", badgeClass: "bg-info text-dark" },
    { name: "Node.js", badgeClass: "bg-dark" },
    { name: "Bootstrap", badgeClass: "bg-primary" },
    { name: "Express.js", badgeClass: "bg-secondary" },
    { name: "Shiny (R)", badgeClass: "bg-success" },
  ];

  const tools = [
    { name: "Leaflet", badgeClass: "bg-dark" },
    { name: "Google Earth Engine", badgeClass: "bg-secondary" },
    { name: "QGIS", badgeClass: "bg-success" },
    { name: "Git & GitHub", badgeClass: "bg-warning text-dark" },
    { name: "PostgreSQL", badgeClass: "bg-danger" },
  ];

  const renderBadgeList = (items) => (
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
