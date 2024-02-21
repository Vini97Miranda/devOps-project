import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {createRoot} from "react-dom/client";
import App from './App'
const Index = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<App/>}/>
            </Routes>
        </BrowserRouter>

    );
};

const root = createRoot(document.getElementById('root'));
root.render(<Index/>);