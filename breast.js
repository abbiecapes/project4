function breast(){ 
  let breast;

  this.setup = function() {
    breast = loadImage ("card2.jpg");
  }

  this.draw = function() {
    image(breast,0,0);
  }

  this.mouseClicked = function() {
    this.sceneManager.showScene(giantwoman);
  }
}