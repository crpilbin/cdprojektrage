
// Import an input manager as all input are used in this class

//import { debug } from "webpack";

// Maybe we need to integrate that here, we can't use a lerp to move

// We need to have a base level so this can be reusable as a class






export default class CharacterController {

    /**
     *  Character controller
     * 
     * Like UNITY
     * 
     * Pulls in from a global input manager
     * Takes in the character
     * Animations
     * 
     * Updates via a callback from update
     * 
     * Start with values we need, postion, transform etc
     * 
     */

    // This needs to init the class, register the managers like input & anim etc
    constructor (scene) {

        this.scene = scene;

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

    move (character) {

        // This method needs to request the input and do the moving





        if (this.cursors.left.isDown) {
            character.setVelocityX(-160);
            character.flipX = false;

            this.scene.sceneCallback(function(){
                this.playerCharacter.play('kick')
            });
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