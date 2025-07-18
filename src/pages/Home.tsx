// const Home = () => {
//   return (
//     <section
//       style={{
//         backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         height: '100vh',
//         width: '100%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: 'white',
//         textAlign: 'center',
//       }}
//     >
//       <h1>Welcome to My Portfolio</h1>
//     </section>
//   );
// };

// export default Home;

// const Home = () => (
//   <section
//     style={{
//       backgroundImage: "url('/pic.jpg')",
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       width: '100%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: 'white',
//       textAlign: 'center',
//     }}
//   >
//     <h1>Welcome to My Portfolio</h1>
//   </section>
// );

// export default Home;
//=====================================constant bubble============
// import { Typewriter } from 'react-simple-typewriter';
// import { motion } from 'framer-motion';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.css'; // Optional if you want to keep background styles separate

// // Define soft colorful bubble palette
// const bubbleColors = [
//   '#a0e7e5', '#b4f8c8', '#fbe7c6', '#ffb5e8', '#caa8f5',
//   '#ffd6a5', '#ff9aa2', '#c7ceea', '#e0bbf7', '#fcd5ce',
// ];

// // Reusable animated Bubble component
// const Bubble = ({
//   size,
//   left,
//   delay,
//   color,
// }: {
//   size: number;
//   left: number;
//   delay: number;
//   color: string;
// }) => (
//   <motion.div
//     initial={{ y: '100vh', opacity: 0 }}
//     animate={{
//       y: '-10vh',
//       opacity: [0, 0.6, 0],
//     }}
//     transition={{
//       y: {
//         duration: 20,
//         ease: 'linear',
//         delay,
//         repeat: Infinity,
//         repeatType: 'loop',
//       },
//       opacity: {
//         duration: 20,
//         delay,
//         repeat: Infinity,
//         repeatType: 'loop',
//       },
//     }}
//     style={{
//       position: 'absolute',
//       bottom: 0,
//       left: `${left}%`,
//       width: size,
//       height: size,
//       backgroundColor: color,
//       borderRadius: '50%',
//       pointerEvents: 'none',
//       boxShadow: `0 0 15px ${color}`,
//       zIndex: 0,
//     }}
//   />
// );

// const Home = () => {
//   // Generate 10 random bubbles
//   const bubbles = Array.from({ length: 10 }).map((_, i) => ({
//     size: Math.random() * 70 + 20,      // 20px – 90px
//     left: Math.random() * 100,         // 0% – 100%
//     delay: Math.random() * 20,         // 0s – 20s
//     color: bubbleColors[i % bubbleColors.length],
//   }));

//   return (
//     <section
//       style={{
//         backgroundImage: "url('/pic.jpg')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh',
//         width: '100%',
//         position: 'relative',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: 'black',
//         textAlign: 'center',
//         padding: '2rem',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Animated Bubbles */}
//       {bubbles.map((bubble, i) => (
//         <Bubble key={i} {...bubble} />
//       ))}

//       {/* Content */}
//       <div
//         className="container"
//         style={{
//           zIndex: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         {/* Profile Image */}
//         <img
//           src="/profile.jpeg"
//           alt="Profile"
//           className="rounded-circle mb-4"
//           style={{
//             width: '220px',
//             height: '220px',
//             objectFit: 'cover',
//             border: '6px solid white',
//             boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
//           }}
//         />

//         {/* Heading */}
//         <h1 className="display-5 fw-bold">Welcome to My Portfolio</h1>

//         {/* Typewriter Text */}
//         <h3 className="mt-3">
//           <span>I am a </span>
//           <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>
//             <Typewriter
//               words={['Developer', 'Analyst', 'Researcher', 'Problem Solver']}
//               loop
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1500}
//             />
//           </span>
//         </h3>
//       </div>
//     </section>
//   );
// };

// export default Home;


//=====================================buble animation===============

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const bubbleColors = [
  '#a0e7e5', '#b4f8c8', '#fbe7c6', '#ffb5e8', '#caa8f5',
  '#ffd6a5', '#ff9aa2', '#c7ceea', '#e0bbf7', '#fcd5ce',
];

