import React from "react";
import "./index.css";
import { Header } from "./components/Header";
import { HeroContainer } from "./components/HeroContainer";
import { ItemListContainer } from "./components/ItemListContainer";
//import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <div>
      <Header />
      <HeroContainer />
      <ItemListContainer />
      {/* <ItemDetailContainer/> */}
    </div>
  );
}

export default App;
