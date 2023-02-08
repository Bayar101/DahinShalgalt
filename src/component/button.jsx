import React from "react";
import styles from './style.module.css';
import {getClasses} from './getClasses'

const Button = ({variant, text, img})=>{
    const ButtonTypes = {
        red: 'red',
        blue: 'blue',
        black: 'black',

    }
    return(
        
        <button 
        className = {getClasses(
           [styles.button, styles[`button-${ButtonTypes[variant]}`]]
        )}>more
        </button>
    );
};
export default Button;