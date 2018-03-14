import React from "react";

import Option from "./Option.jsx";

const Options = (props) => (
  <div>
  {props.options.length === 0 && <p>Please Add an option</p>}
    <ol>
      {props.options.map(
        (option) => 
          <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.deleteOption}/>
          )}
    </ol>
    <input className="button button--link" type="button" onClick={props.deleteOptions} value="Remove All"/>
  </div>
);

export default Options;