// Write your Character component here
import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`;

const StyledCharacter = styled.div`

  color:white;
  background-color:#59AEF5;
  border: 4px solid grey;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 255, 0.2);
  border-radius: 8%;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 2%;
  padding: 3px;
  transform: scale(2) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;

  }
`;

const Character = (props) => {
  return (
    <StyledCharacter>
      <h3>{props.user.name}</h3>
      <p>Born in: {props.user.birth_year}</p>
    </StyledCharacter>
  );
};

export default Character;
