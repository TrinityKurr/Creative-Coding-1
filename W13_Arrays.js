var x = 50;
var y = 50;
var sx = 50;
var sy = 50;
var sd = 25;
var mousex = 0;
var mousey = 0;
var mySXs = [];
var mySYs = [];
var mySDs = [];
var myFill = [];
    function setup() 
    {
      createCanvas(800, 600);
      
      for(var i = 0; i < 5; i++)
        {   
            mySXs[i] = getRandomX(800);
            mySYs[i] = getRandomY(600);
            mySDs[i] = getRandomD(100);
            myFill[i] = getRandomColor(256);

        }
        
    }

    function draw() 
    {
      background(24, 200, 29);
      createPlayer();
      mouseClicked();
      movePlayer();
      generateExit();
      youWin();
      createShapes();
      moveShapes();
      console.log("Hi");
      
    }
    function createShapes()
    {
        for(var i = 0; i < mySXs.length; i++)
        {
            fill(myFill[i]);
            circle(mySXs[i], mySYs[i], mySDs[i]);
            
        }
    }
    function moveShapes()
    {
        for(var i = 0; i < mySXs.length; i++)
        {
            mySXs[i] += Math.floor(Math.random()*10);
            mySYs[i] += Math.floor(Math.random()*10);
            console.log("0");
        
        if (mySXs[i]>=800)
        {
            mySXs[i] = 10;
            mySXs[i] += Math.floor(Math.random()*10);
            mySYs[i] -= Math.floor(Math.random()*10);
            console.log("1");
        }
        else if (mySXs[i]<=0)
        {
            mySXs[i] = 790;
            mySXs[i] -= Math.floor(Math.random()*10);
            mySYs[i] += Math.floor(Math.random()*10);
            console.log("2");
        }
        if (mySYs[i]>=600)
        {
            mySYs[i] = 10;
            mySXs[i] += Math.floor(Math.random()*10);
            mySYs[i] += Math.floor(Math.random()*10);
            console.log("3");
        }
        else if (mySYs[i]<=0)
        {
            mySYs[i] = 590;
            mySXs[i] -= Math.floor(Math.random()*10);
            mySYs[i] -= Math.floor(Math.random()*10);
            console.log("4");
        }
        }
    }
    function createPlayer()
    {
        fill(0);
        circle(x,y,25);

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
    function mouseClicked() 
    {  
        var mousex = mouseX;
        var mousey = mouseY;
        fill('purple');
        square(mousex, mousey,35);
    }
    function getRandomX(sx)
    {
        return Math.floor(Math.random()*sx)+10;
    }

    function getRandomY(sy)
    {
        return Math.floor(Math.random()*sy)+10;
    }

    function getRandomD(sd)
    {
        return Math.floor(Math.random()*sd)+10
    }
    function getRandomColor()
    {
        return Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)
    }