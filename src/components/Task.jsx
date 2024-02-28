/* eslint-disable react/prop-types */
import { CiStar } from 'react-icons/ci';

export const Task = ({
  taskName,
  taskId,
  completed,
  handleSetAsImportant,
  handleComplete,
}) => {
  return (
    <div className='task'>
      <div className='checkbox-container'>
        <label>
          <input
            type='checkbox'
            checked={completed ? true : false}
            onChange={() => handleComplete(taskId)}
          />
        </label>
      </div>
      <div
        className={
          completed ? 'task-information completed' : 'task-information'
        }
      >
        {taskName}
      </div>
      <div className='task-actions'>
        <div className='delete-task'></div>
        <div className='set-task-as-important'>
          <CiStar />
        </div>
      </div>
    </div>
  );
};
