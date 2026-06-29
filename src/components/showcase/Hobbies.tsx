import React from 'react';
import travel1 from '../../assets/pictures/travel-1.jpg';
import travel2 from '../../assets/pictures/travel-2.jpg';
import travel3 from '../../assets/pictures/travel-3.jpg';

export interface HobbiesProps {}

const Hobbies: React.FC<HobbiesProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Hobbies</h1>
            <br />
            <div className="text-block">
                <h3>Travel</h3>
                <br />
                <p>
                    Exploring new cities and cultures is something I deeply enjoy.
                    Traveling broadens perspective and fuels creativity — both
                    in life and in the work I do.
                </p>
                <br />
                <div style={styles.travelPhotos}>
                    <img src={travel1} style={styles.travelPhoto} alt="Travel photo 1" />
                    <img src={travel2} style={styles.travelPhoto} alt="Travel photo 2" />
                    <img src={travel3} style={styles.travelPhoto} alt="Travel photo 3" />
                </div>
            </div>
            <div className="text-block">
                <h3>Open Source & Side Projects</h3>
                <br />
                <p>
                    Outside of work I enjoy building side projects and exploring
                    new technologies. Experimenting with new frameworks,
                    libraries, and ideas keeps me sharp and often leads to
                    interesting tools I use in my day-to-day work.
                </p>
            </div>
            <div className="text-block">
                <h3>Football</h3>
                <br />
                <p>
                    Football has been a passion of mine since childhood. I enjoy
                    both playing and watching — it's a great way to unwind and
                    stay active.
                </p>
            </div>
            <div className="text-block">
                <h3>Reading</h3>
                <br />
                <p>
                    I enjoy reading about technology trends, software
                    architecture, and entrepreneurship. Staying up to date with
                    what's happening in the tech world keeps me inspired and
                    motivated.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    travelPhotos: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
    },
    travelPhoto: {
        width: '30%',
        minWidth: 120,
        objectFit: 'cover',
        aspectRatio: '1 / 1',
        borderRadius: 4,
    },
};

export default Hobbies;
