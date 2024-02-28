/* eslint-disable react/prop-types */
import { CiTrash } from 'react-icons/ci';
import { IoIosStarOutline } from 'react-icons/io';
import { IoIosStar } from 'react-icons/io';

import { StarIcon } from './StarIcon';

export const Task = ({
  taskName,
  taskId,
  completed,
  important,
  handleSetAsImportant,
  handleComplete,
}) => {
  return (
    <div className='task'>
      <div className='checkbox-container'>
        <input
          type='checkbox'
          checked={completed ? true : false}
          onChange={() => handleComplete(taskId)}
        />
        <div
          className={
            completed ? 'task-information completed' : 'task-information'
          }
        >
          {taskName}
        </div>
        <div className='star-icon' onClick={() => handleSetAsImportant(taskId)}>
          <StarIcon icon={important ? <IoIosStar /> : <IoIosStarOutline />} />
        </div>
      </div>

      <div className='delete-task'>
        <CiTrash id='delete-icon' />
      </div>
    </div>
  );
};
