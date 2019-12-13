var rx = 157;
var lx = 243;
var y = 385;
var mx1 = 175;
var my1 = 105;
var mx2 = 225;
var my2 = 105;
var s = 30;
var v = 5;
var m1 = Math.floor(Math.random() * 10);
var m2 = Math.floor(Math.random() * 10);
var m3 = Math.floor(Math.random() * 10);
var m4 = Math.floor(Math.random() * 10);
function setup()
{
    createCanvas(400,400);
}
function draw()
{
    background(255,200,60);
    signature();
    console.log("1");
    size();
    myShape();
    console.log("2");
    moveX();
    console.log("3");
    movey();
    console.log("4");
    moveBun();
}
function moveX(){
    if(rx >= 400){
        m1 *= -1;
        rx += m1;
    }
    else if(rx <= 0){
        m1 *= -1;
        rx+= m1;
    }
    if(lx >= 400){
        m1 *= -1;
        lx += m1; 
    }
    else if(lx <= 0){
        m1 *= -1;
        lx += m1;
    }
}
function movey(){
    if(y >= 400){
        m2 *= -1;
        y += m2; 
    }
    else if(y <= 0){
        m2 *= -1;
        y += m2;
    }
}
function moveBun(){
    if (mx1 >= 400 || my1 >= 400){
        m3 *= -1;
        mx1 += m3;
        my1 += m3;
    }
    else if(mx1 <= 0 || my1 <= 0){
        m3 *= -1;
        mx1 += m3;
        my1 += m3;
    }
    if(mx2 <= 0 || my2 <= 0){
        m4 *= -1;
        mx2 -= m4;
        my2 += m4; 
    }
   
}
function myShape(){
    rx += m1;
    lx += m1;
    y += m2;
    mx1 += m3;
    my1 += m3;
    mx2 += m4 * -1;
    my2 += m4;
    circle(mx1,my1,20);//r minibun
    circle(mx2,my2,20);//l minibun
    ellipse(200,175,84,150);//hair
    ellipse(rx,146,10,24); //right Ear
    ellipse(lx,146,10,24);//left Ear
    triangle(135,236,200,210,265,236,OPEN);//shoulder
    rect(180,190,40,30);//neck
    quad(135,235,155,260,135,375,115,375);//r arm
    circle(125,y,30);//r hand
    quad(265,235,245,260,265,375,285,375);//l arm
    circle(275,y,30);//l hand
    ellipse(200,380,120,100);
    beginShape();//body
      vertex(265, 235);
      vertex(245,260);
      vertex(240, 320);
      vertex(260, 370);
      vertex(140, 370);
      vertex(160, 320);
      vertex(155,260);
      vertex(135, 235);
    endShape(OPEN);
    arc(170, 275, 38, 38, HALF_PI, PI + QUARTER_PI, OPEN);//r breast
    arc(230, 275, 38, 38, 0 - QUARTER_PI, HALF_PI, OPEN);//l breast
    line(195,235,195,370);
    line(205,235,205,370);
    arc(200, 215, 40, 60, 0, PI, OPEN);//neck line
    circle(200,250,4);//b1
    circle(200,270,4);
    circle(200,290,4);
    circle(200,310,4);
    circle(200,330,4);
    circle(200,350,4);
    ellipse(200,150,84,104);//head
    arc(200,135,85,80,PI,0,OPEN);//bangs
    arc(200,135,80,50,PI,0,OPEN);//bangs
    line(200,95,200,110);
    line(158,134,169,144);//right
    line(195,144,205,144);//mid
    line(231,144,242,134);//left
    ellipse(182,146,26,20);//r glass
    ellipse(183,145,15,10);//r eye
    circle(183,145,8);//r iris
    point(183,145);//r pupil
    ellipse(218,146,26,20);//l glass
    ellipse(217,145,15,10);//l eye
    circle(217,145,8);//l iris
    point(217,145);//l pupil
    circle(196,163,5);//nostral
    circle(204,163,5);//nostral
    circle(200,163,8.5);//nose
    arc(200, 175, 32, 20, 0, PI, CHORD);//mouth
    ellipse(200,182,20,5);//toungue
    textSize(20);
    textFont("AR Blanca");
    text('Trinity Kurr', 275, 385);
    
}
function signature(){
    textSize(s);
    textFont("Impact");
    text('In Shapes',120,60);
    s += v;
}
function size(){
    if(s<=30){
        v *= -1;
        s += v;
    }
    else if(s>=55){
        v *= -1;
        s += v;
    }
}