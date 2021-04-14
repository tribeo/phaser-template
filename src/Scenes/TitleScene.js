import "phaser";
import config from "../Config/config";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {}

  create() {
    // ************ for Game ************ //
    // create a new sprite
    // make it interactive => Phaser will fire different events when the player interacts with that object
    // events include when a player mouses over an object or when they click on it.
    this.gameButton = this.add.sprite(100, 200, "blueButton2").setInteractive();
    // centerButton which will be used for centering our UI buttons in our game
    this.centerButton(this.gameButton, 1);

    // create a new text game object
    this.gameText = this.add.text(0, 0, "Play", {
      fontSize: "32px",
      fill: "#fff",
    });
    // will be used for centering the text game object in the center of the UI button
    this.centerButtonText(this.gameText, this.gameButton);

    // listened for the pointerdown event on our gameButton game object
    // when a player clicks on that game object
    this.gameButton.on(
      "pointerdown",
      function (pointer) {
        this.scene.start("Game");
      }.bind(this)
    );

    // ************ for Options ************ //
    this.optionsButton = this.add
      .sprite(100, 200, "blueButton2")
      .setInteractive();
    this.centerButton(this.optionsButton, 0);

    this.optionsText = this.add.text(0, 0, "Options", {
      fontSize: "32px",
      fill: "#fff",
    });
    this.centerButtonText(this.optionsText, this.optionsButton);

    this.optionsButton.on("pointerdown", function (pointer) {
      this.scene.start("Options");
    }.bind(this));

    // ************ for Credits ************ //
    this.creditsButton = this.add
      .sprite(100, 200, "blueButton2")
      .setInteractive();
    this.centerButton(this.creditsButton, -1);

    this.creditsText = this.add.text(0, 0, "Credits", {
      fontSize: "32px",
      fill: "#fff",
    });
    this.centerButtonText(this.creditsText, this.creditsButton);

    this.creditsButton.on("pointerdown", function (pointer) {
      this.scene.start("Credits");
    }.bind(this));

    // ************ for all buttons ************ //
    // to give our UI buttons a hover effect
    this.input.on("pointerover", function (event, gameObjects) {
      gameObjects[0].setTexture("blueButton3");
    });
    this.input.on("pointerout", function (event, gameObjects) {
      gameObjects[0].setTexture("blueButton2");
    });
  }

  // offset => the amount we want to offset the game object Vertically.
  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        config.width / 2,
        config.height / 2 - offset * 100,
        config.width,
        config.height
      )
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(gameText, gameButton);
  }
}
