/* eslint-disable react/prop-types */
import { CiTrash } from 'react-icons/ci';
import { IoIosStarOutline } from 'react-icons/io';
import { IoIosStar } from 'react-icons/io';

import { CustomIcon } from './CustomIcon';
import { useState } from 'react';

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
          <div
            className='star-icon'
            onClick={() => handleSetAsImportant(taskId)}
          >
            <CustomIcon
              icon={important ? <IoIosStar /> : <IoIosStarOutline />}
            />
          </div>
        </div>
      </div>

      {taskClicked && (
        <div className='task-details'>
          <div className='due-date'>
            Due: {dateValue === null ? 'Date not selected' : dateValue}
          </div>
          <div className='note-section'>
            <textarea className='note' placeholder='Add a note...'></textarea>
          </div>
          <div className='delete-task' onClick={handleDelete}>
            <CiTrash id='delete-icon' />
          </div>
        </div>
      )}
    </div>
  );
};
