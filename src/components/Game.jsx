import React, { Component } from 'react';
import { GenerateThrow, GetWinner, WinMessage} from '../modules/computer.js'

class Game extends Component {
    state = {
        playerThrow: "",
        computerThrow: "",
        stats: [0,0,0]
    }
    
    onClickHandler = choice => {
        console.log(`Player chose ${choice}`, this)
        let computerThrow = GenerateThrow()
        let stats = this.state.stats;
        stats[GetWinner(choice, computerThrow)]+=1;
        console.log(stats)
        this.setState( state => ( {playerThrow: choice, computerThrow: computerThrow, stats} ))
    }

    render() {
        return (
            <>
                <div id="result">
                    Player chose {this.state.playerThrow}. 
                    Computer chose {this.state.computerThrow}.
                    Result: {WinMessage(GetWinner(this.state.playerThrow, this.state.computerThrow))}.
                    Stats: Win: {this.state.stats[1]}, Draw: {this.state.stats[0]}, Loss: {this.state.stats[2]}.
                </div>
                <div id="player1">
                    <button id="rock" onClick={ () => this.onClickHandler("Rock") }>Rock</button>
                    <button id="paper" onClick={ () => this.onClickHandler("Paper") }>Paper</button>
                    <button id="scissors" onClick={ () => this.onClickHandler("Scissors") }>Scissors</button>
                </div>
            </>
        )
    }
}

export default Game;
