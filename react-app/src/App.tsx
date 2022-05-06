import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import ApiList from "./components/ApiList";
import NintendoList from "./components/Data";

function App() {


    //Стейт для данных с api

    const [apis, setApis] = useState<any[]>([])

    // Получаем данные с api

    useEffect(() => {
        fetch("https://api.sampleapis.com/switch/games")
            .then(res => res.json())
            .then(data => setApis(data))
    })


    return (
        <div className="App">
            <Header/>
            <ApiList/>
            <NintendoList data={apis}/>
        </div>
    );
}

export default App