class Counter extends React.Component {
  constructor(options){
    super(options);

    this.handleAdd = this.handleAdd.bind(this); 
    this.handleMinus = this.handleMinus.bind(this); 
    this.handleReset = this.handleReset.bind(this); 

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    try{
      var json = localStorage.getItem("count");
      if(json) {
        const count = JSON.parse(json);

        this.setState( () => ({count: count}) )
      }
    } catch (e) {
      //Do NOTHING
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);

      localStorage.setItem("count", json);
    }
    
  }

  handleAdd(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinus(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset(){
    this.setState((prevState) => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"))
