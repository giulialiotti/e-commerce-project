import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting="Hello World" />
      <ItemDetailContainer/>
    </div>

  );
}

export default App;
