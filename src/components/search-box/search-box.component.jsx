import React from "react";
import './search-box.styles.css';

export const SearchBox = props => {
    return(
        <div className="App">
            <input className="search" type="search" placeholder={props.placeholder} onChange={(e)=> props.handleChange(e)}></input>
        </div>
        
    )
}