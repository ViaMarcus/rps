export const GenerateThrow = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    const rand = Math.floor(Math.random()*3)
    return options[rand]
}

export const GetWinner = (user, comp) => {
    const options = ['Rock', 'Paper', 'Scissors'];
    user = options.findIndex(val => val == user)
    comp = options.findIndex(val => val == comp)
    let winner = ((user-comp+3)%3)
    return winner;
}

export const WinMessage = outcome => {
    let message;
    switch (outcome) {
        case 0: 
            message = "It's a draw";
            break;
        case 1:
            message = "You won"
            break;
        case 2:
            message = "You lost"
            break;
        default:
            break;
    }
    return message;
}