import React from "react";
import "./profile.css";

const courses = [
    "TDDC17",
    "TSBB08",
    "TDDD04",
    "TDDC73",
    "TDDE01",
    "TDDE51",
    "TBMI26",
    "TDDE05",
    "TDDD97",
    "TDDD27"
];

const wishes = ["TDDD37"];

export default function Profile() {
    return (
        <div className="profile">
            <h1>Namn Namnsson</h1>
            <h2>Program: Datateknik</h2>
            <h2>Profil: AI och maskininlärning</h2>
            <div className="courses">
                <h2>Avklarade masterkurser</h2>
                <div className="course-list">
                    {courses.map((course) => (
                        <div className="course">{course}</div>
                    ))}
                </div>
            </div>
            <div className="courses">
                <h2>Önskade kurser</h2>
                <div className="course-list">
                    {wishes.map((course) => (
                        <div className="course">{course}</div>
                    ))}
                </div>
                <div></div>
            </div>
            <div></div>
            <div className="edit">
                <button>Redigera val</button>
            </div>
        </div>
    );
};