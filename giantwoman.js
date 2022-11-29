function giantwoman() {
  let giantwoman;

  this.setup = function() {
    giantwoman = loadImage("giant woman.jpg")
  }

  this.draw = function(){
    image(giantwoman,0,0);
  }

  this.mouseClicked = function() {
    this.sceneManager.showScene(uterus);
  }
}