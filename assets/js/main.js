const ticTacToe = {
    board: ['', '', '', '', '', '', '', '', ''],
    simbols: ['X', 'O'],
    containerElement: null,

    init: function(container){
        this.containerElement = container;
    },

    draw: function(){
        let content = '';
        for (let i in this.board) {
            content += `<div>${i}</div>`
        }
        this.containerElement.innerHTML = content;
    }
};

const game = document.querySelector('.game')
ticTacToe.init(game);
ticTacToe.draw();