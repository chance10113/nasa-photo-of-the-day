import React  from "react";
import ReactPlayer from 'react-player/youtube'



export default function Content({nasaPicData}){
    const {url, date, title, media_type, explanation} = nasaPicData
    return(
        
        <section>
            
             { media_type === 'video'?  < ReactPlayer  url={url} /> : < img src = {url} alt = {title}/>}
        </section>
    )
} 
// something? if true : if false