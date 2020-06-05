import React from 'react';
import styles from './Projects.module.css';
import omni from '../../common/omni.png'
import shop from '../../common/shop.png'
import toDo from '../../common/toDo.PNG'
import counter from '../../common/counter.PNG'
import Button from "../button/button";
import Project from "./Project";

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
                    <Project style={toDoListImg} title='To do List'
                             description='React makes it painless to create interactive UIs.'/>
                    <Project style={omniImg} title='Omnofood'
                             description='Declarative views make your code more predictable and easier to debug.'/>
                    <Project style={shopImg} title='Online-shop'
                             description='Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.'/>
                    <Project style={calculatorImg} title='Counter'
                             description='React allows you to interface with other libraries and frameworks'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
