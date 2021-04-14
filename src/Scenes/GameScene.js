import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('logo', 'assets/logo.png');
    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
  }

  create () {
    this.add.image(400, 300, 'logo');
  }

  ready () {
    this.scene.start("Title");
  }
};
