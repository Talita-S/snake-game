let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // renderiza o desenho criado dentro do Canvas 
let box = 32;
let snake = []; // cria um array
snake[0] = { // define  tamanho da cobra de acordo com o tamanho e incrementa
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "#95f2d9";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){ // preenche com a cor da cobra
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "#59cd90";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

criarBG();
criarCobrinha();