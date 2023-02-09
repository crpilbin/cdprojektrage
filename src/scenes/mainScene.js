/**
 * A Base Scene
 * 
 * Register game objects here and add them to the sceneObject array so they call their 
 * own create and updates.
 * 
 * - Do we need to register events and broadcast to other objects in the program from here?
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

    /**
    * Initialise and scene class variables here.
    * 
    * 
    */
    constructor () {
        super("MainScene");
        
    }

    /**
    * Load any assets for the game here. We are also using this to instantiate other common game 
    * classes like the character controller so we can abstract that functionality out of the scene.
    * 
    */
    preload () {
        
        /**
        * Initialize controllers here to be used in the scene. A callback to create & update for each 
        * will be made in the scene's create & update functions. 
        *
        */
        this.sceneObjects = {
            'characterController' : new CharacterController(this)
        }







        this.load.spritesheet('player', playerSprite, { frameWidth: 48, frameHeight: 48 });
    }

    
    create () {

        /**
        * sceneObjects registered in the preload method get called in order here.
        * 
        */
        for(var so in this.sceneObjects) {
            if(typeof this.sceneObjects[so].create === 'function')
                this.sceneObjects[so].create();
        }
        











        /**
         * 
         * MOVE ALL THIS SHIT TO THE CHAR CONTROLLER & ANIM
         */

        // Animation set
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 5, 6, 7, 8 ] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'kick',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 10, 11, 12, 13, 10 ] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 2000
        });

        this.anims.create({
            key: 'punch',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 15, 16, 17, 18, 17, 15 ] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 2000
        });

        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 20, 21, 22, 23 ] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'jumpkick',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 20, 21, 22, 23, 25, 23, 22, 21 ] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'win',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 30, 31 ] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 2000
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 35, 36, 37 ] }),
            frameRate: 8,
        });

        this.playerCharacter = this.physics.add.sprite(600, 370, 'player');

        this.playerCharacter.play('walk');

        this.playerCharacter.setCollideWorldBounds(true);

        
        
    }

    update (time, deltaTime) {

        /**
        * sceneObjects registered in the preload method get called in order here.
        * 
        */
        for(var so in this.sceneObjects) {
            if(typeof this.sceneObjects[so].update === 'function')
                this.sceneObjects[so].update(time, deltaTime);
        }
        











        this.sceneObjects.characterController.move(this.playerCharacter);
        
    }
}