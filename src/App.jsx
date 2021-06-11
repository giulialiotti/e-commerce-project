import React from 'react';
import './App.css';
import { Header } from './components/Header/index';
import { ItemListContainer } from './components/ItemListContainer/index';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting="Hello World" />
    </div>

  );
}

export default App;
