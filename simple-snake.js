var ansi = require('ansi'), cursor = ansi(process.stdout);
var keypress = require('keypress');
keypress(process.stdin);

const frame = {
    length: 30,
    heigth : 30
};

var snake = {
    size: 5,
    x: 5,
    y: 6
};
var apple = {
    x: 6,
    y: 3,
    size: 3
};

printFrame();
printSnake();
printApple();

function printFrame() {
    cursor.bg.grey();
    //upper horizontal
    printHorizontal();

    // left vertical
    cursor.goto(1,1);
    printVertical(1);

    //right vertical
    cursor.goto(1, frame.length);
    printVertical(frame.length);

    // lower horizontal
    cursor.goto(1, frame.heigth/2);
    printHorizontal();

    cursor.bg.reset();
}

function printVertical(row) {
    for(i = 1; i < frame.heigth/2; i++) {
        cursor.goto(row, i + 1);
        cursor.write('  ');
    }
}

function printHorizontal() {
    for(i = 0; i < frame.length; i++) {
        cursor.write(' ');
    }
}

function printSnake() {
    cursor.bg.green();
    cursor.goto(snake.x, snake.y);
    for(i = 0; i < snake.size; i++) {
        cursor.write(' ');
    }
    cursor.bg.reset();
}

function printApple() {
    cursor.bg.red();
    cursor.goto(apple.x, apple.y);
    for(i = 0; i < apple.size; i++) {
        cursor.write(' ');
    }
    cursor.bg.reset();
}