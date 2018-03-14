import React from "react";

import Option from "./Option.jsx";

const Options = (props) => (
  <div>
  <div className="widget-header">
    <h3 className="widget-header__title">Your Options</h3>
    <input 
      className="button button--link" 
      type="button" 
      onClick={props.deleteOptions} 
      value="Remove All"/>
  </div>
  {props.options.length === 0 && <p className="widget__message">Please Add an option</p>}
  {props.options.map(
    (option, index) => 
      <Option 
        key={option} 
        optionText={option} 
        handleDeleteOption={props.deleteOption}
        index={index}/>
      )}
  </div>
);

export default Options;