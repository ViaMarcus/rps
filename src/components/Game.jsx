import React, { Component } from 'react';
import { GenerateThrow, GetWinner} from '../modules/computer.js'

class Game extends Component {
    state = {
        playerThrow: "",
        computerThrow: ""
    }
    
    onClickHandler = choice => {
        console.log(`Player chose ${choice}`, this)
        let computerThrow = GenerateThrow()
        this.setState( state => ( {playerThrow: choice, computerThrow: computerThrow} ))
    }

    render() {
        return (
            <>
                <div id="result">
                    Player chose {this.state.playerThrow}. 
                    Computer chose {this.state.computerThrow}.
                    Result: {GetWinner(this.state.playerThrow, this.state.computerThrow)}
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
