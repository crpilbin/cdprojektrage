



export default class InputManager {
    
    constructor (scene) {
        
        this.scene = scene;

        // Button variables
        this.x = 0;
        this.y = 0;
        
        this.cursors = this.scene.input.keyboard.createCursorKeys();
    }

    /**
    * Calculate input and return
    */
    getInput () {

        if (this.cursors.left.isDown) {
            console.log("LEFT");
        }
    }
}