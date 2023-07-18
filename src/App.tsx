import * as React from 'react';
import {Route, HashRouter, Routes } from "react-router-dom";
import Main from "./components/Main";
import Cats from "./components/Cats";
import './styles/style.scss'

const App = () => {
    console.log(process.env.NODE_ENV)
    return (
        <div className='about-cats'>
            <HashRouter>
                <Routes>
                    <Route path='/cats' Component={Cats} />
                    <Route path='/' Component={Main} />
                </Routes>
            </HashRouter>
        </div>
    );
};

export default App;