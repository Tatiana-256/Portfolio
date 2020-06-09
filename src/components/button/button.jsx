import React from 'react';
import styles from './button.module.css'
import * as axios from "axios";

const Button = (props) => {

    return <button className={styles.btn}>{props.name}</button>
}

export default Button