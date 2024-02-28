import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';

// TODO - use context api

function App() {
  const [categories, setCategories] = useState([
    'All',
    'Important',
    'Completed',
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className='App'>
      <Header />
      <Main
        categories={categories}
        setCategories={setCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
}

export default App;
