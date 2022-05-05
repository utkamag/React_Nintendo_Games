import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import Games from "./components/Games";
import ApiList from "./components/ApiList";

function App() {
    return (
        <div className="App">
            <Header/>
            <Games/>
            <ApiList/>
        </div>
    );
}

export default App