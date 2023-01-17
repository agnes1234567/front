import React from "react";
import "./currentStats.css";


export default function CurrentStats() {
    return (
        <div className="content">
            <ul className="main-list">
                <li>
                    <div className="field-stats-simp">
                        <ul>
                            <li>HP kvar: 30</li>
                            <li>Avancerade HP kvar: 18</li>
                            <li>Obligatoriska kvar på program:</li>
                            <li>TDDD89 och TANA21 eller TANA09</li>
                            <li>Obligatoriska kvar på profil:</li>
                            <li>TDDE19</li>
                            <li>Önskade kvar:</li>
                            <li>TDDD37</li>
                        </ul>
                    </div>

                </li>
                <li className="divider"></li>
                <li>
                    <div className="field-stats">
                        <ul>
                            <li>HP kvar per huvudområde:</li>
                            <li>Datateknik: 0</li>
                            <li>Datavetenskap: 0</li>
                            <li>Elektroteknik: 18</li>
                            <li>Informationsteknologi: 0</li>
                            <li>Medicinsk teknik: 24</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}