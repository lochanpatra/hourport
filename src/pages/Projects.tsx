// const Projects = () => (
//   <section id="projects" style={{ padding: '2rem' }}>
//     <h2>Projects</h2>
//     <div>
//       <h3>Portfolio Website</h3>
//       <p>A clean, fast React-based portfolio built with Vite.</p>

//       <h3>Weather App</h3>
//       <p>Real-time weather information using a public API.</p>

//       <h3>Task Manager</h3>
//       <p>Manage your to-dos with a sleek React interface and local storage.</p>
//     </div>
//   </section>
// );

// export default Projects;


// const projects = [
//   { name: 'Todo App', github: 'https://github.com/your-username/todo-app' },
//   { name: 'Weather App', github: 'https://github.com/your-username/weather-app' },
// ];

// const Projects = () => (
//   <section className="projects">
//     <h2>My Projects</h2>
//     <div className="project-cards">
//       {projects.map((project) => (
//         <div className="card" key={project.name}>
//           <h3>{project.name}</h3>
//           <a href={project.github} target="_blank">View on GitHub</a>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Projects;


// import styles from './Projects.module.css';
// import ProjectCard from '../components/ProjectCard';

// const Projects = () => {
//   return (
//     <section className={styles.container}>
//       <h1>Projects</h1>
//       <div className={styles.list}>
//         <ProjectCard title="Project One" description="A full-stack app using MERN." />
//         <ProjectCard title="Project Two" description="React + TypeScript dashboard app." />
//       </div>
//     </section>
//   );
// };

// export default Projects;



// import styles from './Projects.module.css';
// import ProjectCard from '../components/ProjectCard';

// const Projects = () => {
//   return (
//     <section className={styles.container}>
//       <h1 className={styles.heading}>Projects</h1>
//       <div className={styles.list}>
//         <ProjectCard
//           title="MERN App"
//           description="A full-stack MERN application with authentication and CRUD features."
//           image="https://via.placeholder.com/600x300.png?text=MERN+App"
//           link="https://github.com/yourusername/mern-app"
//         />
//         <ProjectCard
//           title="React Dashboard"
//           description="A modern dashboard app built with React and TypeScript."
//           image="https://via.placeholder.com/600x300.png?text=Dashboard+App"
//           link="https://github.com/yourusername/react-dashboard"
//         />
//         <ProjectCard
//           title="GIS Web App"
//           description="Map-based analytics tool using Leaflet and Python backend."
//           image="https://via.placeholder.com/600x300.png?text=GIS+App"
//           link="https://github.com/yourusername/gis-webapp"
//         />
//         <ProjectCard
//           title="GIS Web App"
//           description="Map-based analytics tool using Leaflet and Python backend."
//           image="https://via.placeholder.com/600x300.png?text=GIS+App"
//           link="https://github.com/yourusername/gis-webapp"
//         />
//         <ProjectCard
//           title="GIS Web App"
//           description="Map-based analytics tool using Leaflet and Python backend."
//           image="https://via.placeholder.com/600x300.png?text=GIS+App"
//           link="https://github.com/yourusername/gis-webapp"
//         />
//         <ProjectCard
//           title="GIS Web App"
//           description="Map-based analytics tool using Leaflet and Python backend."
//           image="https://via.placeholder.com/600x300.png?text=GIS+App"
//           link="https://github.com/yourusername/gis-webapp"
//         />
//         <ProjectCard
//           title="GIS Web App"
//           description="Map-based analytics tool using Leaflet and Python backend."
//           image="https://via.placeholder.com/600x300.png?text=GIS+App"
//           link="https://github.com/yourusername/gis-webapp"
//         />
//         <ProjectCard
//           title="GIS Web App"
//           description="Map-based analytics tool using Leaflet and Python backend."
//           image="https://via.placeholder.com/600x300.png?text=GIS+App"
//           link="https://github.com/yourusername/gis-webapp"
//         />
//       </div>
//     </section>
//   );
// };

// export default Projects;




import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.list}>
        <ProjectCard
  title="AI Image Classifier"
  description="A CNN-based image classifier using TensorFlow."
  image="/assets/classifier.png"
  link="https://ai-classifier-demo.vercel.app"
  github="https://github.com/yourusername/ai-image-classifier"
/>
        <ProjectCard
          title="React Dashboard"
          description="A modern dashboard app built with React and TypeScript. Includes charts, authentication, and responsive design."
          image="https://via.placeholder.com/600x300.png?text=Dashboard+App"
          link="https://github.com/yourusername/react-dashboard"
        />
        <ProjectCard
          title="GIS Web App"
          description="Map-based analytics tool using Leaflet for rendering maps and Python Flask backend for spatial data processing."
          image="https://via.placeholder.com/600x300.png?text=GIS+App"
          link="https://github.com/yourusername/gis-webapp"
        />
      </div>
    </section>
  );
};

export default Projects;
