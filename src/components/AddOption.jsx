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
          <h3>{this.state.errorMessage && <p>{this.state.errorMessage}</p>}</h3>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
          </form>
  
        </div>
      );
    }
  }