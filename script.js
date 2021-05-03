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

document.addEventListener('keydown', update); // pega o evento da tecla pressionada

function update (event) { // verifica qual tecla está pressionada 
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo() { // define o movimento da cobrinha
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0; // se a cobra sair da tela ela retornará para o inicio da tela.
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;


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
