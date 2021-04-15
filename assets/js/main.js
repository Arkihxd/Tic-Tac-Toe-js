const ticTacToe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols:{
        options: ['X', 'O'],
        turnIndex: 0,
        change: function(){
            this.turnIndex = (this.turnIndex === 0 ? 1: 0);
        }
    },
    containerElement: null,
    gameOver:false,
    winSequences: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    init: function(container){
        this.containerElement = container;
    },

    start: function(){
        this.board.fill('');
        this.draw();
        this.gameOver = false;
    },

    play: function(position){
        console.log(position)
        if(this.gameOver) return false;
        if(this.board[position] === ''){
            this.board[position] = this.simbols.options[this.simbols.turnIndex];
            this.draw();
            let winSequencesIndex = this.checkWinSequences(this.simbols.options[this.simbols.turnIndex]);
            if(winSequencesIndex >= 0){
                let winner = this.simbols.options[this.simbols.turnIndex];
                this.finalGame(winner);
            }
            else{
                this.simbols.change();
            }
            return true;
        }
        else{
            alert('Jogada Inválida');
            return false;
        }
    },

    finalGame: function(winner){
        this.gameOver = true;
        alert(`${winner} Ganhou`);
    },

    checkWinSequences: function(symbol){
        for (i in this.winSequences){
            if(this.board[this.winSequences[i][0]] == symbol && 
               this.board[this.winSequences[i][1]] == symbol &&
               this.board[this.winSequences[i][2]] == symbol){
                    return i;
               } 
        };
        return -1;
    },

    draw: function(){
        let content = '';
        for (i in this.board) {
            content += `<div onclick="ticTacToe.play(${i})">${this.board[i]}</div>`
        }
        this.containerElement.innerHTML = content;
    }
};

const game = document.querySelector('.game')
ticTacToe.init(game);
ticTacToe.start();