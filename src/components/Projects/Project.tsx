import React, {CSSProperties} from 'react';
import styles from "./project.module.css";

type PropsType = {
    style: CSSProperties,
    title: string,
    description: string,
    url: string

}

const Project = (props: PropsType) => {
    return <a className={styles.project} href={props.url}>
        <div className={styles.projectImg} style={props.style}>
            {/*<a className={styles.btnShow} >Show</a>*/}
        </div>
        <span className={styles.projectTitle}>{props.title}</span>
        <div className={styles.line}/>
        <span className={styles.description}>{props.description}</span>

    </a>
}

export default Project