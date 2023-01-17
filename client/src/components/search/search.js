import React from "react";
import CurrentStats from "./currentStats/currenStats.js";
import "./search.css";
import SeachResultList from "./searchResults/searchResultList.js";



export default function Search() {


    return (
        <div className="search">
            <div className="current-stats">
                <CurrentStats />
            </div>
            <div className="search-button">
                <button onClick={() => { }}>Sök</button>
            </div>
            <div className="search-results">
                <SeachResultList />
            </div>
        </div>
    );
}