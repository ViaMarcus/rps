const options = ['Rock', 'Paper', 'Scissors'];

function random3(){
    return Math.floor(Math.random()*3)
}

export const GenerateThrow = () => {
    return options[random3()]
}

export const GetWinner = (user, comp) => {
    user = options.indexOf(user)
    comp = options.indexOf(comp)
    let winner = ((user-comp+3)%3)
    return winner;
}

export const WinMessage = outcome => {
    let message = ["It's a draw", "You won", "You lost"]
    return message[outcome];
}

export const GeneratePredict = history => {
    let ops = ['R', 'P', 'S']
    const beats = ['Paper','Scissors','Rock']
    let reg = /^(.+).*?(.)\1/
    let match = reg.exec(history)
    let predict = match != null ? ops.indexOf(match[2]) : random3()
    return beats[predict]
}