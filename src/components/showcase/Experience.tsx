import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>BTECHNOLOGIE</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Front End Engineer · Bouygues Telecom x Accenture</h3>
                        <b>
                            <p>Jan 2025 – Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Building client-facing web and mobile applications for
                    Bouygues Telecom, one of France's top three telecoms —
                    platforms serving 15.8M quarterly visitors (SimilarWeb verified).
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developing with React, Next.js, and TypeScript for
                            consumer-facing features and internal tools at scale.
                        </p>
                    </li>
                    <li>
                        <p>
                            Managing a partials system driven by a Directus
                            headless CMS for dynamic content delivery.
                        </p>
                    </li>
                    <li>
                        <p>
                            Using AWS for backend services and asset processing
                            pipelines.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>1450 Factory · Blink Pharma</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Engineer</h3>
                        <b>
                            <p>Sep 2023 – Sep 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Full-stack engineer working across web and mobile
                    applications for clients in the pharmaceutical sector.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Key role on blinkpharma.ma — built the original
                            Python backend and contributed to the later migration
                            to a Next.js fullstack architecture.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed web and mobile applications using Next.js,
                            React Native, and Supabase.
                        </p>
                    </li>
                    <li>
                        <p>
                            Utilized AWS and Digital Ocean for deploying and
                            managing production applications.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>MEDIOT</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Engineer</h3>
                        <b>
                            <p>Jun 2023 – Sep 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Built a telemedicine platform connecting patients with
                    specialists remotely — one of my most impactful projects,
                    especially during the 2023 Marrakesh earthquake when it
                    helped deliver care to people in disrupted areas.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Platform facilitated over 1 million medical
                            interventions and 200,000+ tele-expertises conducted
                            with specialists.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated AI-native medical devices to support
                            remote diagnostics and patient monitoring.
                        </p>
                    </li>
                    <li>
                        <p>
                            Delivered end-to-end features using React.js and
                            Node.js in an Agile healthcare environment.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Algo Consulting Group · ONCF</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Engineer</h3>
                        <b>
                            <p>Jan 2022 – Mar 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Consultant on Morocco's national railway e-commerce platforms,
                    working on high-traffic public infrastructure used by millions
                    of travelers.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Enhanced the Supratours and ONCF Voyages train-ticket
                            platforms using React.js and Node.js.
                        </p>
                    </li>
                    <li>
                        <p>
                            Sub-managed a team of junior engineers and interns,
                            onboarding and guiding them through delivery — the
                            team later took over the mission full-time.
                        </p>
                    </li>
                    <li>
                        <p>
                            Added RTL Arabic localization and advised on UX for
                            the merchant site redesign.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Freelance</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer</h3>
                        <b>
                            <p>Feb 2020 – Dec 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Independent full-stack developer delivering end-to-end web
                    solutions for clients across various industries.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Delivered projects using Python (Django), Node.js,
                            React.js, and Vue.js.
                        </p>
                    </li>
                    <li>
                        <p>
                            Managed front-end to full-stack and CMS development to
                            meet deadlines and client expectations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Deployed applications on cloud platforms, ensuring
                            scalability and reliability.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default Experience;
