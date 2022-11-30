import Header from '../Header/Header';
import Board from '../Board/Board';
import Sidebar from '../Sidebar/Sidebar';
import styles from './App.module.scss';
import { useAppSelector } from '../../hooks/hooks';

const App = () => {
const state = useAppSelector(state => state)
console.log(state);
  return (
    <div data-testid='app' className={styles.App}>
      <Header />
      <div className={styles.boardContainer}>
        <Board />
      </div>
      <Sidebar />
    </div>
  );
};

export default App;
