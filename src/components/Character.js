// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  border: 4px solid grey;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 255, 0.2);
  border-radius: 40%;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 2%;
  padding: 3px;

  button {
    border-radius: 20%;
    margin-left: 20%;
    margin-right: 20%;
    padding: 3%;
  }
`;

const Character = (props) => {
  return (
    <StyledCharacter>
      <h3>{props.user.name}</h3>
      <p>{props.user.birth_year}</p>
      <button>
        Where there would be more info if I could figure out how to get it to
        open.
      </button>
    </StyledCharacter>
  );
};

export default Character;
