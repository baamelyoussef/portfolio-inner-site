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
                        <h1>1450 Factory</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>Sep 2023 – Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Full-time software engineer working across web and mobile
                    applications for clients in sectors including pharmaceuticals.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed web and mobile applications using Next.js,
                            React.js, React Native, and Supabase.
                        </p>
                    </li>
                    <li>
                        <p>
                            Worked with clients in various sectors, including
                            pharmaceuticals, to create tailored digital solutions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Enhanced digital tools and streamlined operations for
                            blinkpharma.ma.
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
                        <h3>Front End Engineer</h3>
                        <b>
                            <p>Apr 2023 – Sep 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Front-end engineer focused on building medical solutions using
                    modern JavaScript technologies.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed applications using React.js and Node.js in
                            an Agile environment.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented medical solutions to meet industry
                            standards and patient needs.
                        </p>
                    </li>
                    <li>
                        <p>
                            Leveraged cloud services for efficient application
                            deployment and management.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Algo Consulting Group</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Front End Engineer</h3>
                        <b>
                            <p>Jan 2022 – Mar 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Front-end engineer enhancing large-scale e-commerce and
                    transport platforms in Morocco.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Enhanced Supratours Marketplace and ONCF Voyages
                            e-commerce websites using React.js and Node.js.
                        </p>
                    </li>
                    <li>
                        <p>
                            Worked within an Agile Scrum framework to meet client
                            goals and ensure timely delivery.
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
                            <p>Jan 2020 – Dec 2021</p>
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
                            Collaborated with clients to establish project goals,
                            projections, and milestones.
                        </p>
                    </li>
                    <li>
                        <p>
                            Managed front-end to full-stack and CMS development to
                            meet deadlines and organizational expectations.
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
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Oky Solutions</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer — Internship</h3>
                        <b>
                            <p>Oct 2019 – Jan 2020</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Internship building internal tooling for email marketing.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed the OkyNewsletters Email Drag & Drop Builder
                            using Laravel and Sass.
                        </p>
                    </li>
                    <li>
                        <p>
                            Streamlined email design creation with a user-friendly
                            drag-and-drop interface.
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
