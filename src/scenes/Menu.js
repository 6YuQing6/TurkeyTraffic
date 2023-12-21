class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        //load audio
        this.load.audio('gobble', './assets/gobble.wav');
        this.load.audio('highway', './assets/highway.mp3');
        this.load.audio('hit', './assets/hit.wav');
        this.load.audio('jump', './assets/jump.wav');
        this.load.audio('bgm', './assets/bgm.mp3');
        this.load.audio('selection', './assets/selection.wav');
        this.load.image('bkg1', './assets/Start1.png');
    }

    create() {
        this.add.image(0,0,'bkg1').setOrigin(0,0);
        this.cameras.main.setBackgroundColor('#a5d1b1');
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#6cad7d',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        let titleConfig = {
            fontFamily: 'Ariel',
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
        //background music
        this.bgm = this.sound.add('bgm', {volume: 0.5, loop: true});
        this.bgm.play();

        // show menu text 
        this.title = this.add.text(game.config.width/2, 188, 'Turkey Traffic', titleConfig).setOrigin(0.5);
        this.instructions = this.add.text(game.config.width/2, game.config.height/2, 'Instructions', buttonConfig).setOrigin(0.5);
        //this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press G to start', menuConfig).setOrigin(0.5);
        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyG)) {
          this.sound.play('selection');
          this.sound.play('gobble');
          this.bgm.stop();
          this.scene.start('playScene');    
        }
      }
}