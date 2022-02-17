import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";
const DownloadInfo = () => {
  return (
    <div>
      <DownloadContainer>
        <HeadingDiv>
          <H2>Download the app now.</H2>
          <H4>
            Available on your favorite store. Start your premium experience now.
          </H4>
        </HeadingDiv>
        <Buttondiv>
          <Btn1>Playstore</Btn1>
          <Btn2>App Store</Btn2>
        </Buttondiv>
      </DownloadContainer>
      <Footerdiv>
        <Img src="/assets/images/logoimg.png"></Img>
        <Icondiv>
          <Vector1>
            <i class="fa-brands fa-xl fa-facebook-square"></i>
          </Vector1>
          <Vector2>
            <i class="fa-brands fa-xl fa-twitter"></i>
          </Vector2>{" "}
          <Vector3>
            <i class="fa-brands fa-xl fa-instagram"></i>
          </Vector3>
        </Icondiv>
        <Copyrighttext>Copywright 2020 Bella Onojie.com</Copyrighttext>
      </Footerdiv>
    </div>
  );
};

const DownloadContainer = styled.div`
  background-image: url("/assets/images/backgroundimage.png");
  height: 516px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadingDiv = styled.div`
  padding-top: 80px;
`;

const H2 = styled.h2`
  font-family: Montserrat;
  text-align: center;
  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
`;

const H4 = styled.h4`
  font-weight: 350;
  font-size: 25px;
  color: #ffffff;
  text-align: center;
  margin-top: -10px;
`;

const Buttondiv = styled.div`
  margin-top: 40px;
  justify-content: space-between;
  button:hover {
    background-color: #fa4a0c;
    border: none;
    padding: 14px 23px 14px 23px;
    transition: all 0.3s ease-in-out;
  }

  button:active {
    background-color: #fa4a0c;
    border: none;
    padding: 14px 23px 14px 23px;
    transition: all 0.4s ease-in-out;
  }
`;
const Btn1 = styled.button`
  padding: 14px 30px 14px 30px;
  border-radius: 4px;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  background-color: transparent;
  border: solid 1px #ffffff;
`;

const Btn2 = styled.button`
  padding: 14px 30px 14px 30px;
  border-radius: 4px;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  background-color: transparent;
  border: solid 1px #ffffff;
`;
const Footerdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding:  30px;
`;
const Img = styled.img`
  height: 90px;
  width: 160px;
`;
const Vector1 = styled.i` 
color:
#FA4A0C ;`;
const Vector2 = styled.i` 
color:
#FA4A0C`;
const Vector3 = styled.i` 
color:
#FA4A0C`;
const Icondiv = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-around;
`;
const Copyrighttext = styled.p` 
font-size: 12px; 
font-style:   Roboto; 
color: #5C5C5C; 
font-weight:   700;

`;

export default DownloadInfo;
