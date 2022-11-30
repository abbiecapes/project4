function uterus(){  
  let uterus;

  this.enter = function() {
    background(100,0,0)
    uterusimage = loadImage("uterus.jpg");
  }


  this.draw = function() {
    image("uterus.jpg", 0, 0);
 
  }

  this.mouseClicked = function() {
     { 
      this.sceneManager.showScene(brain);  
    }
  }
}
