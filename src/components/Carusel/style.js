import styled from "styled-components";
import { ReactComponent as arrowleft } from "../../assets/icons/arrowleft.svg";

const Container = styled.div`
  position: relative;
  height: 571px;
`;

const Arrow = styled(arrowleft)`
  position: absolute;
  top: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  padding: 18px;
  background: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (!left ? "rotate(0)" : "rotate(-180deg)")};
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  /* color: white; */
  align-items: center;
  justify-content: center;
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

Content.Desc = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

Content.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;

  letter-spacing: -0.02em;

  color: #ffffff;
`;

export { Container, Arrow, Img, Blur, Content };
