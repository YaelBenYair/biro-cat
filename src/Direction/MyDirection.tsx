import React from "react";
import {IChilden} from "../Interface/Interface";


const MyDirection = ({children}: IChilden) =>{
    return(
        <div dir={'rtl'} style={{
            backgroundImage: `url('https://final-yael.s3.amazonaws.com/biroCatBackgroundBig.png')`,
            backgroundSize: 'cover',
            height: '100vh',
            margin: 'auto',
            backgroundRepeat: 'no-repeat',
        }}>
            {children}
        </div>
    )
}

export default MyDirection






