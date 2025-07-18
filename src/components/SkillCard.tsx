import styles from './SkillCard.module.css';

interface Props {
  skill: string;
  level: string;
}

const SkillCard = ({ skill, level }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{skill}</h2>
      <p className={styles.level}>Level: {level}</p>
    </div>
  );
};

export default SkillCard;

