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
      const playerThrowText = () => {
        let colors=["black","green","red"];
        if (this.state.playerThrow == "") {
          return <div id="throw-text"><a>Select a throw to start playing!</a></div>
        } else {
          return (
            <a id="player-throw" style={{"color":colors[this.state.winner]}} class="throw">You chose {this.state.playerThrow}!</a>
          )
        }
      }

      const computerThrowText = () => {
        let colors=["black","red","green"];
        if (this.state.computerThrow == "") {
          return <div id="throw-text"><a>Select a throw to start playing!</a></div>
        } else {
          return (
            <a id="computer-throw" style={{"color":colors[this.state.winner]}} class="throw">Computer chose {this.state.computerThrow}!</a>
          )
        }
      }

      const compPicture1 = () => {
        if (this.state.mode == "hard") {
          return (
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/IBM_Watson.PNG" title="Clockready / CC BY-SA (https://creativecommons.org/licenses/by-sa/3.0)"/>
          )
        } else {
          return (
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Apple_II_IMG_4218-black.jpg" title="Rama / CC BY-SA 2.0 FR (https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en)"/>
          )
        }
      }

      const compPicture2 = () => {
        if (this.state.version == 3) {
          return (
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Rock-paper-scissors.svg" title="Enzoklop / CC BY-SA (https://creativecommons.org/licenses/by-sa/3.0)"/>
          )
        } else {
          return (
              <img src="https://vignette.wikia.nocookie.net/bigbangtheory/images/7/7d/RPSLS.png" title="https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock?file=RPSLS.png"/>
          )
        }
      }

        return (
            <>
              <div id="settings">
                <a></a>
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
                <a id="stats">Stats: Win: {this.state.stats[1]}, Draw: {this.state.stats[0]}, Loss: {this.state.stats[2]}</a>
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
                <a></a>
              </div>
              <div id="players">
                <div id="player">
                  {playerThrowText()}
                  <Controller
                    version={this.state.version}
                    onClickHandler={this.onClickHandler}
                  />
                </div>
                <div id="computer">
                  {computerThrowText()}
                  <div>
                    <div class="image">
                      {compPicture1()}
                    </div>
                    <div class="image">
                      {compPicture2()}
                    </div>
                  </div>
                </div>
              </div>
            </>
        )
    }
}

export default Game;
