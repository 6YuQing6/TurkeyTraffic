class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionScene");
    }
    preload(){
        this.load.image('instructions', './assets/Instructions.png');
    }
    create(){
        this.bgm = this.sound.add('bgm', {volume: 0.5, loop: true});
        this.bgm.play();
        this.instructions = this.add.tileSprite(0, 0, 800, 520, 'instructions').setOrigin(0, 0);

        //adding back button
        this.back = this.add.text(638, 102, 'x', buttonConfig).setOrigin(0.5);
        this.back.setInteractive();
        this.back.on('pointerup', () => {
            this.bgm.stop();
            this.scene.start('menuScene');
        });
    }
    update(){
    }
}
