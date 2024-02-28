import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';

// TODO - use context api

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
