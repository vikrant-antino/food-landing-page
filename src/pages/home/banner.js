import React from "react";
//Styling and Animation
import styled from 'styled-components';

const Banner = () => {
    return(
        <div className="banner"> 
        <main>
            <ButtonsWrapper>
                <Button primary>Playstore</Button>
                <Button>Appstore</Button>
            </ButtonsWrapper>
            <App>Food app</App>
           <Title>Why stay hungry when 
               you can order form Bella Onojie
           </Title>
           <Description>Download the bella onoje’s food app now on</Description>
           <BannerImage src="/assets/images/banner_image.png"></BannerImage>
           <ImageContainer1>
           <PhoneImage1 src="/assets/images/Phone1.png"></PhoneImage1> 
           </ImageContainer1> 
           {/* <ImageContainer2>
           <PhoneImage2 src="/assets/images/Phone2.png"></PhoneImage2>
           </ImageContainer2> */} 
           </main>
        </div>
    );
};

const ImageContainer1 = styled.div`
display: flex;
// justify-items: center;
align-items: center;
top: 45%;
left: 20%;
position: absolute;
@media (max-width: 768px){
    top: 50%;
    right: 30%    
}
`;
const ImageContainer2 = styled.div`
display: flex;
// justify-items: center;
align-items: center;
top: 40px;
right: 90%;
left: 0%;
position: absolute;

@media (max-width: 768px){
    top: 3%;
    right: 100%    
}
`;

const ButtonsWrapper = styled.div`
display: flex;
// justify-items: center;
align-items: center;
padding-left: 40%;
top: 50%;
position: absolute;
@media (max-width: 768px){
    top: 50%;
    right: 30%
}
`;

const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "var(--primary-color)" : "white"};
color: ${props => props.primary ? "white" : "var(--primary-color)"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #FA4A0C;
border-radius: 30px;
box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.2);

`;

const App = styled.h3`
position: absolute;
left: 44.08%;
right: 44.08%;
top: 5%;

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

@media (max-width: 768px){
    left: 20%;
    right: 20%;
    text-size:auto;
    top: 0px;
    bottom: 88.96%;
}
`;

const Description = styled.h2`
position: absolute;
left: 12.23%;
right: 12.09%;
top: 40%;
bottom: 50%;

/* H4 */

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 38px;
/* identical to box height, or 158% */

text-align: center;
letter-spacing: 0.2px;

@media (max-width: 768px){
    text-size: auto;
    left:2%;
    right: 2%;
    top: 40%;
    bottom: 50%;
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

@media (max-width: 768px){
    text-size: auto;
    left: 5%;
    right: 5%;
    top: 2%;
    bottom: 5%;
    bottom: 30px;
}
`;

const PhoneImage1 = styled.img`
// position: absolute;
width: 786px;
padding-top: 0%;
padding-left: 30%;
right: 0%
top: 0%;
width: 470px;
height: 800px;
left: 430px;
top: 600px;

background: url(.png);
/* phone mock up drop shadow */
filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));
`;

const PhoneImage2 = styled.img`
// position: absolute;
width: 285px;
height: 531px;
left: 550px;
top: 1px;

@media (max-width: 768px){
    display: block;
}
background: url(.png);
`;

const BannerImage = styled.img`
// padding-top: 155px;
// position: absolute;
width: 1540px;
height: 619px;
left: 0px;
top: -1px;

@media (max-width: 768px){
    width: 786px;
    left: 0%;
    right: 0%
    top: 0%;
}
// background: linear-gradient(0deg, rgba(23, 16, 16, 0.6), rgba(23, 16, 16, 0.6)), url(.jpg);
`;


export default Banner;