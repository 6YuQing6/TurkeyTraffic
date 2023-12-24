class Car extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, maxspeed = 5, minspeed =2) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //add to existing scene
        this.moveSpeed = Phaser.Math.Between(minspeed,maxspeed);
    }
    update() {
        //move car left
        this.x -= this.moveSpeed;

        //wrap around from left to right edge 
        if (this.x <= 0 - this.width) {
            this.reset();
        }
    }
    updateMoveSpeed(max, min){
        this.maxspeed = max;
        this.minspeed = min;
        this.moveSpeed = Phaser.Math.Between(this.minspeed,this.maxspeed);
        console.log(this.moveSpeed);
    }
    reset() {
        this.x = game.config.width + Phaser.Math.Between(50,400);
    }
}