import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting="Hello World" />
    </div>

  );
}

export default App;
