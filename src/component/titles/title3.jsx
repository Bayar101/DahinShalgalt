import React from "react";
import { Link } from 'react-router-dom';
import TitleData from '../../data/homedata';

const Title1 = ()=>{
    const Title1Content = TitleData.map((utga) =>{
        if (utga.id === 3){
            return(
                <div className="w-full flex-row gap-[10px] text-[3rem] text-left">
                    <h1 className="text-[1em] mb-[50px] font-bold">{utga.title}</h1>
                    <img src={utga.img} alt="/" 
                        className="w-full h-[500px] mb-[70px]"/>
                    <p className="text-[0.35em] text-justify mb-[10px]">{utga.description}</p>
                    <p className="text-[0.35em] text-justify mb-[10px]">&emsp;&emsp;{utga.more} &emsp; {utga.more} &emsp; {utga.more}</p>
                    <p className="text-[0.35em] text-justify mb-[10px]">&emsp;&emsp;{utga.description}</p>
                    <p className="text-[0.35em] text-justify mb-[10px]">&emsp;&emsp;{utga.more} &emsp; {utga.more} </p>
                    <p className="text-[0.35em] text-justify mb-[10px]">&emsp;&emsp;{utga.description}</p>




                </div>
        );
        }else{
            return;
        }
        
    })
    return(
        <div className="w-[50%] m-auto h-[180vh] text-center pt-[50px]">
            <div className="p-[10px] w-[200px] m-auto h-[30px] bg-[antiquewhite] flex items-center justify-center rounded-[20px]"> 
                <Link to='/'>Go back to Home</Link>
             </div>
            {Title1Content}
        </div>
    );
};

export default Title1;