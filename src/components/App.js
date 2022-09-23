import React , { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [toggleDarkMode , setToggleDarkMode]=useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = toggleDarkMode ? "App dark" : "App light"

  function handleToggle (){
    setToggleDarkMode((toggleDarkMode)=> !toggleDarkMode)
  }

  const [items,setItems]=useState(itemData);
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>{toggleDarkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
