import styles from './TaskColumn.module.scss';
import Task from '../Task/Task';
import { Columns } from '../../store/initialState';

const TaskColumn = ({ title, tasks }: Columns) => {
  return (
    <div className={styles.container}>
      <h3>
        <span className={styles.columnColor}></span>
        {title}
      </h3>
      {tasks.map((task, i) => <Task key={i} title={task.title} subtitle={task.subtitle}/>)}
    </div>
  );
};

export default TaskColumn;
