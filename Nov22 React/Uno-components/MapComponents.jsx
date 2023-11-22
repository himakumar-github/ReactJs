import React, { Component } from 'react';
class MapComponents extends Component {
    state = {
        counter: 0,
        cities:["Delhi","HYD","BNG","Mumbai"]
    }
    getBadgeDanger() {
        return "badge bg-danger";
    }
    render() { 
        const pVal = "badge bg-warning";
        return (
            <div>
                <span className={pVal}>Warning</span>
                <span className={ this.getBadgeDanger()}>Danger</span>
                <span className="badge bg-success">Success</span>
                <div>
                    {this.state.cities.map(
                        y=><h1>City Name---{y}</h1> 
                    )}
                </div>
            </div>
            );
    }
}
export default MapComponents;