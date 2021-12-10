import React from "react";
import Character from "./Character";

const Characters = (props) => {
  return (
    <>
      {props.users.map((user) => (
        <Character user={user} key={user.id} />
      ))}
    </>
  );
};

export default Characters;
