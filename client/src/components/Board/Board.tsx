import styles from './Board.module.scss';
import NewColumn from '../NewColumn/NewColumn';
import { useAppSelector } from '../../hooks/hooks';
import TaskColumn from '../TaskColumn/TaskColumn';
import { motion } from 'framer-motion';
import { smoothAnimationCurve } from '../../utils/animation';

const Board = () => {
  const { columns } = useAppSelector((state) => state.board.activeBoard);
  const { sidebarStatus } = useAppSelector((state) => state.sidebar);
  return (
    <div data-testid='board' className={styles.board}>
      <motion.div
        animate={!sidebarStatus ? { x: 0 } : { x: 300 }}
        transition={smoothAnimationCurve}
        className={styles.taskContainer}>
        <>
          {columns.map((column, i) => (
            <TaskColumn key={i} title={column.title} tasks={column.tasks} />
          ))}
        </>
        <NewColumn />
      </motion.div>
    </div>
  );
};

export default Board;