// Single Bubble component
const Bubble = ({
  size,
  left,
  delay,
  color,
}: {
  size: number;
  left: number;
  delay: number;
  color: string;
}) => {
  return (
    <motion.div
      initial={{ y: '100vh', opacity: 0, scale: 0.5 }}
      animate={{ y: '-150px', opacity: 0.6, scale: 1 }}
      transition={{
        duration: 20,
        ease: 'linear',
        delay,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      style={{
        position: 'absolute',
        bottom: 0,
        left: `${left}%`,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        opacity: 0.6,
        pointerEvents: 'none',
        boxShadow: `0 0 15px ${color}`,
      }}
    />
  );
};

const Home = () => {
  // Create 10 bubbles with random props
  const bubbles = Array.from({ length: 10 }).map((_, i) => ({
    size: Math.random() * 70 + 20, // 20px - 90px
    left: Math.random() * 100, // 0% - 100%
    delay: Math.random() * 30, // 0s - 20s delay
    color: bubbleColors[i % bubbleColors.length],
  }));

  return (
    <section
      style={{
        backgroundImage: "url('/pic.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        textAlign: 'center',
        padding: '2rem',
        overflow: 'hidden',
      }}
    >
      {/* Animated bubbles */}
      {bubbles.map(({ size, left, delay, color }, i) => (
        <Bubble key={i} size={size} left={left} delay={delay} color={color} />
      ))}

      {/* Content */}
      <div
        className="container"
        style={{
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="rounded-circle mb-4"
          style={{
            width: '220px',
            height: '220px',
            objectFit: 'cover',
            border: '3px solid white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        />

        <h1 className="display-5 fw-bold">Welcome to My Portfolio</h1>

        <h3 className="mt-3">
          <span>I am a </span>
          <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>
            <Typewriter
              words={['Developer', 'Analyst', 'Researcher', 'Problem Solver']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Home;

//========================================bubbles============
// import { Typewriter } from 'react-simple-typewriter';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Home.module.css'; 

// const Home = () => (
//   <section
//     style={{
//       backgroundImage: "url('/pic.jpg')",
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       width: '100%',
//       position: 'relative',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: 'black',
//       textAlign: 'center',
//       padding: '2rem',
//       overflow: 'hidden',
//     }}
//   >
//     {/* Floating colorful bubbles */}
//     <ul className="bubbles">
//       {Array.from({ length: 10 }).map((_, i) => (
//         <li key={i}></li>
//       ))}
//     </ul>

//     {/* Content */}
//     <div
//       className="container"
//       style={{
//         zIndex: 2,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       <img
//         src="/profile.jpeg"
//         alt="Profile"
//         className="rounded-circle mb-4"
//         style={{
//           width: '220px',
//           height: '220px',
//           objectFit: 'cover',
//           border: '6px solid white',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
//         }}
//       />

//       <h1 className="display-5 fw-bold">Welcome to My Portfolio</h1>

//       <h3 className="mt-3">
//         <span>I am a </span>
//         <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>
//           <Typewriter
//             words={['Developer', 'Analyst', 'Researcher', 'Problem Solver']}
//             loop={true}
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1500}
//           />
//         </span>
//       </h3>
//     </div>
//   </section>
// );

// export default Home;

//==============================final99======================
// import { Typewriter } from 'react-simple-typewriter';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home = () => (
//   <section
//     style={{
//       backgroundImage: "url('/pic.jpg')",
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       width: '100%',
//       position: 'relative',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: 'black',
//       textAlign: 'center',
//       padding: '2rem',
//     }}
//   >
//     {/* Dark overlay */}
//     {/* <div
//       style={{
//         position: 'absolute',
//         inset: 0,
//         backgroundColor: 'rgba(204, 198, 230, 0.6)',
//         zIndex: 1,
//       }}
//     /> */}

//     {/* Content */}
//     <div
//       className="container"
//       style={{
//         zIndex: 2,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       {/* Profile Image */}
   
//       <img
//   src="/profile.jpeg"
//   alt="Profile"
//   className="rounded-circle mb-4"
//   style={{
//     width: '220px',      
//     height: '220px',     
//     objectFit: 'cover',
//     border: '6px solid white',  
//     display: 'block',
//   }}
// />

//       {/* Heading */}
//       <h1 className="display-5 fw-bold">Welcome to My Portfolio</h1>

//       {/* Typewriter Effect */}
//       <h3 className="mt-3">
//         <span>I am a </span>
//         <span style={{ color: '#0d6efd', fontWeight: 'bold' }}>
//           <Typewriter
//             words={['Developer', 'Analyst', 'Researcher', 'Problem Solver']}
//             loop={true}
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1500}
//           />
//         </span>
//       </h3>
//     </div>
//   </section>
// );

// export default Home;

//================================final99======================
// const Home = () => (
//   <section
//     style={{
//       backgroundImage: "url('/pic.jpg')",
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       width: '100%',
//       position: 'relative',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: 'white',
//       textAlign: 'center',
//       padding: '2rem',
//     }}
//   >
//     {/* Dark overlay */}
//     <div
//       style={{
//         position: 'absolute',
//         inset: 0,
//         backgroundColor: 'rgba(0, 0, 0, 0.6)',
//         zIndex: 1,
//       }}
//     />

//     {/* Content */}
//     <div
//       className="container"
//       style={{
//         zIndex: 2,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       {/* Profile Image */}
//       <img
//         src="/profile.jpg"
//         alt="Profile"
//         className="rounded-circle mb-4"
//         style={{ width: '150px', height: '150px', objectFit: 'cover', border: '4px solid white' }}
//       />

//       {/* Text */}
//       <h1 className="display-5 fw-bold">Welcome to My Portfolio</h1>
//       <p className="lead">I'm a developer, analyst & problem solver</p>
//     </div>
//   </section>
// );

// export default Home;

//=====================
// const Home = () => (
//   <section className="home" style={{
//     backgroundImage: 'url(https://images.unsplash.com/photo-1742647230923-292e4e1e10c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D)',
//     backgroundSize: 'cover',
//     height: '100vh',
//     color: '#fff',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }}>
//     <h1>Welcome to My Portfolio</h1>
//   </section>
// );

// export default Home;
//=============================

// import styles from './Home.module.css';

// const Home = () => {
//   return (
//     <section className={styles.container}>
//       <h1>Welcome to My Portfolio</h1>
//       <p>This is the home page showcasing my work and skills.</p>
//     </section>
//   );
// };

// export default Home;

//==============================

// import styles from './Home.module.css';

// const Home = () => {
//   return (
//     <section id="home" className={styles.container}>
//       <h1>Welcome to My Portfolio</h1>
//       <p>This is the home page showcasing my work and skills.</p>
//     </section>
//   );
// };

// export default Home;
