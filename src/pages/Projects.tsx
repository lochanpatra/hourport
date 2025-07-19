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
          title="NYC Yellow Taxi Trip Analysis Dashboard"
          description="A scalable dashboard that leverages PySpark to analyze NYC Yellow Taxi trip data for trends in trip volume, fare amounts, and more."
          image="/images/nyc.png"
          link="https://github.com/lochanpatra/bigdata"
         webLink="https://lochannyctrip.streamlit.app/"
        />
       <ProjectCard
          title="Air Quality Prediction Dashboard"
          description="An interactive Streamlit web app that visualizes air quality data and predicts the Air Quality Index (AQI) using a trained XGBoost model."
          image="/images/aqi1.png"
          link="https://github.com/lochanpatra/Air_Quality_Vis"
           webLink="https://lochanairquality.streamlit.app/"
        />

        <ProjectCard
          title="U-Net for Road Segmentation in Mumbai using PyTorch"
          description="U-Net architecture in PyTorch for semantic segmentation of roads from satellite imagery."
          image="/images/mumbai.png"
          link="https://github.com/lochanpatra/U-Net_pytorch"
        />

        <ProjectCard
          title="Canberra Zoning Compliance Checker"
          description="A Streamlit app using OpenAI GPT-4 Vision to analyze architectural site plans and verify zoning compliance."
          image="/images/showcase1.png"
          link="https://github.com/lochanpatra/zonal-compliance-checker"
        />

        <ProjectCard
          title="GeoIntel-AI: GIS + OpenAI Spatial Analysis App"
          description="Interactive app combining GIS analysis with GPT-4 summaries. Users upload shapefiles and get analysis + natural language descriptions."
          image="/images/showcase1.png"
          link="https://github.com/lochanpatra/OpenAI-Spatial-Analysis-"
        />

        <ProjectCard
          title="Real Estate Analyzer"
          description="A Streamlit app that scores property images, forecasts prices using Prophet, and visualizes comps."
          image="/images/aqi.png"
          link="https://github.com/lochanpatra/real_estate_analyzer"
        />

        <ProjectCard
          title="Agridashboard"
          description="A web app using Open Meteo API to forecast temperature, humidity, and rainfall over 12 hours."
          image="/images/aqi.png"
          webLink="https://agridashbord.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
