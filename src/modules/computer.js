export const GenerateThrow = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    const rand = Math.floor(Math.random()*3)
    return options[rand]
}

export const GetWinner = (user, comp) => {
    const options = ['Rock', 'Paper', 'Scissors'];
    user = options.findIndex(val => val == user)
    comp = options.findIndex(val => val == comp)
    let winner;
    switch ((user-comp+3)%3) {
        case 0: 
            winner = "It's a draw";
            break;
        case 1:
            winner = "You won"
            break;
        case 2:
            winner = "You lost"
            break;
        default:
            break;
    }
    return winner;
}
