let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 520,
    scene: [ Menu, Play ]
  }
  

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyG, keyF, keyUP, keyDOWN, keyR;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 5;