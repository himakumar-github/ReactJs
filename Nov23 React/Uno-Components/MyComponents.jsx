import React, { Component } from 'react';
class MyComponents extends Component {
    state = { 
        counter:0
     } 
     incrementButton=()=>{
        this.setState({counter:this.state.counter+1})
     }
     decrementButton=()=>{
        this.setState({counter:this.state.counter-1})
     }
    render() {
        return (
            <div>
                <span className='badge bg-warning m-4'>{this.state.counter}</span>
                <button className='btn btn-primary m-4' onClick={this.incrementButton}>+</button>
                <button className='btn btn-primary m-4' onClick={this.decrementButton}>-</button>
            </div>
        );
    }
}

export default MyComponents;