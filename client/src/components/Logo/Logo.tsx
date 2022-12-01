import { ReactComponent as KanbanLogoImage } from '../../assets/images/kanban-logo.svg';
import { ReactComponent as KanbanLogoImageTitle } from '../../assets/images/kanban-logo-title.svg';
import styles from './Logo.module.scss';
import { useAppSelector } from '../../hooks/hooks';
import { motion } from 'framer-motion';
import { smoothAnimationCurve } from '../../utils/animation';

const Logo = () => {
  const { sidebarStatus } = useAppSelector((state) => state.sidebar);

  const sidebarVariant = {
    open: { paddingRight: 100 },
    closed: { paddingRight: 34 }
  };

  return (
    <motion.div
      animate={sidebarStatus ? 'open' : 'closed'}
      variants={sidebarVariant}
      transition={smoothAnimationCurve}
      className={styles.logoContainer}>
      <KanbanLogoImage />
      <div className={styles.logoImageTitle}>
        <KanbanLogoImageTitle />
      </div>
    </motion.div>
  );
};

export default Logo;
