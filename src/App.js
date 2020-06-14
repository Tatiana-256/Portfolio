import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Slogan from "./components/Slogan/Slogan";
import Contacts from "./components/Contacts/ContactsContainer";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                <Main />
                <Skills/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </header>
        </div>
    );
}

export default App;
