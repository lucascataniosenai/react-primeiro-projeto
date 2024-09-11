import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="kiwi-2.jpg" className="App-logo" alt="logo" />
      </header>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />

    </div>
  );
}

export default App;
