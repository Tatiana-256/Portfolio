import React from 'react';
import styles from './Main.module.css';
import portfoliophoto from '../../common/portfoliophoto.jpg'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <span>Hello, I`m Tania</span>
                    <span>Front-end developer</span>
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
