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
           <PhoneImage1 src="/assets/images/Phone1.png"></PhoneImage1>
           <PhoneImage2 src="/assets/images/Phone2.png"></PhoneImage2>
        </div>
    );
};


const App = styled.h3`
    position: absolute;
    left: 44.08%;
    right: 44.08%;
    top: 25%;
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

`;

const Description = styled.h2`
position: absolute;
left: 12.23%;
right: 12.09%;
top: 58%;
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

color: #F7F7F7;
`;

const Title = styled.h1`
    position: absolute;
    left: 22%;
    right: 22%;
    top: 30%;
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
`;

const PhoneImage1 = styled.img`
position: absolute;
width: 470px;
height: 800px;
left: 430px;
top: 500px;

background: url(.png);
/* phone mock up drop shadow */

filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.21));
`;

const PhoneImage2 = styled.img`
position: absolute;
width: 285px;
height: 531px;
left: 709px;
top: 719px;

background: url(.png);
`;

const BannerImage = styled.img`
padding-top: 155px;
position: absolute;
width: 1540px;
height: 619px;
left: 0px;
top: -1px;

background: linear-gradient(0deg, rgba(23, 16, 16, 0.6), rgba(23, 16, 16, 0.6)), url(.jpg);
`;

const simpleButton = styled.button`
position: absolute;
width: 1440px;
height: 619px;
left: 0px;
top: -1px;

background: linear-gradient(0deg, rgba(23, 16, 16, 0.6), rgba(23, 16, 16, 0.6)), url(.jpg);
`



export default Banner;