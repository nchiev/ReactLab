console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onSubmitForm = (e) => {
  e.preventDefault();
  //Customcode
  const options = e.target.elements.option.value;

  if(options){
    app.options.push(options);
    e.target.elements.option.value = "";

    renderControl();
  } else {
    alert("Please enter value");
  }
};

const onRemoveOptions = () => {
  if(app.options.length > 0){
    app.options = [];
    renderControl();
  }
};

const onMakeDescision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');
const renderControl = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDescision}>What should I do?</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>
      <form onSubmit={onSubmitForm}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
      <button onClick={onRemoveOptions}>Clear Option</button>
    </div>
  );

ReactDOM.render(template,appRoot);
};

renderControl();
