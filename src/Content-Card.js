import React  from "react";
import ReactPlayer from 'react-player/youtube'
import styled from "styled-components"


export default function Content({nasaPicData}){
    const {url, date, title, media_type, explanation} = nasaPicData
    return(
        
        <StyledSection>
            <StyledHeader>
                <h1> NASA PHOTO OF THE DAY</h1>
                <h2> {date} </h2>
                
            </StyledHeader>
             { media_type === 'video'?  < ReactPlayer  url={url} /> : < img src = {url} alt = {title}/>}
             <div>
             <h2> {title} </h2>
             <p> {explanation} </p>
             </div>
             <footer>
             <nav>   
                     <a href='https://apod.nasa.gov/apod/astropix.html'>  Go to the Source! </a>
                 </nav>
                <h4> Project By Chance Swartz!
                 Be on the lookout for more of his work!</h4> 
                 
             </footer>
        </StyledSection>
    )
} 


const StyledSection = styled.section `
background-image: url('/public/logo192.jpg');
background-repeat: no-repeat;
background-color: #111111 ;
`

const StyledHeader = styled.header`
color: ${(pr) => (pr.theme.white) };
background: ${(pr) => (pr.theme.black) };
`
