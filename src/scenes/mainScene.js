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
// Controllers
import CharacterController from '../components/characterController.js';

// Assets
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

        this.charactorController = new CharacterController(this);
        
    }

    update (time, deltaTime) {
        
        this.charactorController.move(this.playerCharacter);
        
    }
}