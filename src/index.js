import * as PIXI from "pixi.js";
import Reel from "./reel";
//Aliases
let Application = PIXI.Application,
  Container = PIXI.Container,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new Application({
  antialiasing: true,
  transparent: false,
  resolution: 1
});

//Add the canvas to the HTML document
document.body.appendChild(app.view);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";

for (let i = 1; i <= 12; i++) {
  loader.add(`./images/${i}.png`);
}
loader.load(setup);

function setup() {
 
  const reel = new Reel(app);
  // console.log(reel.initialPosition)

  //app.stage.addChild(images[3]);

  // Listen for frame updates
  app.ticker.add(() => {
    //bunny.rotation += 0.01;
  });
}
