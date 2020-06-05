import React from 'react';
import styles from './Skills.module.css';
import html5 from '../../common/icons/html-5.svg'
import JS from '../../common/icons/javascript.svg'
import css from '../../common/icons/css3.svg'
import git from '../../common/icons/github.svg'
import react from '../../common/icons/react-native.svg'
import redux from '../../common/icons/redux.svg'
import {Fade} from "react-reveal";
import Skill from "./Skill";

function Skills() {
    return (
        <div className={styles.skills} id='Skills'>
            <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.blockTitle}>My skills</div>
                    <div className={styles.line}/>
                    <div className={styles.itemsWrapper}>
                        <Skill style={JS} alt='JS' title='JavaScript'/>
                        <Skill style={html5} alt='HTML' title='HTML'/>
                        <Skill style={css} alt='CSS' title='CSS'/>
                        <Skill style={git} alt='GIT' title='GIT'/>
                        <Skill style={react} alt='React' title='React'/>
                        <Skill style={redux} alt='Redux' title='Redux'/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
