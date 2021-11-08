import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyWork from "./MyWork/MyWork";
import Hair from "./Hire/Hair";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWork/>
            <Hair/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
