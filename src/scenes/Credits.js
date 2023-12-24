class Credits extends Phaser.Scene {
    constructor() {
        super("creditScene");
    }
    preload(){
        this.load.image('credits', './assets/Credits.png');
    }
    create(){
        this.bgm = this.sound.add('bgm', {volume: 0.5, loop: true});
        this.bgm.play();
        this.end = this.add.tileSprite(0, 0, 800, 520, 'credits').setOrigin(0, 0);

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
