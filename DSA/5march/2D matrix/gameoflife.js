
let gameOfLife=(board)=>{

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            let liveNeigbors = 0
            if(board?.[i-1]?.[j-1] === 1 || board?.[i-1]?.[j-1] === -1) {
                liveNeigbors++
            }
            if(board?.[i-1]?.[j] === 1 || board?.[i-1]?.[j] === -1) {
                liveNeigbors++
            }
            if(board?.[i-1]?.[j+1] === 1 || board?.[i-1]?.[j+1] === -1) {
                liveNeigbors++
            }
            if(board?.[i]?.[j-1] === 1 || board?.[i]?.[j-1] === -1) {
                liveNeigbors++
            }
            if(board?.[i]?.[j+1] === 1 || board?.[i]?.[j+1] === -1) {
                liveNeigbors++
            }
            if(board?.[i+1]?.[j-1] === 1 || board?.[i+1]?.[j-1] === -1) {
                liveNeigbors++
            }
            if(board?.[i+1]?.[j] === 1 || board?.[i+1]?.[j] === -1) {
                liveNeigbors++
            }
            if(board?.[i+1]?.[j+1] === 1 || board?.[i+1]?.[j+1] === -1) {
                liveNeigbors++
            }
            
            
            if(board[i][j] === 1 && (liveNeigbors < 2 || liveNeigbors > 3)) {
                board[i][j] = -1
            }
            if(board[i][j] === 0 && liveNeigbors === 3) {
                board[i][j] = 2
            }
        }
    }
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === 2) {
                board[i][j] = 1
            }
            if(board[i][j] === -1) {
                board[i][j] = 0
            }
        }
    }

}
let matrix=[[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
gameOfLife(matrix)
console.log(matrix)