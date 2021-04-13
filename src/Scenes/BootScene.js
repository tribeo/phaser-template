import "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("tbart_logo", "assets/tbart-icon.jpg");
  }

  create() {
    this.scene.start("Preloader");
  }
}
