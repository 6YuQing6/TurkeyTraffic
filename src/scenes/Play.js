class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('turkey', './assets/Turkey.png');
        this.load.image('bkg', './assets/Highway.png');
        this.load.image('redcar', './assets/redcar.png');
        this.load.image('bluecar', './assets/bluecar.png');
    }
    create() {
        //background music
        this.highway = this.sound.add('highway', {volume: 0.8, loop: true});
        this.highway.play();
        this.gameOver = false;

        //place bkg
        this.bkg = this.add.tileSprite(0, 0, 800, 520, 'bkg').setOrigin(0, 0);

        // add cars (x3)
        this.car01 = new Car(this, game.config.width + borderUISize*6, 75, 'redcar', 0).setOrigin(0, 0);
        this.car02 = new Car(this, game.config.width + borderUISize*3, 175, 'bluecar', 0).setOrigin(0,0);
        this.car03 = new Car(this, game.config.width, 275, 'redcar', 0).setOrigin(0,0);
        this.car04 = new Car(this, game.config.width, 375, 'bluecar', 0).setOrigin(0,0);

        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        this.p1Turkey = new Turkey(this, game.config.width/2 - 25, game.config.height/2, 'turkey').setOrigin(0.5, 0);

        // initialize score
        this.p1Score = 0;
        this.time.addEvent({
            delay: 500,
            loop: true,
            callback: this.incrementScore,
            callbackScope: this
        });
        //display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#6cad7d',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        //displays score
        this.scoreLeft = this.add.text(borderUISize, borderUISize - 20, this.p1Score, scoreConfig);
    }


    update(){
        if (!this.gameOver) {
            if (Phaser.Input.Keyboard.JustDown(keyG)) {
                this.sound.play('gobble');
            }
            this.car01.update();               // update spaceships (x3)
            this.car02.update();
            this.car03.update();
            this.car04.update();
            this.p1Turkey.update(keyUP,keyDOWN);
            this.bkg.tilePositionX += 1;
        }
        // check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
        }
    }
    incrementScore() {
        this.p1Score++;
        this.scoreLeft.text = this.p1Score;
    }
 }