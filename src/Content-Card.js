import React  from "react";
import ReactPlayer from 'react-player/youtube'



export default function Content({nasaPicData}){
    const {url, date, title, media_type, explanation} = nasaPicData
    return(
        
        <section>
            <header>
                <h1> NASA PHOTO OF THE DAY</h1>
                <h2> {date} </h2>
                
            </header>
             { media_type === 'video'?  < ReactPlayer  url={url} /> : < img src = {url} alt = {title}/>}
             <div>
             <h2> {title} </h2>
             <p> {explanation} </p>
             </div>
             <footer>
                 Project By Chance Swartz!
                 Be on the lookout for more of his work!
             </footer>
        </section>
    )
} 
// something? if true : if false