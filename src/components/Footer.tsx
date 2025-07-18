// const Footer = () => (
//   <footer
//     style={{
//       backgroundColor: '#111',
//       color: 'white',
//       textAlign: 'center',
//       padding: '1rem',
//       position: 'fixed',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       zIndex: 999,
//     }}
//   >
//     <p>© 2025 My Portfolio — All rights reserved</p>
//   </footer>
// );

// export default Footer;


import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Your Name</p>
    </footer>
  );
};

export default Footer;

