import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TodoList } from './TodoList';

export const Main = ({
  categories,
  setCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className='main'>
      <Sidebar
        categories={categories}
        setCategories={setCategories}
        setSelectedCategory={setSelectedCategory}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};
