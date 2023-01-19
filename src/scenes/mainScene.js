/**
 * CDProjektRage
 * 
 * @TODO
 * -----
 * 
 * - Create & add a reusable input controller [ Keys, Gamepad ]
 * - Create a player sprite to control
 * 
 * @TOSOLVES
 * ---------
 * - Do we need physics & how if we are moving the ground on the Y axis
 * -- Invisible game object following each physics sprite? [ Player, Enemy... ]
 * 
 */

import playerSprite from '../assets/brawler48x48.png';

export default class MainScene extends Phaser.Scene
{
    constructor () {
        super("MainScene");

        this.cursors;
        this.playerCharacter;
    }

    preload () {
        this.load.spritesheet('player', playerSprite, { frameWidth: 48, frameHeight: 48 });
    }
      
    create () {
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 5, 6, 7, 8 ] }),
            frameRate: 8,
            repeat: -1
        });

        this.playerCharacter = this.physics.add.sprite(600, 370, 'player');

        this.playerCharacter.play('idle');

        this.playerCharacter.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
        
    }

    update () {
        
        if (this.cursors.left.isDown) {
            this.playerCharacter.setVelocityX(-160);
            this.playerCharacter.flipX = false;
        }
        else if (this.cursors.right.isDown) {
            this.playerCharacter.setVelocityX(160);
            this.playerCharacter.flipX = true;
        }
        else {
            this.playerCharacter.setVelocityX(0);
        }

        if (this.cursors.space.isDown){//} && this.playerCharacter.body.touching.down) {
            this.playerCharacter.setVelocityY(-330);
        }
        
    }
}