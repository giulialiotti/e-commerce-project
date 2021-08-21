import React from "react";
import "./index.css";
import { Header } from "./components/Header";
import { HeroContainer } from "./components/HeroContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <HeroContainer />
            <ItemListContainer />
          </Route>

          <Route path="/detail">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
