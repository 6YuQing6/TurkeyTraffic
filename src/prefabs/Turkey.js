class Turkey extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
    
        // add object to existing scene
        scene.add.existing(this);
        this.dead = false;
        this.moveSpeed = 5; // pixels per frame
      }

      update(keyUP, keyDOWN){
        //left/right movement
        if (!this.dead) {
            if (keyUP.isDown && this.y >= this.height - 50) {
                this.y -= this.moveSpeed;
                console.log(this.y);
            }
            else if (keyDOWN.isDown && this.y <= game.config.height - this.height - 50){
                this.y += this.moveSpeed;
                console.log(this.y);
            }
        }
      }
      reset() {
        this.dead = false;
        this.y = game.config.height - borderUISize - borderPadding;
      }
}