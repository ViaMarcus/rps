import React, { Component } from 'react';

class Controller extends Component {
    state = {
        onClickHandler: this.props.onClickHandler
    };

    pathArray(version) {
        let colors = ['red', 'yellow', 'grey','green','blue'];
        let ids = ['rock', 'paper','scissors','lizard','spock']
        let throws = ['Rock', 'Paper','Scissors','Lizard','Spock']
        let angle = 2*Math.PI/version;
        let rotate = Math.PI/2;
        let out = [];
        for (let i = 0; i < version; i++) {
            let rot = angle*i+rotate
            let adjust = version === 5 ? 0.6 : 1
            out.push(
              <path 
                onClick={() => this.state.onClickHandler(throws[i])} 
                fill={colors[i]} id={ids[i]} 
                key={"path-" + ids[i]} 
                d={`M ${this.getXY(rot)} A 1 1 0 0 1 ${this.getXY(angle*(i+1)+rotate)} L 0 0`} 
              />
            )
            out.push(
              <text
                key={"text-" + ids[i]}
                onClick={() => this.state.onClickHandler(throws[i])} 
                x={Math.cos(rot+adjust)*70-4*throws[i].length} 
                fill="black" 
                y={Math.sin(rot+adjust)*70} 
                transform={`scale(0.01)`}>
                {throws[i]}
              </text>
            )
        }
        return out;
    }

    getXY(angle) {
        return `${Math.cos(angle)} ${Math.sin(angle)}`
    }

    render() {
        return (
            <div>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    height="400px" 
                    width="400px"
                    viewBox="-1,-1 2 2"
                    id="controller"
                >
                    { this.pathArray(parseInt(this.props.version)) }
                </svg>
            </div>
        )
    }
}

export default Controller;