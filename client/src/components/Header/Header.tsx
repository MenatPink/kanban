import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <div className={styles.headerTitleContainer}>
        <h1>Platform Launch</h1>
        <Button />
      </div>
    </div>
  );
};

export default Header;
