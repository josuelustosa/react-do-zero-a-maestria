// Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";


// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      {/*Comentário em React não é exibido na DOM*/}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <hr />
      <Challenge />
    </div>
  );
}

export default App;
