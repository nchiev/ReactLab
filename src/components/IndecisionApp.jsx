import React from "react";

import AddOption from "./AddOption.jsx";
import Header from "./Header.jsx";
import Action from "./Action.jsx";
import Options from "./Options.jsx";
import User from "./User.jsx";

export default class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: []
      };

      this.handleDeleteOptions = this.handleDeleteOptions.bind(this); 
      this.handleActionClick = this.handleActionClick.bind(this); 
      this.handleAddOption = this.handleAddOption.bind(this); 
      this.handleDeleteOption = this.handleDeleteOption.bind(this); 
    }
  
    componentDidMount() {
      try{
        var json = localStorage.getItem("options");
        if(json) {
          const options = JSON.parse(json);
  
          this.setState( () => ({options: options}) )
        }
      } catch (e) {
        //Do NOTHING
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
  
        localStorage.setItem("options", json);
      }
      
    }
  
    componentWillMount() {
      console.log("Unmounted");
    }
  
    handleDeleteOptions(option) {
      this.setState((prevState) => {
        return {
          options: []
        };
      });
    }
  
    handleDeleteOption(optionRemove){
      this.setState((prevState) =>{
        return {
          options: prevState.options.filter((option) => {
            return option !== optionRemove;
          })
        }
      });
    }
  
    handleActionClick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
  
    handleAddOption(option) {
      if(!option){
        return 'Enter something!';
      } else if (this.state.options.indexOf(option)>-1){
        return 'Already Exists'
      }
  
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        } 
      });
    }
    render() {
      const subtitle = "Trust in a computer";
      return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handleActionClick={this.handleActionClick}
        />
        <Options 
          options={this.state.options}
          deleteOptions={this.handleDeleteOptions}
          deleteOption={this.handleDeleteOption}
         />
        <AddOption 
          addOptionHandler={this.handleAddOption}
        />
      </div>
      );
    }
  }