import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    console.log('Did Mount');
    database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    } ) ;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre className="App-intro">
          { JSON.stringify(this.state.data, null, 2) }
        </pre>
        
      </div>
    );
  }
}

export default App;
