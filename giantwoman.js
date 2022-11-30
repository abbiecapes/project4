function giantwoman() {
  let giantwoman;

  this.setup = function() {
    giantwoman = loadImage("giant woman.jpg")
    background(100,0,0)
  }

  this.draw = function(){
    image(giantwoman,450,30);
    text('the female body.', 20,20)
    text('the female body is a terrifying and confusing organism, piloted by women', 50, 50,)
    text('tho think they know better than our government, and the men of our country.', 60, 80)
    text('Women these days think bodily autonomy is the best thing since sliced bread,', 20, 100)
    text('thinking that their right to choose is more important that providing children to the world', 50, 120)
    text("now on with the anatomy lesson", 50, 200)
  }

  this.mouseClicked = function() {
    this.sceneManager.showScene(uterus);
  }
}
