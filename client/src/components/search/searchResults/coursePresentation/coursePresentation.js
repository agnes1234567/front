import React from "react";

export default function CoursePresentation(courseCodes) {
    return (
        <div>
            <h1>Kombination</h1>
            <ul>
                {courseCodes.map((courseCode) => (
                    <li>{courseCode}</li>
                ))}
            </ul>
        </div>
    );
}