import { ReactComponent as EyeSlashIcon } from '../../assets/images/eye-slash.svg';
import { useAppDispatch } from '../../hooks/hooks';
import styles from './CloseSidebarButton.module.scss';
import { closeSidebarAction } from '../../actions/closeSidebar.action';

const CloseSidebarButton = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      data-testid='close-sidebar-button'
      className={styles.closeSidebar}
      onClick={() => {
        dispatch(closeSidebarAction());
      }}>
      <EyeSlashIcon />
      <p>Hide Sidebar</p>
    </div>
  );
};

export default CloseSidebarButton;
