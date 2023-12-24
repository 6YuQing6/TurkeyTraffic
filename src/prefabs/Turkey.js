class Turkey extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
    
        // add object to existing scene
        scene.add.existing(this);
        //scene.physics.add.existing(this);
        this.dead = false;
        this.moveSpeed = 5; // pixels per frame
        this.ylanes = [75, 175, 275, 375];
        this.xlanes = [100, 200, 300, 400, 500, 600];
        this.currentY = 1;
        this.currentX = 0;
        this.allowinput = true;
        this.delaytime = 1000;
        this.timer = scene.time;
        this.buttonDown = false;
        scene.load.audio('jump','./assets/jump.wav');
        this.jump = scene.sound.add('jump');
    }
      update(keyUP, keyDOWN, keyLEFT, keyRIGHT){
        if (this.allowinput) {
          if (!this.dead) {
            //up down movement
              if (Phaser.Input.Keyboard.JustDown(keyUP) && !this.buttonDown && this.currentY != 0) {
                this.currentY -= 1;
                this.y = this.ylanes[this.currentY];
                this.allowinput = false;
                this.jump.play();
                this.timer.addEvent({
                  delay: this.delayTime,
                  callback: this.enableInput,
                  callbackScope: this
                });
                }
              else if (Phaser.Input.Keyboard.JustDown(keyDOWN) && !this.buttonDown && this.currentY != 3){
                  this.currentY += 1;
                  this.y = this.ylanes[this.currentY];
                  this.allowinput = false;
                  this.jump.play();
                this.timer.addEvent({
                  delay: this.delayTime,
                  callback: this.enableInput,
                  callbackScope: this
                });
              }
              //left right movement
              if (Phaser.Input.Keyboard.JustDown(keyLEFT) && !this.buttonDown && this.currentX != 0) {
                this.currentX -= 1;
                this.x = this.xlanes[this.currentX];
                this.allowinput = false;
                this.jump.play();
                this.timer.addEvent({
                  delay: this.delayTime,
                  callback: this.enableInput,
                  callbackScope: this
                });
                }
              else if (Phaser.Input.Keyboard.JustDown(keyRIGHT) && !this.buttonDown && this.currentX != 5){
                  this.currentX += 1;
                  this.x = this.xlanes[this.currentX];
                  this.allowinput = false;
                  this.jump.play();
                this.timer.addEvent({
                  delay: this.delayTime,
                  callback: this.enableInput,
                  callbackScope: this
                });
              }
          }
        }
      }
      reset() {
        this.dead = false;
        this.y = game.config.height - borderUISize - borderPadding;
      }
      enableInput() {
        this.allowinput = true; // Enable input after the delay
      }
}