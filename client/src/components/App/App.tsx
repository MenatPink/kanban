import Header from '../Header/Header';
import Board from '../Board/Board';
import Sidebar from '../Sidebar/Sidebar';
import styles from './App.module.scss';

const App = () => {

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
