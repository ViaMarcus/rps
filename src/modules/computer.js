const options = ['Rock', 'Paper', 'Scissors','Lizard','Spock'];

function randomNo(version){
    return Math.floor(Math.random()*version)
}

export const GenerateThrow = (version) => {
    let throws = options[randomNo(version)]
    return throws
}

export const GetWinner = (user, comp, version) => { // returns 0 = draw, 1 = player, 2 = computer
    version = parseInt(version);
    if (user === comp) return 0;
    switch(user) {
      case 'Rock':
        return (comp === 'Paper' || comp === 'Spock') ? 2 : 1;
      case 'Paper':
        return (comp === 'Scissors' || comp === 'Lizard') ? 2 :1;
      case 'Scissors':
        return (comp === 'Rock' || comp === 'Spock') ? 2 :1;
      case 'Lizard':
        return (comp === 'Rock' || comp === 'Scissors') ? 2 :1;
      case 'Spock':
          return (comp === 'Paper' || comp === 'Lizard') ? 2 :1;
      default:
        return null
    }
}

export const WinMessage = outcome => {
    let message = ["It's a draw", "You won", "You lost",]
    return message[outcome];
}

export const GeneratePredict = (history, version) => {
    let ops = ['o', 'a', 'c','i','p'] //second letter of each throw
    const beats = ['Paper','Scissors','Rock','Scissors','Paper']
    let reg = /^(.+).*?(.)\1/
    let match = reg.exec(history)
    let predict = match != null ? ops.indexOf(match[2]) : randomNo(version)
    return beats[predict]
}