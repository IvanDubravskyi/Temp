import React from 'react';
import Info from "./components/info"
import Form from "./components/form"
import './App.css';

class App extends React.Component {
  state = {
    farengatesValue: ''
  };
  
  gettingTemperature = async (event) => {
    event.persist();
    event.preventDefault();
    const value = event.target.elements.temperature.value; 
    this.setState({
      farengatesValue: value * 1.8 + 32
    })
  }
 
  render() {
    return (
      <div>
        <Info content = {'Цельсій в фаренгейт'}/>
        <Form tempMethod={this.gettingTemperature}  />
        <Info content = {'Результат: ' + this.state.farengatesValue}/>
      </div>
    );
  }
}

export default App;

