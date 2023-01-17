import React from "react";
import "./searchResultList.css";

const searchResults = {
    "in_all": [
        "TDDD89",
        "TANA21",
        "TDDE19",
        "TDDD37"
    ],
    "combinations": [
        ['TDDD43'], ['TAMS32'],
        ['TDDD53'], ['TDDE15'],
        ['TSDT14'], ['TSFS12'],
        ['TSKS12'], ['TSBK03'],
        ['TDDD23'], ['TDEI13'],
        ['TDTS08'], ['TEIO90'],
        ['TSBB19'], ['TSEK03'],
        ['TSKS15'], ['TSTE86'],
        ['TSIT03'], ['TNM114']
    ]
};


export default function SearchResults() {
    return (
        <div>
            <h3>Resultat</h3>
            <div className="in-all">
                <h5>I alla lösningar</h5>
                <ul>
                    {searchResults.in_all.map((course) => (
                        <li>{course}</li>
                    ))}
                </ul>
            </div>
            <div className="combinations">
                <h5>Kombinera med</h5>
                <ul>
                    {searchResults.combinations.map((combination) => (
                        <li>{combination}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
