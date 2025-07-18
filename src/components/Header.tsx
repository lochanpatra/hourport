
// import { useState } from 'react';
// import { Link } from 'react-router-dom';



// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   return (
//     <header
//       style={{
//         backgroundColor: '#111',
//         color: 'white',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//         padding: '1rem',
//       }}
//     >
//       <div
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//         <h1 style={{ margin: 0, fontSize: '1.5rem' }}>My Portfolio</h1>

//         {/* Hamburger Button */}
//         <button
//           onClick={toggleMenu}
//           className="hamburger"
//           style={{
//             display: 'none',
//             background: 'none',
//             border: 'none',
//             color: 'white',
//             fontSize: '1.5rem',
//             cursor: 'pointer',
//           }}
//         >
//           ☰
//         </button>

//         {/* Navigation Links */}
//         <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
//           <Link to="/home" onClick={() => setMenuOpen(false)} style={linkStyle}>Home</Link>
//           <Link to="/about" onClick={() => setMenuOpen(false)} style={linkStyle}>About</Link>
//           <Link to="/skills" onClick={() => setMenuOpen(false)} style={linkStyle}>Skills</Link>
//           <Link to="/projects" onClick={() => setMenuOpen(false)} style={linkStyle}>Projects</Link>
//           <Link to="/contact" onClick={() => setMenuOpen(false)} style={linkStyle}>Contact</Link>
//           <Link to="/resume" onClick={() => setMenuOpen(false)} style={linkStyle}>Resume</Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// const linkStyle: React.CSSProperties = {
//   color: 'white',
//   textDecoration: 'none',
//   marginLeft: '1.5rem',
//   fontSize: '1.1rem',
// };

// export default Header;
//============================ok==========

// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   // Common link style
//   const baseLinkStyle: React.CSSProperties = {
//     color: 'white',
//     textDecoration: 'none',
//     marginLeft: '1.5rem',
//     fontSize: '1.1rem',
//   };

//   // Active link style override
//   const activeLinkStyle: React.CSSProperties = {
//     fontWeight: 'bold',
//     borderBottom: '2px solid white',
//   };

//   return (
//     <header
//       style={{
//         backgroundColor: '#111',
//         color: 'white',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//         padding: '1rem',
//       }}
//     >
//       <div
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//         }}
//       >
//         <h1 style={{ margin: 0, fontSize: '1.5rem' }}>My Portfolio</h1>

//         {/* Hamburger Button */}
//         <button
//           onClick={toggleMenu}
//           className="hamburger"
//           style={{
//             background: 'none',
//             border: 'none',
//             color: 'white',
//             fontSize: '1.8rem',
//             cursor: 'pointer',
//             display: 'block', // Always visible for now; you can hide/show with media queries later
//           }}
//           aria-label="Toggle navigation menu"
//         >
//           ☰
//         </button>

//         {/* Navigation Links */}
//         <nav
//           className={`nav-links ${menuOpen ? 'open' : ''}`}
//           style={{
//             display: menuOpen ? 'flex' : 'none',
//             flexDirection: 'column',
//             position: 'absolute',
//             top: '60px',
//             right: '1rem',
//             backgroundColor: '#222',
//             padding: '1rem',
//             borderRadius: '8px',
//           }}
//         >
//           <NavLink
//             to="/"
//             onClick={() => setMenuOpen(false)}
//             style={({ isActive }) =>
//               isActive
//                 ? { ...baseLinkStyle, ...activeLinkStyle }
//                 : baseLinkStyle
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             onClick={() => setMenuOpen(false)}
//             style={({ isActive }) =>
//               isActive
//                 ? { ...baseLinkStyle, ...activeLinkStyle }
//                 : baseLinkStyle
//             }
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/skills"
//             onClick={() => setMenuOpen(false)}
//             style={({ isActive }) =>
//               isActive
//                 ? { ...baseLinkStyle, ...activeLinkStyle }
//                 : baseLinkStyle
//             }
//           >
//             Skills
//           </NavLink>
//           <NavLink
//             to="/projects"
//             onClick={() => setMenuOpen(false)}
//             style={({ isActive }) =>
//               isActive
//                 ? { ...baseLinkStyle, ...activeLinkStyle }
//                 : baseLinkStyle
//             }
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/contact"
//             onClick={() => setMenuOpen(false)}
//             style={({ isActive }) =>
//               isActive
//                 ? { ...baseLinkStyle, ...activeLinkStyle }
//                 : baseLinkStyle
//             }
//           >
//             Contact
//           </NavLink>
//           <NavLink
//             to="/resume"
//             onClick={() => setMenuOpen(false)}
//             style={({ isActive }) =>
//               isActive
//                 ? { ...baseLinkStyle, ...activeLinkStyle }
//                 : baseLinkStyle
//             }
//           >
//             Resume
//           </NavLink>
//         </nav>

