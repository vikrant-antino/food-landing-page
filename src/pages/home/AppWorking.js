import React from 'react';
import styled from 'styled-components';

const AppWorking = () => {
    return (
        <div>
            <Heading>How the App Works</Heading>
            <RectContainer>
            <Rectangle>
                <Pic src="/assets/images/Rectangle1.png" alt="phone-image"></Pic>
                <Content>
                    <P1>Create an Account</P1>
                    <br />
                    <P2>Create/login to an existing account to get started</P2>
                    <br />
                    <P3>An account is created with your email and a desired password</P3>
                </Content>
            </Rectangle>
            <Rectangle2>
                <Content2>
                    <P1>Explore varieties</P1>
                    <br />
                    <P2>Shop for your favorites meal as e dey hot.</P2>
                    <br />
                    <P3>Shop for your favorite meals or drinks and enjoy while doing it.</P3>
                </Content2>
                <Pic2 src="/assets/images/Rectangle2.png" alt="phone-image"></Pic2>
            </Rectangle2>
             <Rectangle3>
                <Pic src="/assets/images/Rectangle3.png" alt="phone-image"></Pic>
                <Content3>
                    <P1>Checkout</P1>
                    <br />
                    <P2>When you done check out and get it delivered.</P2>
                    <br />
                    <P3>When you done check out and get it delivered with ease.</P3>
                </Content3>
            </Rectangle3>
            </RectContainer>
        </div>
        
    )
}

const RectContainer = styled.div`
    @media (min-width: 768px){
        padding-left: 100px;
    }
`;

const Pic = styled.img`

    width: 100vw;
    object-fit: cover;

    @media (max-width: 414px){
        padding-left: 40px;
        margin-top: -150px;
    }

`;

const Pic2 = styled.img`

    width: 100vw;
    object-fit: cover;

     @media (min-width: 768px){
        padding-left: 100px;
        margin-top: -120px;
    }

    @media (max-width: 414px){
        padding-left: 40px;
        margin-top: -150px;
    }

`;

const Content= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 414px){
        text-align: center;
        /* margin-left: 200px; */
        border-top: 1px solid grey;
        padding: 50px 30px;
        /* margin-top: -100px; */
    }

    @media (min-width: 768px){
        padding-right: 50px;
        margin-top: 80px;
        margin-bottom: 50px;
    }

    @media (min-width: 1024px){
        padding-top: 122px;
        padding-right: 154px;
    }

`;

const Content2= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 414px){
        text-align: center;
        /* margin-left: 200px; */
        /* border-top: 1px solid grey; */
        padding: 50px 30px;
        /* margin-top: -100px; */
    }

     @media (min-width: 1024px){
        padding-right: 50px;
        /* margin-top: 80px; */
        margin-bottom: 50px;
        padding-left: 200px;
        margin-left: 100px;
    }

    @media (min-width: 768px){
        padding-right: 50px;
        /* margin-top: 80px; */
        margin-bottom: 50px;
        padding-left: 200px;
        margin-left: 90px;
    }

    @media (min-width: 1024px){
        padding-top: 122px;
        padding-right: 154px;
        padding-left: 100px;
    }

`;

const Content3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 414px){
        text-align: center;
        /* margin-left: 200px; */
        /* border-top: 1px solid grey; */
        padding: 50px 30px;
        /* margin-top: -100px; */
    }

    @media (min-width: 768px){
        padding-right: 50px;
        margin-top: 80px;
        margin-bottom: 50px;
    }

    @media (min-width: 1024px){
        padding-top: 122px;
        padding-right: 154px;
        padding-left: 100px;
    }

`;

const Heading = styled.h1`

    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
    font-size: 44px;
    line-height: 36px;
    letter-spacing: 0.1px;
    color: #000000;
    opacity: 0.8;
    text-align: center;
   

    margin-top: 616px;

    @media (min-width: 768px){
        /* flex-direction: column; */
        margin-top: 1000px;
        /* display: block; */
    }

    @media (max-width: 414px){
        margin-bottom: -70px;
    }
    /* margin-left: 100px; */

`;

const Rectangle = styled.div`

    display: flex;  
    justify-content: space-around;
    /* flex-direction: column;
    align-items: center; */

    background: #FFFFFF;

    @media (max-width: 414px){
        flex-direction: column-reverse;
        margin-top: 144px;
        /* display: block; */
    }

`;

const Rectangle2 = styled.div`

    display: flex;  
    justify-content: space-around;
    /* flex-direction: column;
    align-items: center; */

    background: #FFFFFF;

    @media (min-width: 1024px){
        /* flex-direction: column; */
        margin-top: -80px;
        /* display: block; */
    }

    @media (max-width: 414px){
        flex-direction: column;
        margin-top: -120px;
        /* display: block; */
    }

`;

const Rectangle3 = styled.div`

    display: flex;  
    justify-content: space-around;
    /* flex-direction: column;
    align-items: center; */

    background: #FFFFFF;

    @media (min-width: 1024px){
        /* flex-direction: column; */
        margin-top: -80px;
        /* display: block; */
    }

    @media (max-width: 414px){
        flex-direction: column-reverse;
        margin-top: -120px;
        /* display: block; */
    }

`;

const P1 = styled.h3`

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    letter-spacing: 0.1px;
    color: #FA4A0C;
    
    @media (min-width: 768px){
        margin-bottom: -40px;
    }

    @media (max-width: 414px){
        text-align: center;
        padding-left: 110px;
        padding-right: 92px;
        padding-top: -154px;
        padding-bottom: 20px;
    }

    :hover{
        text-decoration: underline;
    }

`;

const P2 = styled.h2`


    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 57px;
    /* or 142% */

    letter-spacing: 0.2px;

    /* text */

    color: #252B42;

    @media (min-width: 768px){
        margin-bottom: -40px;
    }

    @media (max-width: 414px){
        text-align: center;
        margin-top: -40px;
        padding-bottom: 20px;
    }

    @media (min-width: 1024px){
        padding-top: 17px;
        padding-bottom: 17px;
    }

    :hover{
        text-decoration: underline;
    }

`;

const P3 = styled.h4`

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.2px;
    color: #737373;

    @media (max-width: 414px){
        text-align: center;
        margin-top: -40px;
    }

    :hover{
        text-decoration: underline;
    }
`;

export default AppWorking;