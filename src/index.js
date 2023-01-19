import Phaser from 'phaser';
import MainScene from './scenes/mainScene.js';

const screenBuffer = 100;

const config = {
    type: Phaser.AUTO,
    parent: 'view',
    width: window.innerWidth - screenBuffer,
    height: (window.innerWidth - screenBuffer) / 16 * 9,
    scene: MainScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

const game = new Phaser.Game(config);