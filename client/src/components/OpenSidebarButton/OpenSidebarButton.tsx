import { useAppDispatch } from '../../hooks/hooks';
import { openSidebarAction } from '../../actions/openSidebar.action';
import styles from './OpenSidebarButton.module.scss';
import { ReactComponent as EyeIcon } from '../../assets/images/eye-icon.svg';

const OpenSidebarButton = () => {
  const dispatch = useAppDispatch()
  return (
    <div
      className={styles.container}
      onClick={() => dispatch(openSidebarAction())}>
      <EyeIcon />
    </div>
  );
};

export default OpenSidebarButton;
