import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import { searchPokemon } from "./components/api";

function App() {

  const onSearchhandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log(`pokemon${result}`)
  }

  return (
    <div>
      <Navbar />
      <Searchbar
        onSearch={onSearchhandler}
      />
      <div className="App">

      </div>
    </div>
  );
}

export default App;
