import React from 'react';
import styles from './Slogan.module.css';
import {Fade} from "react-reveal";

function Slogan() {
    return (
        <Fade>
            <div className={styles.slogan}>
                <h1>"Be a dreamer"</h1>
            </div>
        </Fade>
    );
}

export default Slogan;
