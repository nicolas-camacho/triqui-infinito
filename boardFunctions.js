const createColumn = (rows) => {
    let column = []
    for (let index = 0; index < rows; index++) {
        column.push(0)
    }

    return column;
}

exports.expand = (board) => {
    let size = board.length;

    for (let index = 0; index < board.length; index++) {
        board[index].push(0);
        board[index].unshift(0);
    }

    board.push(createColumn(size + 2))
    board.unshift(createColumn(size + 2))

    return board;
}