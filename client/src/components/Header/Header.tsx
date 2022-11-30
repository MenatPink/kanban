import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { useAppSelector } from '../../hooks/hooks';

const Header = () => {
  const { activeBoard } = useAppSelector((state) => state.board);
  return (
    <div className={styles.headerContainer}>
      <Logo />
      <div className={styles.headerTitleContainer}>
        <h1>{activeBoard.title}</h1>
        <Button />
      </div>
    </div>
  );
};  

export default Header;
