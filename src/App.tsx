
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Skills from './pages/Skills';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <div className="app-container">
//       <Header />
//       <main style={{ padding: '2rem', flex: 1 }}>
//         <Routes>
//           <Route path="/" element={<About />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import './App.css';
import Showcase from './components/Showcase';
const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;


// import { Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';
// import Resume from './pages/Resume';
// import Skills from './pages/Skills';
// import ScrollToTop from './components/ScrollToTop';
// import './App.css';

// const App = () => {
//   const location = useLocation();

//   return (
//     <div className="App">
//       <ScrollToTop /> {/* This goes inside JSX */}
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/skills" element={<Skills />} />
//         </Routes>
//       </main>
//       {location.pathname === '/' && <Footer />}
//     </div>
//   );
// };

// export default App;
