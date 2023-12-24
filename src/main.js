//Sunny Han
//Turkey Traffic
//Approx hrs: 30 
//Creative tilt: 
//Technical: Implemented mechanic where turkey snaps to each lane with a delay between each button press
//Visual: Follows the story of a turkey on highway 17. It can also gobble by pressing G.
let config = {
    type: Phaser.CANVAS,
    autoCenter: true,
    width: 800,
    height: 520,
    scene: [ Menu, Play, End, Instructions, Credits ]
  }
  

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyG, keyF, keyUP, keyDOWN, keyR, keyLEFT, keyRIGHT;

//highscore counter
let highscore = 0;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 5;

//set UI fonts
let titleConfig = {
  fontFamily: 'Avenir',
  fontSize: '52px',
  color: '#000000',
  align: 'middle'
};
let buttonConfig = {
  fontFamily: 'Avenir',
  fontSize: '25px',
  color: '#000000',
  align: 'middle'
};
let menuConfig = {
  fontFamily: 'Courier',
  fontSize: '28px',
  backgroundColor: '#FFFFFF',
  color: '#000000',
  align: 'right',
  padding: {
      top: 5,
      bottom: 5,
  },
  fixedWidth: 0
}