import React from "react";
import Button from "../component/button";
import HomeData from '../data/homedata'
import { Link } from 'react-router-dom';

import styles from '../component/style.module.css'
import { getClasses } from "../component/getClasses";
 
const Home = ()=>{
   const Btn = (variant)=>{
    const BtnTypes = {
        red: 'red',
        blue: 'blue',
        black: 'black'
    }
    return(
        
        <button 
        className = {getClasses(
           [styles.button, styles[`button-${BtnTypes[variant]}`]]
        )}>more
        </button>
    );
   }
    const HomeContent = HomeData.map((utga) =>{
        if (utga.id === 1){
            return(
            
                <div className="w-full flex-row gap-[10px] text-[3rem] font-bold">
                    <h1 className="text-[1em] mb-[50px]">{utga.title}</h1>
                    <img src={utga.img} alt="/" 
                        className="w-full h-[400px] mb-[20px]"/>
                    <p className="text-[0.3em] text-justify">{utga.description}</p>
                    <Link to="/title2"> <Button variant={utga.btn}/></Link>
                </div>
        );
        }else{
            return;
        }
        
    })
    const HomeContent1 = HomeData.map((utga) =>{
        Btn();
        if (utga.id === 2){
            return(
            
                <div className="w-full flex-row gap-[10px] text-[3rem] font-bold">
                    <h1 className="text-[1em] mb-[50px]">{utga.title}</h1>
                    <img src={utga.img} alt="/" 
                        className="w-full h-[400px] mb-[20px]"/>
                    <p className="text-[0.3em] text-justify mb-[10px]">{utga.description}</p>
                    <p className="text-[0.3em] text-justify mb-[10px]">{utga.description}</p>
                    <Link to="/title2"> <Button variant={utga.btn}/></Link>
                </div>
        );
        }else{
            return;
        }
        
    })
    const HomeContent2 = HomeData.map((utga) =>{
        if (utga.id === 3){
            return(
            
                <div className="w-full flex-row gap-[10px] text-[3rem] font-bold">
                    <h1 className="text-[1em] mb-[50px]">{utga.title}</h1>
                    <img src={utga.img} alt="/" 
                        className="w-full h-[400px] mb-[20px]"/>
                    <p className="text-[0.3em] text-justify mb-[10px]">{utga.description}</p>
                    <p className="text-[0.3em] text-justify mb-[10px]">{utga.description}</p>
                    <Link to="/title2"> <Button variant={utga.btn}/></Link>
                    
                </div>
        );
        }else{
            return;
        }
        
    })
    return(
        <div className="w-full h-screen grid grid-cols-3 gap-[50px] px-[100px] pt-[50px] text-[1.5rem]">
            <div className="w-full">
                {HomeContent}
            </div>
            <div className="w-full">
                {HomeContent1}

            </div>
            <div className="w-full">
                {HomeContent2}
            </div>
        </div>
        
    );
};

export default Home;