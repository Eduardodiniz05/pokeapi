import React from "react";

const Searchbar = () => {
    let search = "Pikachu";

    const onChangehandler = (e) => {
        console.log("pokemon", e.target.value)
        search = e.target.value
    }
    return(
        <div>
            <div className="searchbar-container">
                <input placeholder="Buscar Pokemon"  onChange={onChangehandler}/>
                {search}
            </div>
        </div>
    )
};

export default Searchbar;