class End extends Phaser.Scene {
    constructor() {
        super("endScene");
    }
    preload(){
        this.load.image('end', './assets/End.png');
    }
    create(){
        this.bgm = this.sound.add('bgm', {volume: 0.8, loop: true});
        this.bgm.play();
        this.end = this.add.tileSprite(0, 0, 800, 520, 'end').setOrigin(0, 0);
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
        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'YOU DIED', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'PRESS W TO GO BACK TO MENU', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'PRESS G TO RESTART', menuConfig).setOrigin(0.5);
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyG)){
            this.bgm.stop();
            this.scene.start('playScene');   
        }
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
            this.bgm.stop();
            this.scene.start('menuScene');
        }
    }
}
