import 'phaser';

export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('Options');
  }

  preload () {
    this.add.text(0, 0, "Options Scene", {
      fontSize: "32px",
      fill: "#fff",
    });
  }

  create () {

  }
};
