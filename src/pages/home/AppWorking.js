import React from 'react';
import styled from 'styled-components';

const AppWorking = () => {
    return (
        <div>
            <Heading>How the App Works</Heading>
            <Rectangle>
                <img src="/assets/images/Rectangle.png" alt="phone-image" />
                <div>
                    <P1>Create an Account</P1>
                    <br />
                    <P2>Create/login to an existing account to get started</P2>
                    <br />
                    <P3>An account is created with your email and a desired password</P3>
                </div>
            </Rectangle>
        </div>
        
    )
}

const Heading = styled.h1`
    position: relative;
    width: 500px;
    height: 36px;
    /* left: 400px; */
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

`;

const Rectangle = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 1546px;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5%;
    padding-right: 10%;

    @media (max-width: 768px){
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

    color: var(--text-color);


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;

    img{
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

    :hover{
        text-decoration: underline;
    }
`;

export default AppWorking;