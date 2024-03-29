import { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { TodoList } from './TodoList';

export const Main = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [clickedTask, setClickedTask] = useState(null);

  useEffect(() => {
    console.log(clickedTask);
  }, [clickedTask]);

  const [categories, setCategories] = useState([
    'All',
    'Important',
    'Completed',
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const [todoList, setTodoList] = useState([]);
  return (
    <div className='main'>
      <Sidebar
        categories={categories}
        setCategories={setCategories}
        setSelectedCategory={setSelectedCategory}
        isSidebarMenuOpen={isSidebarMenuOpen}
        setIsSidebarMenuOpen={setIsSidebarMenuOpen}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        selectedCategory={selectedCategory}
        isSidebarMenuOpen={isSidebarMenuOpen}
      />
    </div>
  );
};
