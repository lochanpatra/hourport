// const About = () => (
//   <div>
//     <h2>About Me</h2>
//     <p>This is the About section of the portfolio.</p>
//   </div>
// );

// export default About;


// import styles from './About.module.css';

// const About = () => {
//   return (
//     <section className={styles.container}>
//       <h1>About Me</h1>
//       <p>I'm a web developer passionate about building performant and user-friendly applications.</p>
//     </section>
//   );
// };

// export default About;


import { Typewriter } from 'react-simple-typewriter';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section id="about" className="py-5 bg-white text-dark" data-aos="fade-up">
      <div className="container text-center">
        <h2 className="mb-4">About Me</h2>

        <h4 className="mb-3">
          <span>I’m passionate about </span>
          <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>
            <Typewriter
              words={['Web Development', 'Geospatial Analysis', 'Machine Learning', 'Open Source']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h4>

        <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
          I specialize in combining technology, data, and design to solve real-world problems.
          With a strong background in remote sensing, full-stack development, and AI/ML,
          I build meaningful solutions that make an impact.
        </p>
      </div>
    </section>
  );
};

export default About;
