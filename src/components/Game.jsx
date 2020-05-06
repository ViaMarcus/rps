import React, { Component } from 'react';
import { GenerateThrow, GetWinner, WinMessage, GeneratePredict } from '../modules/computer.js'
import Controller from "./Controller"

class Game extends Component {
    state = {
        playerThrow: "",
        computerThrow: "",
        stats: [0,0,0],
        mode: "easy",
        history: "",
        version: 3,
        winner: ""
    }
    
    onClickHandler = choice => {
        let computerThrow;
        if (this.state.mode === "easy") {
            computerThrow = GenerateThrow(this.state.version)
        } else {
            computerThrow = GeneratePredict(this.state.history, this.state.version)
        }
        let history = choice[1] + this.state.history.substring(0,50) //limit length due to regex search performance
        let winner = GetWinner(choice, computerThrow, this.state.version)
        let stats = this.state.stats;
        stats[winner]+=1;
        this.setState(  {playerThrow: choice, computerThrow: computerThrow, stats, history, winner} );
    }

    onModeChange = e => {
        this.setState( {[e.target.name]: e.target.value} )
    }

    render() {
        return (
            <>
                <div id="result">
                    Player chose {this.state.playerThrow}. <br />
                    Computer chose {this.state.computerThrow}. <br />
                    Result: {WinMessage(this.state.winner)}. <br />
                    Stats: Win: {this.state.stats[1]}, Draw: {this.state.stats[0]}, Loss: {this.state.stats[2]}.
                </div>
                <div id="mode">
                <input 
                    defaultChecked="easy"
                    type="radio"
                    id="easy"
                    name="mode"
                    value="easy"
                    onChange={this.onModeChange}
                />
                <label id="radio" htmlFor="easy">Easy</label>
                <input 
                    type="radio"
                    id="hard"
                    name="mode"
                    value="hard"
                    onChange={this.onModeChange}
                />
                <label id="radio" htmlFor="hard">Hard</label>
                </div>

                <div id="version">
                <input 
                    defaultChecked="three"
                    type="radio"
                    id="3"
                    name="version"
                    value="3"
                    onChange={this.onModeChange}
                />
                <label id="radio" htmlFor="three">RPS</label>
                <input 
                    type="radio"
                    id="5"
                    name="version"
                    value="5"
                    onChange={this.onModeChange}
                />
                <label id="radio" htmlFor="five">RPSLS</label>
                </div>

                {/* <div id="player1">
                    <button id="rock" onClick={ () => this.onClickHandler("Rock") }>Rock</button>
                    <button id="paper" onClick={ () => this.onClickHandler("Paper") }>Paper</button>
                    <button id="scissors" onClick={ () => this.onClickHandler("Scissors") }>Scissors</button>
                </div> */}
                <Controller
                    version={this.state.version}
                    onClickHandler={this.onClickHandler}
                />
            </>
        )
    }
}

export default Game;
