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
        version: "three"
    }
    
    onClickHandler = choice => {
        let computerThrow;
        if (this.state.mode === "easy") {
            computerThrow = GenerateThrow()
        } else {
            computerThrow = GeneratePredict(this.state.history)
        }
        let history = choice[0] + this.state.history.substring(0,50) //limit length due to regex search performance
        let stats = this.state.stats;
        stats[GetWinner(choice, computerThrow)]+=1;
        this.setState(  {playerThrow: choice, computerThrow: computerThrow, stats, history} );
    }

    onModeChange = e => {
        console.log(e)
        this.setState( {[e.target.name]: e.target.value} )
    }

    render() {
        return (
            <>
                <div id="result">
                    Player chose {this.state.playerThrow}. <br />
                    Computer chose {this.state.computerThrow}. <br />
                    Result: {WinMessage(GetWinner(this.state.playerThrow, this.state.computerThrow))}. <br />
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
                    id="three"
                    name="version"
                    value="three"
                    onChange={this.onModeChange}
                />
                <label id="radio" htmlFor="three">RPS</label>
                <input 
                    type="radio"
                    id="five"
                    name="version"
                    value="five"
                    onChange={this.onModeChange}
                />
                <label id="radio" htmlFor="five">RPSLS</label>
                </div>

                <div id="player1">
                    <button id="rock" onClick={ () => this.onClickHandler("Rock") }>Rock</button>
                    <button id="paper" onClick={ () => this.onClickHandler("Paper") }>Paper</button>
                    <button id="scissors" onClick={ () => this.onClickHandler("Scissors") }>Scissors</button>
                </div>
                <Controller
                    version={this.state.version}
                    onClickHandler={this.onClickHandler}
                />
            </>
        )
    }
}

export default Game;
