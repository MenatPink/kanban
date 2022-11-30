import styles from './Task.module.scss';
import { motion } from 'framer-motion';
import { Tasks } from '../../store/initialState';

const Task = ({ title, subtitle }: Tasks) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: {
          duration: 0.15,
          ease: 'easeIn'
        }
      }}
      className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
    </motion.div>
  );
};

export default Task;
