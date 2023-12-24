class End extends Phaser.Scene {
    constructor() {
        super("endScene");
    }
    init(data){
        this.finalscore = data.score;
        if (this.finalscore > highscore){
            highscore = this.finalscore;
        }
    }
    preload(){
        this.load.image('end', './assets/End1.png');
        this.load.audio('gobble', './assets/gobble.wav');
        this.load.audio('selection', './assets/selection.wav');
    }
    create(){
        this.bgm = this.sound.add('bgm', {volume: 0.8, loop: true});
        this.bgm.play();
        this.end = this.add.tileSprite(0, 0, 800, 520, 'end').setOrigin(0, 0);
        // define keys
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        //defines text
        this.add.text(game.config.width/2, 172, 'YOUR SCORE:', titleConfig).setOrigin(0.5);
        //adds score
        this.score = this.add.text(game.config.width/2, 260, this.finalscore, titleConfig).setOrigin(0.5);
        //adds restart and menu buttons
        this.restart = this.add.text(469, 371, 'Restart', buttonConfig).setOrigin(0.5);
        this.restart.setInteractive();
        this.menu = this.add.text(320, 371, 'Menu', buttonConfig).setOrigin(0.5);
        this.menu.setInteractive();

        //interactive text UI
        const menuOptions = [
            {text: this.restart, scene: 'playScene'}, 
            {text: this.menu, scene: 'menuScene'}
        ];
        menuOptions.forEach((option) => {
            option.text.on('pointerover', () => {
                this.sound.play('selection');
                option.text.setFontStyle('bold');
            });
            option.text.on('pointerout', () => {
                option.text.setFontStyle('normal');
            });
            option.text.on('pointerup', () => {
                this.sound.play('gobble');
                this.bgm.stop();
                this.scene.start(option.scene);
            });
        }); 
    }
    update(){
    }
}
