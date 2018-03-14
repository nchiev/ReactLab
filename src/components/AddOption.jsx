import React from "react";

export default class AddOption extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        errorMessage: undefined
      };
      this.handleAddOption = this.handleAddOption.bind(this);
    }
  
    handleAddOption(e) {
      e.preventDefault();
      const vsl = e.currentTarget.elements.option.value.trim();
      const errorMessage = this.props.addOptionHandler(vsl);
      
      this.setState(() => {
        return {
          errorMessage
        }
      });
  
      if(!errorMessage) {
        e.currentTarget.elements.option.value = "";
      }
    }
    render() {
      return (
        <div>
          {this.state.errorMessage && <p className="add-option-error">{this.state.errorMessage}</p>}
          <form className="add-option" onSubmit={this.handleAddOption}>
            <input className="add-option--input" type="text" name="option"></input>
            <button className="button ">Add Option</button>
          </form>
  
        </div>
      );
    }
  }