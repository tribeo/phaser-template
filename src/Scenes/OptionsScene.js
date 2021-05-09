import "phaser";
import config from "../Config/config";
import Button from "../Objects/Button";

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super("Options");
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(300, 100, "Options", { fontSize: 40 });

    this.musicButton = this.add.image(250, 200, "checkedBox"); // checked checkbox loaded on Preloader
    this.musicText = this.add.text(300, 190, "Music Enabled", { fontSize: 24 });

    this.soundButton = this.add.image(250, 300, "checkedBox");
    this.soundText = this.add.text(300, 290, "Sound Enabled", { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on(
      "pointerdown",
      function () {
        this.model.musicOn = !this.model.musicOn;
        this.updateAudio();
      }.bind(this)
    );

    this.soundButton.on(
      "pointerdown",
      function () {
        this.model.soundOn = !this.model.soundOn;
        this.updateAudio();
      }.bind(this)
    );

    this.menuButton = new Button(
      this,
      config.width / 2,
      config.height - 100,
      "blueButton2",
      "blueButton3",
      "Menu",
      "Title"
    );

    this.updateAudio();
  }

  updateAudio() {
    if (!this.model.musicOn) {
      this.musicButton.setTexture("box"); // uncheck checkbox image
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture("checkedBox");
      if (!this.model.bgMusicPlaying) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (!this.model.soundOn) {
      this.soundButton.setTexture("box"); // uncheck checkbox image
    } else {
      this.soundButton.setTexture("checkedBox");
    }
  }
}
