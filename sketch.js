function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  noFill()
  stroke(225)
  
  for(var j=-1;j<int(height/50);j++){
    for(var i=-1;i<int(width/50);i++){
      stroke("#f15bb5")
      ellipse(25+(i*50),25+(j*50),mouseX/30)
      stroke("#ffca3a")
      rectMode(CENTER)
      rect(25+(i*50),25+(j*50),mouseX/30)
      stroke("#0081a7")
      ellipse(50+(i*50),50+(j*50),mouseX/30)
    }
    
  }
}
