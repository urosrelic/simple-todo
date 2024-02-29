/* eslint-disable react/prop-types */
import { CiTrash } from 'react-icons/ci';
import { IoIosStarOutline } from 'react-icons/io';
import { IoIosStar } from 'react-icons/io';

import { CustomIcon } from './CustomIcon';
import { useState } from 'react';
import { TaskDetails } from './TaskDetails';

export const Task = ({
  taskName,
  taskId,
  completed,
  important,
  dateValue,
  handleSetAsImportant,
  handleComplete,
  handleDelete,
}) => {
  const [taskClicked, setTaskClicked] = useState(false);

  return (
    <div className='task'>
      <div className='task-data' onClick={() => setTaskClicked(!taskClicked)}>
        <div className='task-information'>
          <input
            type='checkbox'
            checked={completed ? true : false}
            onChange={(event) => {
              handleComplete(taskId, event);
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          <div
            className={
              completed
                ? 'task-name completed no-select'
                : 'task-name no-select'
            }
          >
            {taskName}
          </div>
          <div
            className='star-icon'
            onClick={(e) => {
              handleSetAsImportant(taskId);
              e.stopPropagation();
            }}
          >
            <CustomIcon
              icon={important ? <IoIosStar /> : <IoIosStarOutline />}
            />
          </div>
        </div>
        <div className='delete-task' onClick={handleDelete}>
          <CiTrash id='delete-icon' />
        </div>
      </div>

      {taskClicked && <TaskDetails dateValue={dateValue} />}
    </div>
  );
};
