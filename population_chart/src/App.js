import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'

class App extends Component {

    constructor(props){
      super(props)
      this.state = {
        chartData : {}
      }
    }

  componentWillMount(){
    this.getData()
  }

  getData(){

    console.log("getDataCalled")
    // Ajax Call Happens here from External API's
    this.setState({
      chartData: {
        labels: ["Toronto", "Montreal", "Vancouver" , "Calgary"],
                
        datasets: [{
            label: "Population",
            data : [
                2800000,
                1700000,
                648000,
                1270000
            ],
            backgroundColor: [
                'green',
                'red',
                'blue',
                'yellow'
            ],
            borderWidth : 4,
            borderColor : 'white',
            hoverBorderWidth : 3,
            hoverBorderColor : "black"
        }]
      }
    })
  }

  render() {




    return (
      <div className="App">
     <img src={logo} className="App-logo" alt="logo" />
     <Chart chartData={this.state.chartData}/>
     <img src={logo} className="App-logo" alt="logo" />

     <Chart chartData={this.state.chartData}/>

      </div>
    );
  }
}

export default App;
