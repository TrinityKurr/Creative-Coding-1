function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255,182,193);
  circle(175,105,20);//r minibun
  circle(225,105,20);//l minibun
  ellipse(200,175,84,150);//hair
  ellipse(157,146,10,24); //right Ear
  ellipse(243,146,10,24);//left Ear
  triangle(135,236,200,210,265,236,OPEN);//shoulder
  rect(180,190,40,30);//neck
  quad(135,235,155,260,135,375,115,375);//r arm
  circle(125,385,30);//r hand
  quad(265,235,245,260,265,375,285,375);//l arm
  circle(275,385,30);//l hand
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
  textSize(30);
  textFont("Impact");
  text('In Shapes',140,60)
}