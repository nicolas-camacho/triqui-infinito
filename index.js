const inquirer = require('inquirer');
const { expand } = require('./boardFunctions');

let board = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

let mainQuestions = [{
    type: 'list',
    choices: ['Size of board', 'Expand'],
    message: 'Select an option',
    name: 'option'
}]

let players = [[],[]]
let turn = null;

const choices = {
    'Size of board' : () => console.log(board.length),
    'Expand' : () => expand(board)
}

const init = () => {
    turn = playe2[Math.floor(Math.random() * 2)]

    inquirer.prompt(mainQuestions).then(answer => {
        choices[answer['option']]()
        init()
    })
}

init()