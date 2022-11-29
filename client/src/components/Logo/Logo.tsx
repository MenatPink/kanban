import { ReactComponent as KanbanLogoImage } from "../../assets/images/kanban-logo.svg";
import { ReactComponent as KanbanLogoImageTitle } from "../../assets/images/kanban-logo-title.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <KanbanLogoImage />
      <div className={styles.logoImageTitle}>
        <KanbanLogoImageTitle />
      </div>
    </div>
  );
};

export default Logo;
