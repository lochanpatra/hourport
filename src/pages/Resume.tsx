import styles from './Resume.module.css';

const Resume = () => {
  return (
    <section className={styles.container}>
      <h1>Resume</h1>
      <p>Click <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a> to download my resume.</p>
    </section>
  );
};

export default Resume;
