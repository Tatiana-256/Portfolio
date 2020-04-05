import React from 'react';
import styles from './button.module.css'

const Button = (props) => {
    return <button className={styles.btn}>{props.name}</button>
}

export default Button