var x = 50;
var y = 50;
var sx = 400;
var sy = 300;
var cx = 400;
var cy = 300;
var mousex=0;
var mousey=0;
var movement1 = Math.floor(Math.random()*10);
var movement2 = Math.floor(Math.random()*10);
    function setup() 
    {
      createCanvas(800, 600);
    }

    function draw() 
    {
      background(24, 200, 29);
      createPlayer();
      
      movePlayer();
      generateExit();
      youWin();
      shape1();
      shape2();
      moveShape1();
      moveShape2();
      fill('purple');
      ellipse(mousex, mousey, 20, 35);
    }
    function shape1()
    {
        fill('blue');
        square(sx,sy,20);
        sx += movement1;
        sy += movement1;
    }
    function moveShape1()
    {
        if (sx >= 800)
        {
            movement1 *= -1;
            sx += movement1;
        }
        else if (sx <= 0)
        {
            movement1 *= -1;
            sx += movement1;
        }
        if (sy >= 600)
        {
            movement1 *= -1;
            sy += movement1;
        }
        else if (sy <= 0)
        {
            movement1 *= -1;
            sy += movement1;
        }
    }
    function shape2()
    {
        fill('yellow');
        circle(cx,cy,30);
        cx += movement2;
        cy += movement2;
    }
    function moveShape2()
    {
        if (cx >= 800)
        {
            movement2 *= -1;
            cx += movement2;
        }
        else if (cx <= 0)
        {
            movement2 *= -1;
            cx += movement2;
        }
        if (cy >= 600)
        {
            movement2 *= -1;
            cy += movement2;
        }
        else if (cy <= 0)
        {
            movement2 *= -1;
            cy += movement2;
        }
    }
    function createPlayer()
    {
        fill(0);
        circle(x,y,50);

    }
    function youWin()
    {
        if (x >= 790 && y<=320 && y>=280)
        {
            x=50;
            y=50;
            movement1 = Math.floor(Math.random()*10);
            movement2 = Math.floor(Math.random()*10);
            window.alert('You Win!');
        }
        else
        {
            movePlayer();
        }
       
    }
    function generateExit()
    {
        fill('white');
        rect(775,260,25,80);
        fill('red');
        text('EXIT',778,305);
        textFont('impact');
    }
    function movePlayer()
    {
        if (x >= 800) 
        {
            x = 50;
        }
        else if (x <= 0)
        {
            x = 750;
        }
        
        if (keyIsDown(83)) 
        {
            y += 5;
        } 
        else if (keyIsDown(87)) 
        {
            y -= 5;
        }

        if (keyIsDown(68))
        {
            x += 5;
        }
        else if (keyIsDown(65))
        {
            x -= 5;
        }

        if (y >= 600) 
        {
            y = 50;
        }
        else if (y <= 0)
        {
            y = 550;
        }
    }
    function mousePressed() 
    {  
        mousex = mouseX;
        mousey = mouseY;
    }
   