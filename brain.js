function brain() {  
  let brain;

  this.setup = function()  {
    brain = loadImage ("card1.jpg");
  }

  this.draw = function() {
    image(brain,0,0);
  }

  this.mouseClicked = function() {
    this.sceneManager.showScene(breast);
  }
}