import React , {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props){
        super(props)
        this.state = {
            chartData : this.props.chartData
        }
    }

    render(){          
        return(<div>
            <Bar
                data={this.state.chartData}
                width={100}
                height={50}
                options={{

                        title: {
                            display:true,
                            text: "Largest Cities In Canada",
                            fontSize : 30
                        },
                        legend : {
                            labels:{
                                fontColor: "green",
                            }                            
                        },
                        layout  : {
                            padding:{
                                left:50,
                                top:100,
                                right: 0,
                                bottom: 0
                            }
                        },
                        tooltips:{
                                enabled: true
                            }
	}}
/>


        </div>
        )
    }
}

export default Chart;