var x = 100;
function setup()
{
    createCanvas(800,600);
}
function draw() 
{
  background(123,28,38);
  circle(x,100,50);
  
}
function keyPressed() 
{
  if (key == 'd') 
  {
    x+=15;
  } 
  else if (key == 'a') 
  {
    x-=15;
  }
}