import React from "react";
//Styling and Animation
import styled from 'styled-components';

const Banner = () => {
    return(
        <div className="banner">
           <BannerImage src="/assets/images/banner_image.png"></BannerImage>
           <App>Food app</App>
           <Title>Why stay hungry when 
               you can order form Bella Onojie
           </Title>
           <Description>Download the bella onoje’s food app now on</Description>
           <ButtonsWrapper>
           <Button>Playstore</Button>
           <ColoredButton>Appstore</ColoredButton>
           </ButtonsWrapper>
           <PhoneImage1 src="/assets/images/Group 53.png"></PhoneImage1>
        </div>
    );
};

const ButtonsWrapper = styled.div`
position: absolute;
left: 35%;
right: 25%;
top: 50%;
bottom: 50%;
display: block;
justify-items: center;
align-items: center;
position: absolute;

@media (max-width: 414px){
    left: 20%;
    right: 25%;
    top: 40%;
    bottom: 50%;
    display: block;
    flex-direction: column;
    align-items: flex-start;
}
`;


const Button = styled.button`
background-color: var(--primary-color);
//  padding: 25px;
border: none;
color: white;
padding: 16px 58.5px;
text-align: center;
text-decoration: none;
display: in-block;
font-size: 24px;
border-radius: 30px;
box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.2);

@media (max-width: 414px){
 background-color: var(--primary-color);
//  padding: 25px;
border: none;
color: white;
padding: 16px 58.5px;
text-align: center;
text-decoration: none;
display: in-block;
font-size: 24px;
border-radius: 30px;
box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.2);
}
`;

const ColoredButton = styled.button`
color: white;
padding: 16px 58.5px;
text-align: center;
text-decoration: none;
display: in-block;
font-size: 24px;
border-radius: 30px;
background-color: white;
color: var(--primary-color);
border: 2px solid var(--primary-color); /* Green */
`

const App = styled.h3`
position: absolute;
left: 44.08%;
right: 44.08%;
top: 5%;
bottom: 88.96%;


/* H3 */

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 36px;
/* identical to box height, or 150% */

text-align: center;
letter-spacing: 0.1px;

color: #F7F7F7;

@media (max-width: 415px){
position: static;
left: 40.27%;
right: 40.27%;
top: 0%;
bottom: 91.49%;

/* H5 */

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

text-align: center;
letter-spacing: 0.1px;

/* second text */

color: #737373;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 7px 0px;
}
`;

const Description = styled.h2`
position: absolute;
left: 12.23%;
right: 12.09%;
top: 35%;
bottom: 50%;
padding-left: 5px;

/* H4 */

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 38px;
/* identical to box height, or 158% */

text-align: center;
letter-spacing: 0.2px;

color: #F7F7F7;

@media (max-width:415px){
position: static;
left: 2.76%;
right: 2.76%;
top: 10.42%;
bottom: 10.42%;

/* H4 */

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 30px;
/* or 158% */

text-align: center;
letter-spacing: 0.2px;

/* second text */

color: #737373;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
}

color: #F7F7F7;
`;

const Title = styled.h1`
position: absolute;
left: 22%;
right: 22%;
top: 10%;
bottom: 5.56%;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 58px;
line-height: 80px;
/* or 138% */

text-align: center;
letter-spacing: 0.2px;

color: #FFFFFF;

@media (max-width:415px){
    position: static;
    padding-bottom: 15px;
    left: 2.43%;
    right: 2.43%;
    top: 6.76%;
    bottom: 6.76%;
    // padding-left: 11.5px;
    // padding-rigth: 11.5px;
    
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    /* or 118% */
    
    text-align: center;
    letter-spacing: 0.2px;
    
    /* text */
    
    color: #252B42;
    
    
    /* Inside auto layout */
    
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
}
`;

const PhoneImage1 = styled.img`
// position: absolute;
padding-top: 20px;
display: block;
height: 700px;
width: 400px;
left: 770px;
top: 400px;

@media (max-width: 415px){
padding-top: 40px;
height: 650px;
width: 350px;
left: 430px;
top: 695px;
}
`;


const BannerImage = styled.img`
// padding-top: 155px;
// position: absolute;
width: 1540px;
height: 619px;
left: 0px;
top: -1px;

@media (max-width: 415px){
    display: none;
}

// background: linear-gradient(0deg, rgba(23, 16, 16, 0.6), rgba(23, 16, 16, 0.6)), url(.jpg);
`;


export default Banner;