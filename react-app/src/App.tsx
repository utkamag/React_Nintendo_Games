import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import ApiList from "./components/ApiList";
import NintendoList from "./components/Data";

function App() {

    return (
        <div className="App">
            <Header/>
            <ApiList/>
            <NintendoList/>
        </div>
    );
}

export default App