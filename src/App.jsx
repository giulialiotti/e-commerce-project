import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemCount } from './components/ItemCount';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting="Hello World" />
      <ItemCount stock="5"/>
    </div>

  );
}

export default App;
