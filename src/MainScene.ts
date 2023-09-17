import { Scene } from "phaser";

export default class MainScene extends Scene {
  preload() {
    this.load.setBaseURL("http://labs.phaser.io/assets");

    this.load.image("sky", "sky.png");
    this.load.image("ground", "platform.png");
    this.load.image("star", "star.png");
    this.load.image("bomb", "bomb.png");
    this.load.spritesheet("dude", "dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {}

  update() {}
}
