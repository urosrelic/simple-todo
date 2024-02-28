/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';

import { CiCalendarDate } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { Task } from './Task';

export const TodoList = ({
  todoList,
  setTodoList,
  selectedCategory,
  isSidebarMenuOpen,
}) => {
  const [taskName, setTaskName] = useState('');
  const [dateValue, setDateValue] = useState(null);

  const [divClicked, setDivClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const dateRef = useRef();

  // * Sidebar behavior based on sidebar
  // Default value is 'false'
  const todoListClass = isSidebarMenuOpen
    ? 'todo-list shrink'
    : 'todo-list grow';

  const handleInput = (e) => {
    setTaskName(e.target.value);
  };

  const handleDateClick = () => {
    dateRef.current.showPicker();
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const resetForm = () => {
    setTaskName('');
    setDivClicked(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      taskName: taskName,
      dateValue: dateValue,
      category: 'All',
      important: false,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTask]);

    resetForm();
  };

  const handleComplete = (id) => {
    const updatedList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTodoList(updatedList);
    console.log(todoList);
  };

  const handleSetAsImportant = (id) => {
    const updatedList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, important: !item.important };
      }
      return item;
    });

    setTodoList(updatedList);
  };

  const filteredTasks = todoList.filter((task) => {
    if (selectedCategory === 'All') {
      return true; // Show all tasks
    } else if (selectedCategory === 'Important') {
      return task.important;
    } else if (selectedCategory === 'Completed') {
      return task.completed;
    } else {
      return task.category === selectedCategory;
    }
  });

  useEffect(() => {
    setIsDisabled(taskName === '');
  }, [taskName, todoList, filteredTasks]);

  return (
    <div className={todoListClass}>
      <h1 style={{ textTransform: 'uppercase' }}>{selectedCategory}</h1>
      <div className='add-task'>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              value={taskName}
              onChange={(e) => handleInput(e)}
              onClick={() => setDivClicked(true)}
              placeholder='+ ADD TASK'
            />
            {divClicked && (
              <button className='close-field-btn' onClick={() => resetForm()}>
                <IoMdClose />
              </button>
            )}
          </div>
          {divClicked && (
            <div className='additional-field'>
              <div className='icons'>
                <div className='date-input'>
                  <CiCalendarDate className='icon' onClick={handleDateClick} />
                  <div>
                    {dateValue !== null ? dateValue : 'Date not selected'}
                  </div>
                  <input
                    type='date'
                    ref={dateRef}
                    className='hidden'
                    onChange={(e) => handleDateChange(e)}
                  />
                </div>
              </div>
              <button type='submit' disabled={isDisabled}>
                ADD
              </button>
            </div>
          )}
        </form>
      </div>

      <h2>TASKS</h2>

      <div className='todo-items'>
        {filteredTasks.map((task, id) => {
          return (
            <Task
              key={id}
              {...task}
              handleSetAsImportant={() => handleSetAsImportant(task.id)}
              handleComplete={() => handleComplete(task.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
