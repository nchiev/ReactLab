class IndecisionApp extends React.Component {
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

class Options extends React.Component {
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

class AddOption extends React.Component {
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

const User = (props) => {
  return(
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

const Action = (props) => {
  return(
    <div>
      <button 
        disabled={!props.hasOptions} 
        onClick={props.handleActionClick}
      >What Should I do?
      </button>
    </div>
  )
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: "Indecision"
}

const Option = (props) => {
  return (
    <div>
      <li>{props.optionText}</li>
      <button onClick={
        (e) => 
          {
            props.handleDeleteOption(props.optionText);
          }}
      >Delete</button>
    </div>
  );
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
