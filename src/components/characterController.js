/**
* Character Controller
* 
* Build the player here, deal with the sprite....
*
* Import an input manager? animation manager?
* - Create & add a reusable input controller [ Keys, Gamepad ]
* - Dynamic data needs to live elsewhere, let's get a reusable class
*
* Questions
* - Collisions?
*
*/

// Import Class Managers like input / animation
import InputManager from '../components/inputManager.js';

// Import assets


export default class CharacterController {

    // This needs to init the class, register the managers like input & anim etc
    /**
    * Init the class with parameters like other engines [unity]
    * 
    * - Transform
    * - Sprite
    * - Physics
    *  
    */
    constructor (scene) {

        this.scene = scene;

        this.input = new InputManager(scene);

        // Variables



        // MOVE THIS SHIT TO AN IMPORTED INPUT CLASS
        // Add support for keys & gamepad
        scene.input.gamepad.once('connected', function (pad) {
            console.log('connected', pad.id);
        }, scene);
        
        this.cursors = scene.input.keyboard.createCursorKeys();

        //this.preload(scene);
    }

    get () {
        return this;
    }

    // Method to preload the assets

    /**
    * Initiated from the scene preload method, load the assets here.
    *  
    */
    preload (scene) {
        //scene.playerCharacter.play('punch');
    }

    create () {
        console.log("CC Create");
    }

    update () {
        console.log(this.input.getInput());


    }

    move (character) {

        // This method needs to request the input and do the moving





        if (this.cursors.left.isDown) {
            character.setVelocityX(-160);
            character.flipX = false;

            
        }
        else if (this.cursors.right.isDown) {
            character.setVelocityX(160);
            character.flipX = true;
        }
        else {
            character.setVelocityX(0);
        }

        if (this.cursors.space.isDown){//} && this.playerCharacter.body.touching.down) {
            character.setVelocityY(-330);
        }

        var pads = this.scene.input.gamepad.gamepads;

        for (var i = 0; i < pads.length; i++) {
            var gamepad = pads[i];

            if (!gamepad) {
                continue;
            }

            if (gamepad.left) {
                character.setVelocityX(-160);
                character.flipX = false;
            }
            else if (gamepad.right) {
                character.setVelocityX(160);
                character.flipX = true;
            }

        }

    }
}