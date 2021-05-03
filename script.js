let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // renderiza o desenho criado dentro do Canvas 
let box = 32;
let snake = []; // cria um array
snake[0] = { // define  tamanho da cobra de acordo com o tamanho e incrementa
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

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

function iniciarJogo() { // define o movimento da cobrinha
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x; 
    let snakeY = snake[0].y; 

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); // define que após 100 milisegundos o jogo começa e a cada 100 milisegundos ele atualiza para que não trave