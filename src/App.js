import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                    <Route path="/Main" component={Main}/>
                    <Route path="/Skills" component={Skills}/>
                    <Route path="/Projects" component={Projects}/>
                    <Slogan/>
                    <Route path="/Contacts" component={Contacts}/>
                    <Contacts/>
                    <Footer/>
            </header>
        </div>
    );
}

export default App;
