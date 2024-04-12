import React, { useEffect, useRef, useState } from "react";
import {
  Background,
  Container,
  Image,
  Name,
  SubTitle,
  Title,
  TitleProjects,
} from "./style";

import { MouseTrail } from "../../components/MouseTrail";
import { TypingEffect } from "../../components/TypingEffect";

export const InitialPage: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const name = "Mafalda André";
  const typingSpeed = 50; // Velocidade de digitação em milissegundos
  const textRef = useRef<string>("");

  const uiUx = require("../../assets/uiUx.jpg");
  const frontEnd = require("../../assets/frontEnd.jpg");

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      textRef.current += name.charAt(index);
      setIndex((prevIndex) => prevIndex + 1);
      if (index === name.length) {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <Container>
      {" "}
      <Background>
        {" "}
        <Title>Olá,</Title>
        <SubTitle>
          Chamo-me{" "}
          <Name>
            <TypingEffect text="MAFALDA ANDRÉ" />
          </Name>
        </SubTitle>
        <SubTitle>
          E sou{" "}
          <Name>
            <TypingEffect text="FRONT END DEVELOPER E UI/UX DESIGNER" />
          </Name>
        </SubTitle>
      </Background>
      <TitleProjects>Projectos</TitleProjects>
      <div>
        <Image src={uiUx} alt="Imagem sobre ui e ux" />
        <Image src={frontEnd} alt="Imagem sobre front end" />
      </div>
      <MouseTrail />
    </Container>
  );
};
