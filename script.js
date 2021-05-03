let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // renderiza o desenho criado dentro do Canvas 
let box = 32;
let snake = []; // cria um array
snake[0] = { // define  tamanho da cobra de acordo com o tamanho e incrementa
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box, // gera números aleatórios até o tamanho do Canvas
    y: Math.floor(Math.random() * 15 + 1) * box
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

function criarComida() {
    context.fillStyle = "#9e2a2b";
    context.fillRect(food.x, food.y, box, box);
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

    for (i = 1; i < snake.length; i++) { // checa se a cobra colidiu com o próprio corpo, se sim, o jogo para
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Fim de jogo!');
        }
    }

    criarBG();
    criarCobrinha();
    criarComida();

    let snakeX = snake[0].x; 
    let snakeY = snake[0].y; 

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y) {
        snake.pop();
    }

    else {
        food.x = Math.floor(Math.random() * 15 + 1) * box, 
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); // define que após 100 milisegundos o jogo começa e a cada 100 milisegundos ele atualiza para que não trave
