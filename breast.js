function breast(){ 
  let breast;

  this.enter = function() {
    breast = loadImage ("breast.jpg");
  }

  this.draw = function() {
    image(breast,0,0);
  }

  this.mouseClicked = function() {
    this.sceneManager.showScene(giantwoman);
  }
}