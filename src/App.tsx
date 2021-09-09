import React from 'react';
import "./styles.css";
import Image from './react.png';
import Svg from './logo.svg';

export const App = () => {
    return <> <h1>React Typescript Webpack Starter Template</h1> 
        <img src={Image} alt="React Logo" width="300" height="200" />
        <img src={Svg} alt="React Logo" width="300"/>
        </>
}


