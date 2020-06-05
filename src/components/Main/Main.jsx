import React from 'react';
import styles from './Main.module.css';
import portfoliophoto from '../../common/j.jpg'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <span>Hello, I`m Tania Matviienko</span>
                    <h1 className={styles.stl}>Front-end developer</h1>
                    <span>Welcome to my portfolio page</span>
                </div>
            </div>
        </div>
    );
}

export default Main;