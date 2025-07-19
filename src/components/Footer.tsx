
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Lochan patra</p>
    </footer>
  );
};

export default Footer;

