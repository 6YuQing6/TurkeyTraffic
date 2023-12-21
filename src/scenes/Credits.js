class Credits extends Phaser.Scene {
    constructor() {
        super("creditScene");
    }
    preload(){
        this.load.image('credits', './assets/Credits.png');
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
    }
    update(){
    }
}
