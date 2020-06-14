import React, {ChangeEvent, useState} from 'react';
import styles from './Contacts.module.css';
import Button from "../button/button";
// @ts-ignore
import {Fade} from "react-reveal";
import Loader from '../loader/LoaderComponent';


type PropsType = {
    messageAfterFillingForm: boolean,
    submitMyForm: any,
    setValueName: (event: ChangeEvent<HTMLInputElement>) => void,
    onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onMessageChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    name: string,
    email: string,
    message: string
    loader: boolean
}

const ContactForm = (props: PropsType) => {
    return <div className={styles.contacts} id='Contacts'>
        <div className={styles.mainBox}>
            <Fade bottom>
                {props.messageAfterFillingForm ?
                    <div className={styles.answer}>
                        <div>Thanks for message!</div>
                        <div>I will contact you as soon as possible</div>
                    </div>
                    :
                    <form className={styles.formInput} onSubmit={props.submitMyForm}>
                        <div className={styles.cont}>Contact me</div>

                        <div className={styles.contact}>
                            <input className={styles.forHover} type="text" placeholder="Name"
                                   value={props.name}
                                   onChange={props.setValueName}/>
                            <input className={styles.forHover} type="email" placeholder="E-mail"
                                   value={props.email}
                                   onChange={props.onEmailChange}/>
                            <textarea className={styles.forHover} placeholder="Your message"
                                      value={props.message}
                                      onChange={props.onMessageChange}/>
                        </div>
                        {props.loader ? <Loader/> : <div className={styles.btn}><Button name={'Sent'}/></div>}
                    </form>
                }
            </Fade>
        </div>
    </div>
}

export default ContactForm
