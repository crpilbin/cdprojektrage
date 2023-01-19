/**
 * CDProjektRage
 * 
 * @TODO
 * -----
 * 
 * - Build a responsive scene to work on all devices [ 16 : 9 ]
 * - Create & add a reusable input controller [ Keys, Gamepad ]
 * - Create a player sprite to control
 * 
 * @TOSOLVES
 * ---------
 * - Do we need physics & how if we are moving the ground on the Y axis
 * -- Invisible game object following each physics sprite? [ Player, Enemy... ]
 * 
 */

//import logoImg from '../assets/logo.png';

export default class MainScene extends Phaser.Scene
{
    constructor ()
    {
        super("MainScene");
    }

    preload ()
    {
        //this.load.image('logo', logoImg);
    }
      
    create ()
    {
        //const logo = this.add.image(400, 150, 'logo');
        /*
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });*/
    }
}