import Phaser, { Types as pTypes } from "phaser";
import MainScene from "@MainScene";

export default class Game {
  config: pTypes.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: MainScene,
  };

  game = new Phaser.Game(this.config);
}
