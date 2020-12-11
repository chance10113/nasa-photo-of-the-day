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
             { media_type === 'video'?  < ReactPlayer  url={url} /> : < StyledImg src = {url} alt = {title}/>}
             <StyledDiv>
             <h2> {title} </h2>
             <p> {explanation} </p>
             <img  alt='' ></img>
             </StyledDiv>
             <StyledFooter>
             <nav>   
                     <a href='https://apod.nasa.gov/apod/astropix.html'>  Go to the Source! </a>
                 </nav>
                <h4> Project By Chance Swartz!
                 Be on the lookout for more of his work!</h4> 
                 
             </StyledFooter>
        </StyledSection>
    )
} 


const StyledSection = styled.section `
//background-image: url('https://wallpaperaccess.com/full/296728.png');
background-repeat: no-repeat;
background-color: #222222 ;
color: ${(pr) => (pr.theme.white) };
text-align: center;
`;

const StyledHeader = styled.header`
color: ${(pr) => (pr.theme.white) };
background: ${(pr) => (pr.theme.black) };
`;

const StyledImg = styled.img `
/* display:flex;
align-content: center;
justify-content: center;
align-items: center; */
width: 90%;  
margin: 0% 5% 0 5%
`

const StyledDiv = styled.div `

color: ${(pr) => (pr.theme.white) };
background-color: #222222;
`

const StyledFooter = styled.footer `
    color: ${(pr) => (pr.theme.white) };
background: ${(pr) => (pr.theme.black) };

`
