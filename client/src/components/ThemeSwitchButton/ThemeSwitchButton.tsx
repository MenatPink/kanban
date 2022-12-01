import { useRef } from 'react';
import styles from './ThemeSwitchButton.module.scss';
import { ReactComponent as SunIcon } from '../../assets/images/sun-icon.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/moon-icon.svg';
import { switchThemeAction } from '../../actions/switchTheme.action';
import { useAppDispatch } from '../../hooks/hooks';

const ThemeSwitchButton = () => {
  const dispatch = useAppDispatch();
  const themeSwitch = useRef(null);

  return (
    <div className={styles.border}>
      <div className={styles.container}>
        <SunIcon />
        <label className={styles.switch}>
          <input
            ref={themeSwitch}
            type='checkbox'
            onClick={() =>
              dispatch(switchThemeAction(themeSwitch.current.checked))
            }
          />
          <span className={styles.slider}></span>
        </label>
        <MoonIcon />
      </div>
    </div>
  );
};

export default ThemeSwitchButton;
