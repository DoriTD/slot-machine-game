import * as PIXI from "pixi.js";
export default class Reel {
  constructor(app) {
    this.images = [];
    for (let i = 1; i <= 12; i++) {
      let img = new PIXI.Sprite(
        PIXI.loader.resources[`./assets/${i}.png`].texture
      );
      this.images.push(img);
    }
    this.initialPosition = Math.round(Math.random() * 11);
    this.cellWidth = Math.round(app.renderer.width / 5);
    this.cellHeight = Math.round(app.renderer.height/3);
    
    
  }
}
