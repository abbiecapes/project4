function uterus(){  
  let uterus;

  this.setup = function() {

    uterusimage = loadImage("uterus.jpg");
  }


  this.draw = function() {
  image(uterus.jpg);
  }

  this.mouseClicked = function() {
    if (dist(mouseX,mouseY,width/2,height/2) < circleSize/2) { 
      this.sceneManager.showScene(brain);  
    }
  }
}