import React from 'react';

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <br />
            <div className="text-block">
                <h3>Heald — Put Yourself First</h3>
                <p style={{ marginTop: 4, marginBottom: 8 }}>
                    <small>React Native · iOS · Health & Fitness · 2025</small>
                </p>
                <p>
                    A health and fitness iOS app built with React Native, live
                    on the App Store. Rated 5.0 ★ — designed to help users
                    track emotional recovery with AI-powered support and journaling.
                </p>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://apps.apple.com/us/app/heald-put-yourself-first/id6756617487"
                        >
                            <p>
                                <b>[App Store]</b> - Heald on the App Store
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h3>Blink Premium</h3>
                <p style={{ marginTop: 4, marginBottom: 8 }}>
                    <small>React Native · iOS · Medical · 2024</small>
                </p>
                <p>
                    A medical iOS app built with React Native for the Moroccan
                    pharmaceutical market, live on the App Store. Actively
                    maintained across 25+ releases — serving pharmacies with
                    marketplace access, medical data, and product management tools.
                </p>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://apps.apple.com/ma/app/blink-premium/id1482286159"
                        >
                            <p>
                                <b>[App Store]</b> - Blink Premium on the App
                                Store
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h3>Debrief</h3>
                <p style={{ marginTop: 4, marginBottom: 8 }}>
                    <small>
                        React · Node.js · Whisper · GPT-4o mini · PostgreSQL ·
                        Redis · Docker · 2026
                    </small>
                </p>
                <p>
                    An AI-powered meeting debrief tool that transcribes and
                    summarizes recordings using Whisper and GPT-4o mini.
                </p>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://usedbrief.vercel.app/"
                        >
                            <p>
                                <b>[Live]</b> - usedbrief.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/baamelyoussef/debrief"
                        >
                            <p>
                                <b>[GitHub]</b> - Debrief Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h3>Outmailer</h3>
                <p style={{ marginTop: 4, marginBottom: 8 }}>
                    <small>
                        Next.js · TypeScript · Email Validation · SaaS · 2022
                    </small>
                </p>
                <p>
                    A SaaS email validation tool built with Next.js and
                    TypeScript that helps clean and verify email lists.
                </p>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://outmailer.vercel.app/"
                        >
                            <p>
                                <b>[Live]</b> - outmailer.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/baamelyoussef/Outmailer"
                        >
                            <p>
                                <b>[GitHub]</b> - Outmailer Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h3>Syncboard</h3>
                <p style={{ marginTop: 4, marginBottom: 8 }}>
                    <small>
                        React · Python · FastAPI · WebSockets · CRDT · Canvas ·
                        roughjs · 2026
                    </small>
                </p>
                <p>
                    A real-time collaborative whiteboard built with React,
                    Python/FastAPI, WebSockets, and CRDT conflict resolution for
                    concurrent editing.
                </p>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://syncboard-teal.vercel.app/"
                        >
                            <p>
                                <b>[Live]</b> - syncboard-teal.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/baamelyoussef/syncboard"
                        >
                            <p>
                                <b>[GitHub]</b> - Syncboard Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Projects;
