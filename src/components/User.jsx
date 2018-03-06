import React from "react";

const User = (props) => {
    return(
      <div>
        <p>Name1: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  };

export default User;