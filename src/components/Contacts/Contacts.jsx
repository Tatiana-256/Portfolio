import React, {useState} from 'react';
import styles from './Contacts.module.css';
import Button from "../button/button";
import {Fade} from "react-reveal";
import * as axios from "axios";
import {connect} from "react-redux";
import {actions} from "../../redux-store/actions";

function Contacts(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    let submitMyForm = (e) => {
        e.preventDefault()
        axios.post('https://smtp-nodejs-portfolio-server.herokuapp.com/sendMessage', {
            name: name,
            email: email,
            message: message
        }).then((response) => {
            debugger
            if (response.data) {
                props.sentMessage()
            } else {
                alert("Message failed to send.")
            }
        })
    }


    let setValueName = (event) => {
        setName(event.currentTarget.value)
    }

    let onEmailChange = (event) => {
        setEmail(event.currentTarget.value)
    }

    let onMessageChange = (event) => {
        setMessage(event.currentTarget.value)
    }


    return (
        <div className={styles.contacts} id='Contacts'>
            <div className={styles.mainBox}>
                <Fade bottom>
                    {props.messageAfterFillingForm ?
                        <div className={styles.answer}>
                            <div>Thanks for message!</div>
                            <div>I will contact you as soon as possible</div>
                        </div>
                        :
                        <form className={styles.formInput} onSubmit={submitMyForm}>
                            <div className={styles.cont}>Contact me</div>

                            <div className={styles.contact}>
                                <input className={styles.forHover} type="text" placeholder="Name"
                                       value={name}
                                       onChange={setValueName}/>
                                <input className={styles.forHover} type="email" placeholder="E-mail"
                                       value={email}
                                       onChange={onEmailChange}/>
                                <textarea className={styles.forHover} placeholder="Your message"
                                          value={message}
                                          onChange={onMessageChange}/>
                            </div>
                            <div className={styles.btn}><Button name={'Sent'}/></div>
                        </form>
                    }
                </Fade>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        messageAfterFillingForm: state.contactForm.messageAfterFillingForm
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sentMessage: () => {
            dispatch(actions.messageAfterFillingForm());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
