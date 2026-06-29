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
                    I'm a full-stack engineer with 5+ years building across
                    React, Node.js, Python, and React Native — from SaaS
                    products to real-time systems and production iOS apps.
                    Currently based in France, working at BTECHNOLOGIE on
                    client-facing applications for Bouygues Telecom.
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
                    Over the years I've worked across freelance, startup, and
                    agency environments — enhancing national railway e-commerce
                    platforms at Algo Consulting Group, delivering pharmaceutical
                    solutions at 1450 Factory / Blink Pharma, and now building
                    consumer applications at scale for Bouygues Telecom via
                    BTECHNOLOGIE x Accenture. I'm proficient with cloud services
                    like AWS and Digital Ocean, and I thrive in Agile and Scrum
                    teams.
                </p>
                <br />
                <p>
                    One of my most meaningful projects was a telemedicine
                    platform built to connect patients with doctors remotely.
                    What makes it especially close to my heart is the real-world
                    impact it had during the 2023 Marrakesh earthquake — one of
                    Morocco's deadliest disasters in decades — helping people in
                    remote and affected areas access medical care when physical
                    infrastructure was disrupted.
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
            </div>
            <div className="text-block">
                <h3>Technical Skills</h3>
                <br />
                <p><b>Frontend</b></p>
                <p>React.js · Next.js · Vue.js · Nuxt.js · React Native · TypeScript</p>
                <br />
                <p><b>Backend</b></p>
                <p>Node.js · Express.js · Python (Django) · FastAPI · Laravel · REST APIs</p>
                <br />
                <p><b>Styling & Design</b></p>
                <p>TailwindCSS · CSS / SASS · Figma</p>
                <br />
                <p><b>Cloud & DevOps</b></p>
                <p>AWS · Digital Ocean · Vercel · Docker · Kubernetes · Terraform · CI/CD · Git / GitHub</p>
                <br />
                <p><b>Testing</b></p>
                <p>Jest</p>
                <br />
                <p><b>Databases & BaaS</b></p>
                <p>PostgreSQL · MySQL · Microsoft SQL Server · MongoDB · GraphQL · Firebase · Supabase · Drizzle</p>
                <br />
                <p><b>AI & Machine Learning</b></p>
                <p>OpenAI API · LangChain · Hugging Face · Pinecone · RAG · LLM Integration · Prompt Engineering · AI Agents</p>
            </div>
            <div className="text-block">
                <h3>Languages</h3>
                <br />
                <p>
                    <b>Arabic</b> — Native &nbsp;·&nbsp;{' '}
                    <b>French</b> — Fluent &nbsp;·&nbsp;{' '}
                    <b>English</b> — Fluent &nbsp;·&nbsp;{' '}
                    <b>Spanish</b> — Beginner &nbsp;·&nbsp;{' '}
                    <b>German</b> — Beginner
                </p>
            </div>
        </div>
    );
};


export default About;
