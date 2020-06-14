import React, {useState} from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {actions} from "../../redux-store/actions";
import ContactForm from "./Contacts";

function ContactsContainer(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    let submitMyForm = (e) => {
        e.preventDefault()
        props.loaderOn()
        axios.post('https://smtp-nodejs-portfolio-server.herokuapp.com/sendMessage', {
            name: name,
            email: email,
            message: message
        }).then((response) => {
            debugger
            if (response.data) {
                props.sentMessage()
                props.loaderOff()
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


    return <ContactForm
            messageAfterFillingForm={props.messageAfterFillingForm}
            submitMyForm={submitMyForm}
            setValueName={setValueName}
            onEmailChange={onEmailChange}
            onMessageChange={onMessageChange}
            name={name}
            email={email}
            message={message}
            loader={props.formLoader}
        />
}


const mapStateToProps = (state) => {
    return {
        messageAfterFillingForm: state.contactForm.messageAfterFillingForm,
        formLoader: state.contactForm.formLoader
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sentMessage: () => {
            dispatch(actions.messageAfterFillingForm());
        },
        loaderOn: () => {
            dispatch(actions.loaderOn());
        },
        loaderOff: () => {
            dispatch(actions.loaderOff());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
