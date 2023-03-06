import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://i.ibb.co/QMmqHzc/325956471-941010666915420-2835969495163236368-n-removebg-preview.png" alt="skimg" border="0"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Saksham Kaushik </strong>
             I did my schooling at S.D. Public School,
            then I qualified JEE mains and JEE advanced in 2020,
            and now I am perusing my third year of B Tech from <em>NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY</em> (formerly NSIT).
            I am always ready to take up the challenges and strive for excellence. My short-term goal is to achieve excellence in the skills I master in some good organization
            and climb on the ladder of success. My long-term goal is to be a renowned software engineer
            and contribute in making this world a better place.
          </div>
          <div className="AboutBio tagline2">
            I am familiar with the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
