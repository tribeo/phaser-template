import "phaser";
import Phaser from "phaser";
import config from "../Config/config";

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super("Credits");
  }

  create() {
    this.creditsText = this.add.text(0, 0, "Credits", {
      fontSize: "32px",
      fill: "#fff",
    });
    this.madeByText = this.add.text(0, 0, "Created by: tribeo", {
      fontSize: "26px",
      fill: "#fff",
    });
    this.zone = this.add.zone(
      config.width / 2,
      config.height / 2,
      config.width,
      config.height
    );

    Phaser.Display.Align.In.Center(this.creditsText, this.zone);
    Phaser.Display.Align.In.Center(this.madeByText, this.zone);

    this.madeByText.setY(700);

    // to our text scroll off the screen
    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: 10, // the y position of our game object that we want it to end up at.
      ease: "Power1", // the ease function that this tween will use.
      duration: 3000, // how long we would like the tween to last
      delay: 1000, // how long we want the tween to wait before it starts running.
      // allback function that will be called once the tween is complete
      onComplete: function () {
        this.destroy;
      },
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: 100,
      ease: "Power1",
      duration: 5000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
        this.scene.start("Title");
      }.bind(this),
    });
  }
}
