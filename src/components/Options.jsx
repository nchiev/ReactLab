import React from "react";

import Option from "./Option.jsx";

export default class Options extends React.Component {
    render() {
      return (
        <div>
        {this.props.options.length === 0 && <p>Please Add an option</p>}
          <ol>
            {this.props.options.map(
              (option) => 
                <Option 
                  key={option} 
                  optionText={option} 
                  handleDeleteOption={this.props.deleteOption}/>
                )}
          </ol>
          <input type="button" onClick={this.props.deleteOptions} value="Remove All"/>
        </div>
      );
    }
  }