export default class CharacterController {


    constructor (scene) {

        this.scene = scene;

        // Add support for keys & gamepad
        scene.input.gamepad.once('connected', function (pad) {
            console.log('connected', pad.id);
        }, scene);
        
        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    move (character) {
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