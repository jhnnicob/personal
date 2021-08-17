import React, {useState, useEffect} from 'react';
import './about.css';
export default function About() {
    const [age, setAge] = useState(0);
    useEffect(() => {
        const yearBorn = 1992;
        const date = new Date();
        setAge(date.getFullYear() - yearBorn);
    }, [])
    return (
        <div className="about" id="about">
            <div className="about__body">
                <h2>About me</h2>
                <h3>The Introvert...</h3>
                <p>I was a web designer for the last five years and 
                    switch to web development. I'm {age} years old, and 
                    as a designer on my previews job, I'm coding small 
                    projects occasionally.</p>
                
                <p>I use HTML, CSS, and Javascript. Thought constantly changing, 
                    I'm learning React.js, Node, and Express.</p>

                <h3>A little more..</h3>
                <p>I've got interested in programming when I was sixteen. I studied 
                college and get a degree of Bachelor of Science in Information 
                Technology. When I graduated, life is not easy as I thought. 
                I can't find a job as a programmer, that's why I decided to be 
                a web designer, so I became one.</p>

                <p>Now, I'm going back to what I want to be. I left my previews 
                    job to focus on programming. </p>
            </div>
        </div>
    )
}
