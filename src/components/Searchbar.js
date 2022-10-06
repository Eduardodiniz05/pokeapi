import React, { useState } from "react";

const Searchbar = () => {
    const [search, setSearch] = useState("")

    const onChangehandler = (e) => {
        setSearch(e.target.value)
    }

    const onClickHandler = () => {
        console.log("pokemon: ", search)
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokémon" onChange={onChangehandler} />
        
            </div>
            <div className="searchbar-btn">
                <button onClick={onClickHandler} > Buscar </button>
            </div>
        </div>
    )
};

export default Searchbar;