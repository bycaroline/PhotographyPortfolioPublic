import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import styles from './projects.module.css'
import Project_card from "./Project_card";
import projectDetails from "./projectDetails";
import Footer from '../footer/footer';

function createCard(projectDetails) {
    return (
        < Project_card
            key={projectDetails.id}
            title={projectDetails.title}
            content={projectDetails.content}
            imgURL={projectDetails.imgURL}
            link={projectDetails.link}
        />
    );
}

function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])
    return (
        <div>
            <div className={styles.projects_container} data-aos='fade-up' >
                {projectDetails.map(createCard)}
            </div >
            <div data-aos='fade-up' >
                <Footer />
            </div>
        </div>
    )
}

export default Projects; 