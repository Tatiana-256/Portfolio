import React from 'react';
import styles from './Main.module.css';
import portfoliophoto from '../../common/portfoliophoto.jpg'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <span>Hello, I`m Tania</span>
                    <h1>Front-end developer</h1>
                    <span>Welcome to my portfolio page</span>
                </div>
                <div className={styles.photo}>
                    <img src={portfoliophoto} alt="portfoliophoto"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
