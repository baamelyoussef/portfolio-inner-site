import React from 'react';

export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <br />
            <div className="text-block">
                <h3>OkyNewsletters — Email Drag & Drop Builder</h3>
                <br />
                <p>
                    Built during my internship at Oky Solutions, this tool
                    allows marketers to design and export HTML email campaigns
                    using a drag-and-drop interface. Built with Laravel and Sass,
                    it significantly reduced the time needed to create branded
                    email templates.
                </p>
            </div>
            <div className="text-block">
                <h3>BlinkPharma.ma — Pharma Digital Platform</h3>
                <br />
                <p>
                    Enhanced digital tools and streamlined operations for
                    blinkpharma.ma while at 1450 Factory. Built with Next.js and
                    Supabase, the platform serves the pharmaceutical sector with
                    tailored solutions for managing and distributing products
                    across Morocco.
                </p>
            </div>
            <div className="text-block">
                <h3>Supratours & ONCF Voyages — E-commerce</h3>
                <br />
                <p>
                    Worked on the Supratours Marketplace and ONCF Voyages
                    e-commerce websites at Algo Consulting Group, improving the
                    booking and purchasing experience for thousands of users
                    using React.js and Node.js within an Agile Scrum team.
                </p>
            </div>
            <div className="text-block">
                <h3>Medical Application — MEDIOT</h3>
                <br />
                <p>
                    Developed a React.js and Node.js application for the medical
                    industry at MEDIOT, implementing solutions that meet
                    healthcare industry standards. Leveraged cloud services for
                    deployment and management.
                </p>
            </div>
            <div className="text-block">
                <h3>Freelance Projects</h3>
                <br />
                <p>
                    Over two years of freelance work, I delivered full-stack and
                    CMS-based web applications for clients across various
                    industries — handling everything from requirements gathering
                    to cloud deployment on AWS and Digital Ocean.
                </p>
            </div>
        </div>
    );
};

export default Projects;
