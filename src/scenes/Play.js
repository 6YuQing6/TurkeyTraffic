class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('turkey', './assets/Turkey.png');
        this.load.image('bkg', './assets/Highway.png');
        this.load.image('redcar', './assets/redcar.png');
        this.load.image('bluecar', './assets/bluecar.png');
        this.load.audio('hit', './assets/hit.wav');
        this.load.audio('jump', './assets/jump.wav');
    }
    create() {
        //background music
        //this.bgm = this.sound.add('bgm', {volume: 0.8, loop: true});
        //this.bgm.play();
        this.highway = this.sound.add('highway', {volume: 0.8, loop: true});
        this.highway.play();
        this.gameOver = false;

        //place bkg
        this.bkg = this.add.tileSprite(0, 0, 800, 520, 'bkg').setOrigin(0, 0);

        // add cars (x3)
        this.car01 = new Car(this, game.config.width + borderUISize*6, 75, 'redcar', 0, 5, 2).setOrigin(0, 0);
        this.car02 = new Car(this, game.config.width + borderUISize*3, 175, 'bluecar', 0, 5, 2).setOrigin(0,0);
        this.car03 = new Car(this, game.config.width, 275, 'redcar', 0, 5, 2).setOrigin(0,0);
        this.car04 = new Car(this, game.config.width + 300, 375, 'bluecar', 0, 5, 2).setOrigin(0,0);
        this.maxspeed = 5;
        this.minspeed = 2;


        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        this.p1Turkey = new Turkey(this, 100, 175, 'turkey').setOrigin(0.5, 0);
        //this.physics.world.enable([this.p1Turkey, this.car01, this.car02, this.car03, this.car04]);
        // initialize score
        this.p1Score = 0;
        this.prevScore = 0;
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
            if (this.p1Score != 0 && this.p1Score % 25 == 0 && this.p1Score != this.prevScore) {
                this.sound.play('gobble');
                this.maxspeed++;
                this.minspeed++;
                this.car01.updateMoveSpeed(this.maxspeed,this.minspeed);
                this.car02.updateMoveSpeed(this.maxspeed,this.minspeed);
                this.car03.updateMoveSpeed(this.maxspeed,this.minspeed);
                this.car04.updateMoveSpeed(this.maxspeed,this.minspeed);
                this.prevScore = this.p1Score;
            }
            this.car01.update();               // update cars (x3)
            this.car02.update();
            this.car03.update();
            this.car04.update();
            this.p1Turkey.update(keyUP,keyDOWN,keyLEFT,keyRIGHT);
            this.bkg.tilePositionX += 1;
        }
        // check collisions
        if(this.checkCollision(this.p1Turkey, this.car04)) {
            this.gameOver = true;
            this.sound.play('hit');
        }
        if (this.checkCollision(this.p1Turkey, this.car03)) {
            this.gameOver = true;
            this.sound.play('hit');
        }
        if (this.checkCollision(this.p1Turkey, this.car02)) {
            this.gameOver = true;
            this.sound.play('hit');
        }
        if (this.checkCollision(this.p1Turkey, this.car01)) {
            this.gameOver = true;
            this.sound.play('hit');
        }
        // checks if game over
        if (this.gameOver) {
            //this.bgm.stop();
            //this.scene.pause('playScene');
            //this.time.delayedCall(2500, function(){
                this.highway.stop();
                this.scene.start('endScene',{score: this.p1Score});
            //}, [], this);
        }
    }
    checkCollision(turkey, car) {
        // simple AABB checking
        const boundsT = turkey.getBounds();
        const boundsC = car.getBounds();
        const padding = 25;
        const smallcar = new Phaser.Geom.Rectangle();
        const smallturkey = new Phaser.Geom.Rectangle();
        smallcar.setTo(
            boundsC.x + padding,
            boundsC.y + padding,
            boundsC.width - 2 * padding,
            boundsC.height - 2 * padding)
        smallturkey.setTo(
                boundsT.x + padding,
                boundsT.y + padding + 20,
                boundsT.width - 2 * padding - 40,
                boundsT.height - 2 * padding - 80)    
        return Phaser.Geom.Intersects.RectangleToRectangle(boundsT,smallcar);
      }
    
    incrementScore() {
        this.p1Score++;
        this.scoreLeft.text = this.p1Score;
    }
 }