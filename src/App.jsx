import React from "react";
import "./index.css";
import { NavBar } from "./components/navBar";
import { HeroContainer } from "./components/HeroContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { CartContainer } from "./components/CartContainer";

function App() {
  return (
    <>
      <CartProvider>

        <BrowserRouter>
          <NavBar />

          <Switch>
            <Route exact path="/">
              <HeroContainer />
              <ItemListContainer />
            </Route>

            <Route exact path="/shop">
              <ItemListContainer />
            </Route>

            <Route exact path="/category/:catId">
              <ItemListContainer />
            </Route>

            <Route exact path="/detail/:itemId">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart">
              <CartContainer />
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>

      </CartProvider>
    </>
  );
}

export default App;
