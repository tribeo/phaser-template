import "phaser";
import config from "../Config/config";
import Button from "../Objects/Button";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {}

  create() {
    // ************ for Game ************ //
    this.gameButton = new Button(
      this,
      config.width / 2,
      config.height / 2 - 100,
      "blueButton2",
      "blueButton3",
      "Play",
      "Game"
    );

    // ************ for Options ************ //
    this.optionsButton = new Button(
      this,
      config.width / 2,
      config.height / 2,
      "blueButton2",
      "blueButton3",
      "Options",
      "Options"
    );

    // ************ for Credits ************ //
    this.creditsButton = new Button(
      this,
      config.width / 2,
      config.height / 2 + 100,
      "blueButton2",
      "blueButton3",
      "Credits",
      "Credits"
    );

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn && !this.model.bgMusicPlaying) {
      this.bgMusic = this.sound.add("bgMusic", { volumn: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  // offset => the amount we want to offset the game object Vertically.
  // centerButton(gameObject, offset = 0) {
  //   Phaser.Display.Align.In.Center(
  //     gameObject,
  //     this.add.zone(
  //       config.width / 2,
  //       config.height / 2 - offset * 100,
  //       config.width,
  //       config.height
  //     )
  //   );
  // }

  // centerButtonText(gameText, gameButton) {
  //   Phaser.Display.Align.In.Center(gameText, gameButton);
  // }
}
