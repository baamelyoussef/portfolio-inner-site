import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Youssef Baamel</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Software Engineer based in Casablanca, Morocco with 5
                    years of experience specializing in the JavaScript stack. I
                    progressed from Front End Engineer to Full Stack Developer to
                    Software Engineer, building web and mobile applications for
                    clients across diverse sectors.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. If
                    you have any questions or would like to get in touch, feel
                    free to reach out via{' '}
                    <Link to="/contact">the contact page</Link> or email me at{' '}
                    <a href="mailto:hi@youssefbaamel.com">
                        hi@youssefbaamel.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My journey in tech started with a curiosity for how software
                    powers the modern world. I pursued a Bachelor's degree in
                    Computer Science at Hassan II University (2022), where I
                    studied algorithms, data structures, object-oriented
                    programming, and modern front-end technologies like React.js
                    and Vue.js.
                </p>
                <br />
                <p>
                    In 2020, I also completed the Front End Web Development
                    Certification through the One Million Arab Coders Initiative
                    by Udacity, deepening my expertise in HTML, CSS, JavaScript,
                    and React.js.
                </p>
                <br />
                <p>
                    Over the years I've worked across freelance, startup, and
                    agency environments — from building an email drag-and-drop
                    builder at Oky Solutions, to enhancing e-commerce platforms
                    at Algo Consulting Group, to delivering medical and
                    pharmaceutical solutions at MEDIOT and 1450 Factory. I'm
                    proficient with cloud services like AWS and Digital Ocean,
                    and I thrive in Agile and Scrum teams.
                </p>
                <br />
                <p>
                    I'm always open to interesting opportunities and
                    collaborations. Feel free to{' '}
                    <Link to="/contact">reach out</Link> anytime!
                </p>
            </div>
            <div className="text-block">
                <h3>Education</h3>
                <br />
                <p>
                    <b>Bachelor's degree in Computer Science (2022)</b>
                    <br />
                    Hassan II University — Casablanca, Morocco
                </p>
                <br />
                <p>
                    <b>Front End Web Development Certification (2020)</b>
                    <br />
                    One Million Arab Coders Initiative by Udacity
                </p>
            </div>
            <div className="text-block">
                <h3>Technical Skills</h3>
                <br />
                <p>
                    React.js · Next.js · Vue.js · Nuxt.js · React Native ·
                    TypeScript · Node.js · Laravel · TailwindCSS · CSS/SASS ·
                    Firebase · Supabase · AWS · Digital Ocean
                </p>
            </div>
        </div>
    );
};


export default About;
