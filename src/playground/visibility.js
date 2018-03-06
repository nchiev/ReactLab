class Visibility extends React.Component {
  constructor(r) {
    super(r);
    this.state = {
      visible: false
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }

  render() {
    const title = "Visibility";
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleToggleVisibility}>
         {this.state.visible ? "Hide Details" : "Show Details"}
       </button>
       { this.state.visible && (
         <div>Here are the DEETS!</div>
       )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"))

// const app = {
//   title: 'Visibility App',
//   subtitle: "Visibility Toggle"
// };

// let visibility = false;

// const appRoot = document.getElementById('app');

// const onVisibleClick = () => {
//   visibility = !visibility;

//   renderControl();
// }

// const renderControl = () => {
//   const template = (
//     <div>
//       <h1>{app.subtitle}</h1>
//       <button onClick={onVisibleClick}>
//         {visibility ? "Hide Details" : "Show Details"}
//       </button>
//       { visibility && (
//         <div>Here are the DEETS!</div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template,appRoot);
// };

// renderControl();
