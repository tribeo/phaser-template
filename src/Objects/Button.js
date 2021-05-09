import "phaser";
import Phaser from "phaser";

export default class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, originAsset, hoverAsset, text, targetScene) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;

    // // listened for the pointerdown event on our gameButton game object
    // // when a player clicks on that game object
    // this.gameButton.on(
    //   "pointerdown",
    //   function (pointer) {
    //     this.scene.start("Game");
    //   }.bind(this)
    // );

    // create a new sprite
    // make it interactive => Phaser will fire different events when the player interacts with that object
    // events include when a player mouses over an object or when they click on it.
    this.button = this.scene.add.sprite(0, 0, originAsset).setInteractive();
    // centerButton which will be used for centering our UI buttons in our game

    // create a new text game object
    this.text = this.scene.add.text(0, 0, text, {
      fontSize: "32px",
      fill: "#fff",
    });
    // will be used for centering the text game object in the center of the UI button
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    // what scene started when click button
    this.button.on(
      "pointerdown",
      function () {
        this.scene.scene.start(targetScene);
      }.bind(this)
    );

    // hover effective
    this.button.on(
      "pointerover",
      function () {
        this.button.setTexture(hoverAsset);
      }.bind(this)
    );

    this.button.on(
      "pointerout",
      function () {
        this.button.setTexture(originAsset);
      }.bind(this)
    );

    this.scene.add.existing(this);
  }
}
