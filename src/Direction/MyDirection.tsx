import React from "react";
import {IChilden} from "../Interface/Interface";
import "./MyDirection.css"


const MyDirection = ({children}: IChilden) =>{
    return(
        <div dir={'rtl'} className="div-direction" 
        // style={{
        //     backgroundImage: `url('https://final-yael.s3.amazonaws.com/biroCatBackgroundBig.png')`,
        //     backgroundSize: 'cover',
        //     height: '100vh',
        //     margin: 'auto',
        //     backgroundRepeat: 'no-repeat',
        // }}
        >
            {children}
        </div>
    )
}

export default MyDirection






