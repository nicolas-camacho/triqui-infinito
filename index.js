let tablero = [[0, 0, 0], [0, 0, 0], [0 , 0, 0]];

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

expand()

console.log(tablero.length)
console.log(tablero[0].length)
console.log(tablero[1].length)