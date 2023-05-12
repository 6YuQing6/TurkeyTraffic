class Car extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //add to existing scene
        this.moveSpeed = game.settings.carSpeed;
    }
    update() {
        //move spaceship left
        this.x -= this.moveSpeed;
        //console.log(this.x, this.y);
        //wrap around from left to right edge 
        if (this.x <= 0 - this.width) {
            this.reset();
        }
    }
    reset() {
        this.x = game.config.width;
    }
}