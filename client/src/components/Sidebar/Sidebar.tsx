import { useAppSelector } from '../../hooks/hooks';
import Logo from '../Logo/Logo';
import styles from './Sidebar.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as BoardIcon } from '../../assets/images/board-icon.svg';
import ThemeSwitchButton from '../ThemeSwitchButton/ThemeSwitchButton';
import CloseSidebarButton from '../CloseSidebarButton/CloseSidebarButton';
import OpenSidebarButton from '../OpenSidebarButton/OpenSidebarButton';

const Sidebar = () => {
  const { sidebarStatus } = useAppSelector((state) => state.openSidebarReducer);

  const sidebarVariants = {
    start: { opacity: 1, x: -300 },
    open: {opacity: 1, x: 0},
    closed: { opacity: 1, x: -300 },
  };

  const smoothAnimationCurve = {
    type: 'tween',
    duration: .5,
    ease: 'easeOut'
  };

  return !sidebarStatus ? (
    <AnimatePresence>
      <motion.div
        key='open-sidebar-button'
        initial={{ opacity: 0, x: 300 }}
        animate={{opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={smoothAnimationCurve}>
        <OpenSidebarButton />
      </motion.div>
    </AnimatePresence>
  ) : (
    <AnimatePresence>
      <motion.div
        key='close-sidebar-button'
        initial='start'
        animate='open'
        exit='closed'
        variants={sidebarVariants}
        transition={smoothAnimationCurve}
        className={styles.sidebar}>
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
