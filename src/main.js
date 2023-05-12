//Sunny Han
//Turkey Traffic
//Approx hrs: 30 
//Creative tilt:
//Technical: Implemented mechanic where turkey snaps to each lane with a delay between each button press
//Visual: Follows the story of a turkey on highway 17. It can also gobble by pressing G.
let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 520,
    scene: [ Menu, Play, End ]
  }
  

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyG, keyF, keyUP, keyDOWN, keyR;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 5;