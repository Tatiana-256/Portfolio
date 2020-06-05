import React, {CSSProperties} from 'react';
import styles from "./project.module.css";

type PropsType = {
    style: CSSProperties,
    title: string,
    description: string

}

const Project = (props: PropsType) => {
    return <div className={styles.project}>
        <div className={styles.projectImg} style={props.style}>
            <a className={styles.btnShow} href=''>Show</a>
        </div>
        <span className={styles.projectTitle}>{props.title}</span>
        <div className={styles.line}/>
        <span className={styles.description}>{props.description}</span>

    </div>
}

export default Project