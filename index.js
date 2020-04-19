const inquirer = require('inquirer')

let tablero = [[0, 0, 0], [0, 0, 0], [0 , 0, 0]];

let mainQuestions = [{
    type: 'list',
    choices: ['Size of board', 'Expand'],
    message: 'Select an option',
    name: 'option'
}]

const createColumn = (rows) => {
    let column = []
    for (let index = 0; index < rows; index++) {
        column.push(0)
    }

    return column;
}

const expand = () => {
    let size = tablero.length;

    for (let index = 0; index < tablero.length; index++) {
        tablero[index].push(0);
        tablero[index].unshift(0);
    }

    tablero.push(createColumn(size + 2))
    tablero.unshift(createColumn(size + 2))
}

const choices = {
    'Size of board' : () => console.log(tablero.length),
    'Expand' : () => expand()
}

const init = () => {
    inquirer.prompt(mainQuestions).then(answer => {
        choices[answer['option']]()
        init()
    })
}

init()