import axios from 'axios';
import React from 'react';

import './App.css';

class App extends React.Component {
  state = { advice:''};
  
  componentDidMount() {
    this.fetchAdvices();
  }

  fetchAdvices = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const {advice} = response.data.slip;
        this.setState({advice});
        console.log(advice);
      })
      .catch((e) => {
        console.log(e);
      })
  }

  render() {
    const {advice} = this.state;
    return (
      <div className='app'>
        <div className='card'>
          <h1>{advice}</h1>
          <button className='button' onClick={this.fetchAdvices}>
             <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div> 
    );
  }
}

export default App;
