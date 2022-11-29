import styles from "./ThemeSwitchButton.module.scss";
import { ReactComponent as SunIcon } from "../../assets/images/sun-icon.svg";
import { ReactComponent as MoonIcon } from "../../assets/images/moon-icon.svg";

const ThemeSwitchButton = () => {
  return (
    <div className={styles.border}>
      <div className={styles.container}>
        <SunIcon />
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
        <MoonIcon />
      </div>
    </div>
  );
};

export default ThemeSwitchButton;
