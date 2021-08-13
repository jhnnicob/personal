import React, {useState, useEffect} from 'react';
import './about.css';
export default function About() {
    const [age, setAge] = useState(0);
    useEffect(() => {
        const yearBorn = 1992;
        const date = new Date();
        setAge(date.getFullYear() - yearBorn);
    })
    return (
        <div className="about" id="about">
            <div className="about__body">
                <h2>About me</h2>
                <p>I was a web designer for the last 5 years and switch to
                web development. I'm {age} years old and as a designer on my 
                previews job, I constantly coding small projects. </p>
            </div>
        </div>
    )
}
