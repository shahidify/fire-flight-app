import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('Did Mount');
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    } ) ;
  }
  handleSubmit(event) {
    event.preventDefault();
    database.ref().child('superNewData').set(this.state.newData);
  }
  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData: newData
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App--header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre className="App-data">
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
        <form className="App--form" onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.newData} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
