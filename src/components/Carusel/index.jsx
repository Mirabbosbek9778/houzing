import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";

import img1 from "../../assets/imgs/hous1.png";
import img2 from "../../assets/imgs/hous2.png";

const Carusel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className="subChild">
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Blur />
      <Arrow data-name="left" onClick={onMove} left />
      <Arrow onClick={onMove} data-name="right" />
    </Container>
  );
};

export default Carusel;
