        // 0 = blank, 1=X, 2=O
        let board = [
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ]
        let keepPlaying = true

        function updateBoard(){
            let ndx = 1
            for(let r of board){
                for(let c of r){
                    let cell = '&nbsp;'

                    if(c == 1) cell = 'X'
                    else if(c==2) cell = 'O'

                    document.querySelector('#cell-'+ndx).innerHTML = cell
                    ndx++
                }
            }
        }

        function checkBoard(){
            if(
                (board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][0] != 0) ||
                (board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][0] != 0) ||
                (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][0] != 0) ||

                (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[0][0] != 0) ||
                (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[0][1] != 0) ||
                (board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[0][2] != 0) ||

                (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[0][0] != 0) ||
                (board[2][0] == board[1][1] && board[2][0] == board[0][2] && board[2][0] != 0)
             ){
                document.querySelector('.result').innerHTML =`${board[0][0] == 1? 'X' : 'O'} won!`
                keepPlaying = false
            }
        }

        function playTicTacToe(){
            updateBoard()
            let count = 0
            document.querySelectorAll('.board .col').forEach(function(cell){
                cell.onclick = function(e){
                    if(keepPlaying){
                        let ndx = parseInt(cell.id.substring(5)) - 1
                        if(board[Math.floor(ndx / 3)][ndx % 3] == 0){
                            board[Math.floor(ndx / 3)][ndx % 3] = count % 2 == 0 ? 1 : 2
                            count++
                            updateBoard()
                            checkBoard()
                        }
                    }
                }
            })
        }
        playTicTacToe()