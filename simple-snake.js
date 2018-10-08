var ansi = require('ansi'), cursor = ansi(process.stdout);

const frame = {
    length: 30,
    heigth : 30
};

var snake = {
    size: 5,
    x: 5,
    y: 6
};
printFrame();
printSnake();

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
    cursor.goto(frame.length, frame.heigth);
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