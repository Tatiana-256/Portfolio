import React from 'react';
import styles from './Projects.module.css';
import omni from '../../common/omni.png'
import shop from '../../common/shop.png'
import toDo from '../../common/toDo.PNG'
import counter from '../../common/counter.PNG'
import Project from "./Project";
import {Fade} from "react-reveal";

function Projects() {

    const toDoListImg = {
        backgroundImage: `url(${toDo})`
    }
    const omniImg = {
        backgroundImage: `url(${omni})`
    }
    const shopImg = {
        backgroundImage: `url(${shop})`
    }
    const calculatorImg = {
        backgroundImage: `url(${counter})`
    }

    return (
        <div id='Projects' className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.blockTitle}><span>My projects</span></div>
                <div className={styles.line}/>
                <div className={styles.projectsWrapper}>
                    <Fade bottom>
                        <Project style={toDoListImg} title='To do List'
                                 description='Use in project technologists as JavaScript, TypeScript, React, Redux, Axios, API requests'
                                 url='https://tatiana-256.github.io/To-do-list/'/>
                        <Project style={shopImg} title='Online-shop'
                                 url='https://your-online-shop-ua.herokuapp.com/'
                                 description='The site was built by technologies such JavaScript, React, Redux, SCSS, redux-saga, SignUp with google account, use Firebase.'/>
                        <Project style={omniImg} title='Omnifood'
                                 url='https://tatiana-256.github.io/OmniFood/'
                                 description='Built site with JavaScript HTML5 and CSS3 '/>
                        <Project style={calculatorImg} title='Counter'
                                 description='Use JavaScript, TypeScript, React, Redux'/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Projects;
