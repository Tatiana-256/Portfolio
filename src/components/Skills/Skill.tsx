import styles from "./Skills.module.css";
import React, {CSSProperties} from "react";

type PropsType = {
    style: string,
    alt: string
    title: string

}

const Skill = (props: PropsType) => {
    return <div className={styles.item}>
        <div><img src={props.style} alt={props.alt}/></div>
        <span>{props.title}</span>
    </div>
}


export default Skill