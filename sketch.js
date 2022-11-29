let mgr;

function setup() {
    createCanvas(1280,657);
    mgr = new SceneManager();
    mgr.wire();
    mgr.showScene(giantwoman);
}

function draw(){
mgr.draw();
}