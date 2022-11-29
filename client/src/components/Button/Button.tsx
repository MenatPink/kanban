import styles from './Button.module.scss';

const Button = () => {
  return (
    <button data-testid='button' className={styles.button}>
      Add New Task
    </button>
  );
};

export default Button;