//         {/* Desktop nav links: visible on wider screens */}
//         <nav
//           className="nav-links-desktop"
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             gap: '1.5rem',
//           }}
//         >
//           {['/', '/about', '/skills', '/projects', '/contact', '/resume'].map(
//             (path, idx) => {
//               const label = ['Home', 'About', 'Skills', 'Projects', 'Contact', 'Resume'][idx];
//               return (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   style={({ isActive }) =>
//                     isActive
//                       ? { ...baseLinkStyle, ...activeLinkStyle }
//                       : baseLinkStyle
//                   }
//                 >
//                   {label}
//                 </NavLink>
//               );
//             }
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



//============================final=====================

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const baseLinkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '1.5rem',
    fontSize: '1.1rem',
  };

  const activeLinkStyle: React.CSSProperties = {
    fontWeight: 'bold',
    borderBottom: '2px solid white',
  };

  return (
    <header
      style={{
        backgroundColor: '#111',
        color: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Hamburger Button on Left */}
        <button
          onClick={toggleMenu}
          className="hamburger"
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.8rem',
            cursor: 'pointer',
            marginRight: '1rem',
            display: 'block', // always visible for now
          }}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Site Title next to hamburger */}
        <h1 style={{ margin: 0, fontSize: '1.5rem', flexGrow: 1 }}>My Portfolio</h1>

        {/* Desktop Navigation Links */}
        <nav
          className="nav-links-desktop"
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1.5rem',
          }}
        >
          {['/', '/about', '/skills', '/projects',  '/showcase','/contact','/resume' ].map(
            (path, idx) => {
              const label = ['Home', 'About', 'Skills', 'Projects', 'showcase','Contact', 'Resume'][idx];
              return (
                <NavLink
                  key={path}
                  to={path}
                  style={({ isActive }) =>
                    isActive
                      ? { ...baseLinkStyle, ...activeLinkStyle }
                      : baseLinkStyle
                  }
                >
                  {label}
                </NavLink>
              );
            }
          )}
        </nav>
      </div>

      {/* Mobile nav menu - dropdown */}
      {menuOpen && (
        <nav
          className="nav-links-mobile"
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#222',
            padding: '1rem',
            borderRadius: '8px',
            position: 'absolute',
            top: '60px',
            left: 0,
            right: 0,
            zIndex: 1001,
          }}
        >
          {['/', '/about', '/skills', '/projects', '/showcase','/contact', '/resume'].map(
            (path, idx) => {
              const label = ['Home', 'About', 'Skills', 'Projects', 'showcase','Contact', 'Resume'][idx];
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) =>
                    isActive
                      ? { ...baseLinkStyle, ...activeLinkStyle, marginLeft: 0, padding: '0.5rem 0' }
                      : { ...baseLinkStyle, marginLeft: 0, padding: '0.5rem 0' }
                  }
                >
                  {label}
                </NavLink>
              );
            }
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;

















//==================================
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> | <Link to="/skills">Skills</Link> | <Link to="/resume">Resume</Link> | <Link to="/contact">Contact</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

//==========================================
// import { Link } from 'react-router-dom';
// import styles from './Header.module.css';

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <nav className={styles.nav}>
//         <Link to="/" className={styles.link}>Home</Link>
//         <Link to="/about" className={styles.link}>About</Link>
//         <Link to="/projects" className={styles.link}>Projects</Link>
//         <Link to="/skills" className={styles.link}>Skills</Link>
//         <Link to="/resume" className={styles.link}>Resume</Link>
//         <Link to="/contact" className={styles.link}>Contact</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

//=============================

// import { useState } from 'react';
// import styles from './Header.module.css';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>MyPortfolio</div>
//       <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </nav>
//       <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
//         <span />
//         <span />
//         <span />
//       </div>
//     </header>
//   );
// };

// export default Header;
