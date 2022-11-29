import { useAppSelector } from '../../hooks/hooks';
import Logo from '../Logo/Logo';
import styles from './Sidebar.module.scss';
import { ReactComponent as BoardIcon } from '../../assets/images/board-icon.svg';
import ThemeSwitchButton from '../ThemeSwitchButton/ThemeSwitchButton';
import OpenSidebarButton from '../OpenSidebarButton/OpenSidebarButton';
import CloseSidebarButton from '../CloseSidebarButton/CloseSidebarButton';

const Sidebar = () => {
  const { sidebarStatus } = useAppSelector((state) => state.openSidebarReducer);

  return !sidebarStatus ? (
    <OpenSidebarButton />
  ) : (
    <div
      className={
        sidebarStatus
          ? styles.sidebar
          : [styles.sidebar, styles.closed].join(' ')
      }>
      <div className={styles.logo}>
        <Logo />
      </div>
      <p className={styles.boardNumber}>All boards (3)</p>
      <ul className={styles.boardList}>
        <li>
          <BoardIcon />
          <p>Platform Launch</p>
        </li>
        <li>
          <BoardIcon />
          <p>Marketing Plan</p>
        </li>
        <li>
          <BoardIcon />
          <p>Roadmap</p>
        </li>
        <li className={styles.newBoardButton}>
          <BoardIcon />
          <p>+ Create New Board</p>
        </li>
      </ul>
      <ThemeSwitchButton />
      <CloseSidebarButton />
    </div>
  );
};

export default Sidebar;
