import React from 'react';
import styled from 'styled-components';

const AppWorking = () => {
    return (
        <div>
            <Heading>How the App Works</Heading>
            <Rectangle>
                <Pic src="/assets/images/Rectangle.png" alt="phone-image"></Pic>
                <Content>
                    <P1>Create an Account</P1>
                    <br />
                    <P2>Create/login to an existing account to get started</P2>
                    <br />
                    <P3>An account is created with your email and a desired password</P3>
                </Content>
            </Rectangle>
        </div>
        
    )
}

const Pic = styled.img`
    position: absolute;
    /* width: 802px; */
    height: 1025px;
    left: 105px;
    top: 0px;

    /* background: url(.png); */
    filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.15));

    @media (max-width: 375px){
        position: absolute;
        width: 1050px;
        height: 1581px;
        left: 300px;
        top: 540px;

        filter: drop-shadow(50px 30px 150px rgba(46, 4, 4, 0.15));
    }

`;

const Content= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 568px;
    height: 280px;
    left: 900px;
    top: 300px;

    @media (max-width: 375px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;

        position: absolute;
        width: 357px;
        height: 516px;
        left: 570px;
        top: 140px;
    }
`;

const Heading = styled.h1`
    position: absolute;
    width: 500px;
    height: 36px;
    left: 540px;
    top: 1451px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 600;
    font-size: 44px;
    line-height: 36px;
    letter-spacing: 0.1px;
    color: #000000;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: auto;

    @media (max-width: 768px){
        left: 520px;
    }

`;

const Rectangle = styled.div`
    position: absolute;
    width: 1440px;
    height: 806.99px;
    left: 0px;
    top: 1546px;

    background: #FFFFFF;

    @media (max-width: 375px){
        display: block;
    }

`;

const P1 = styled.h3`
    position: static;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    /* H3 */

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    letter-spacing: 0.1px;
    color: #FA4A0C;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    position: static;
    width: 232px;
    height: 36px;
    left: 0px;
    top: 0px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 7px 0px;

    @media (max-width: 375px){
        text-align: center;
    }

    :hover{
        text-decoration: underline;
    }

`;

const P2 = styled.h2`

    position: static;
    left: 0%;
    right: 0%;
    top: 7.46%;
    bottom: 7.46%;

    /* H2 */

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 57px;
    /* or 142% */

    letter-spacing: 0.2px;

    /* text */

    color: #252B42;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0px;

    position: static;
    width: 561px;
    height: 134px;
    left: 0px;
    top: 43px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 7px 0px;

    /* padding-bottom: 3%; */

    @media (max-width: 375px){
        text-align: center;
    }

    :hover{
        text-decoration: underline;
    }

`;

const P3 = styled.h4`

    position: static;
    left: 0%;
    right: 0%;
    top: 10.42%;
    bottom: 10.42%;

    /* H4 */

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    /* or 158% */

    letter-spacing: 0.2px;

    /* second text */

    color: #737373;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0px;

    position: static;
    width: 467px;
    height: 96px;
    left: 0px;
    top: 184px;


    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 7px 0px;

    /* padding-bottom: 10%; */

    @media (max-width: 375px){
        text-align: center;
    }

    :hover{
        text-decoration: underline;
    }
`;

export default AppWorking;