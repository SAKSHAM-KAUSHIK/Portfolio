import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import Typewriter from 'typewriter-effect';

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Saksham Kaushik</h1>
            <h5><Typewriter 
        onInit={(typewriter) => {
            typewriter
              .typeString("MERN Stack Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Tech Enthusiast")
              .pauseFor(1000)
              .start();
              }}
              options={{
    autoStart: true,
    loop: true,
  }}
      /></h5>
            <p>
              I love programming beacuse it made the impossible possible. <br></br>You can have a null object and a constant variable.
            </p>
          </HeroLeft>
          <HeroRight>
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
