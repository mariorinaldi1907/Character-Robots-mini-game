

// Game Project - N MARIO RINALDI 

        var charMarioRinaldi_x;
        var charMarioRinaldi_y;
        var charMarioRinaldi_world_x;
        var poshGreenGrass_y;
        var charMarioRinaldi_length;
        var isMarioMovingLeft;
        var isMarioMovingRight;
        var marioRinaldiPlummeting;
        var isMarioDecending;
        var myCrystallisedCoin;
        var lonelyDeepCanyon;
        var crunchyAppleTrees;
        var puffyWhiteClouds;
        var favouriteMountain;
        var cameraFollowingMarioX;
        var superRinaldiSun;
        var mariorinGameScore;
        var f1typeFlagpole;
        var mariorinlives;
        var koGameOver;
        var marioEnemies;
        var mariorinhitbymarioEnemy;

        
        function setup()
        {
            createCanvas(1025, 578);
            mariorinlives = 3;
            
            startGame();
        }
        function startGame()
        {
            createCanvas(1025, 578);
            poshGreenGrass_y = height * 3/4;
            charMarioRinaldi_x = width/2;
            charMarioRinaldi_y = poshGreenGrass_y;
            charMarioRinaldi_length =41;
            mariorinGameScore = 0;

            isMarioMovingLeft =false;
            isMarioMovingRight = false;
            marioRinaldiPlummeting = false;
            isMarioDecending = false;
            mariorinhitbymarioEnemy = false;
            myCrystallisedCoin= [{ x_pos:-200,y_pos:poshGreenGrass_y-20,size:50, isFound: false},
                                    { x_pos:200,y_pos:poshGreenGrass_y-20,size:50, isFound: false},
                                  { x_pos:600,y_pos:poshGreenGrass_y-20,size:50, isFound: false},
                                  { x_pos:1000,y_pos:poshGreenGrass_y-20,size:50, isFound: false},
                                    {x_pos:1300,y_pos:poshGreenGrass_y-20,size:50, isFound: false},
                                    {x_pos:1900,y_pos:poshGreenGrass_y-20,size:50, isFound: false},
                                    {x_pos:2300,y_pos:poshGreenGrass_y-20,size:50, isFound: false}]; 
                                    
           
            lonelyDeepCanyon =[{x_pos:300,Width:100},{x_pos:1300,Width:100},{x_pos:2200,Width:100}];
            
            f1typeFlagpole = {x_pos:3000, isReached:false};
            
            puffyWhiteClouds=[{pos_x:-1200,pos_y:90},{pos_x:-900,pos_y:70},
                              {pos_x:-600,pos_y:100},{pos_x:-300,pos_y:85},
                              {pos_x:-1500,pos_y:90},{pos_x:0,pos_y:120},
                              {pos_x:300,pos_y:90},{pos_x:600,pos_y:60},
                              {pos_x:900,pos_y:130},{pos_x:1200,pos_y:90},
                              {pos_x:1500,pos_y:110}];
            
            favouriteMountain = [
            {pos_x: -800,pos_y:poshGreenGrass_y -145,Width :280,Height : 290},
            {pos_x: -200,pos_y:poshGreenGrass_y -145,Width :280,Height : 290},
            {pos_x: 800,pos_y:poshGreenGrass_y -145,Width :280,Height : 290},
            {pos_x: 1500,pos_y:poshGreenGrass_y -145,Width :280,Height : 290},
            {pos_x: 2100,pos_y:poshGreenGrass_y -145,Width :280,Height : 290},
            {pos_x: 2700,pos_y:poshGreenGrass_y -145,Width :280,Height : 290}
            ];
              
            crunchyAppleTrees=[-600,-200,200,450,1200,1600,2000,2400];
            
            superRinaldiSun= {x_pos:900,y_pos:80,size:100};
            
            marioEnemies = [];
            marioEnemies.push(createmarioEnemy(0,poshGreenGrass_y-10,100));
            marioEnemies.push(createmarioEnemy(2400,poshGreenGrass_y-10,100));
            marioEnemies.push(createmarioEnemy(800,poshGreenGrass_y-10,100));
            marioEnemies.push(createmarioEnemy(1600,poshGreenGrass_y-10,100));
            
            //koGameOver
            koGameOver = false;
            
            cameraFollowingMarioX = 0;     
        }

        function draw()
        {
             cameraFollowingMarioX =charMarioRinaldi_x - width/2;
            ///////////DRAWING CODE//////////
            background(150,191,255); //fill the sky blue
            noStroke();
            fill(0,150,0);
            rect(0, poshGreenGrass_y, width, height - poshGreenGrass_y); //draw some green ground
            push();
            translate(-cameraFollowingMarioX,0);
            
            //draw brightsun
            drawsuperRinaldiSun();
            
            //drawfavouriteMountain
            drawfavouriteMountain();
            
            //puffyWhiteClouds
            drawpuffyWhiteClouds();
            
            //lonelyDeepCanyon
            drawlonelyDeepCanyon(lonelyDeepCanyon);
            //fallthroughDeepCanyon
            checklonelyDeepCanyon(lonelyDeepCanyon);
            
            // draw crunchyAppleTrees 
            drawcrunchyAppleTrees();
            
           //myCrystallisedCoin
           //draw and check the collectable
            drawmyCrystallisedCoin(myCrystallisedCoin);
            checkmyCrystallisedCoinfound(myCrystallisedCoin);
            
            //f1typef1typeFlagpole
            checkIfGameCharReachf1typeFlagpole();
            drawf1typeFlagpole();
            
            //checking player lives
            checkifplayerdie();
            
            //enimies
            drawmarioEnemies();
            checkmariorinhitbymarioenemy();
            
            //the game character
            if(isMarioMovingLeft && isMarioDecending)
            {
                drawisMarioMovingLeftDecending();
            }
            
            else if(isMarioMovingRight && isMarioDecending)
            {
                drawisMarioMovingRightDecending();
            }
            
            else if(isMarioMovingLeft)
            {
                drawisMarioMovingLeft();
            }
            
            else if(isMarioMovingRight)
            {
               drawisMarioMovingRight();
            }
            
            else if(isMarioDecending || marioRinaldiPlummeting)
            {
                drawisMarioDecendingorPlummeting();
            }
            
            else
            {
              drawisMarioStandingStraight();
            }
            
            pop();
            
            ///////////INTERACTION CODE//////////
            //Put conditional statements to move the game character below here
            if(mariorinhitbymarioEnemy)
            {
                koGameOver = true;
                mariorinlives = 0;
            }
            
            if(isMarioMovingLeft == true)
                {
                    charMarioRinaldi_x -=5;
                }
            else if(isMarioMovingRight == true)
                {
                    charMarioRinaldi_x +=5;
                }
            if (charMarioRinaldi_y < poshGreenGrass_y)
                {
                    charMarioRinaldi_y +=2;
                    isMarioDecending = true;
                    checkifplayerdie();
                }
            else 
                {
                    isMarioDecending = false;
                }
            drawmariorinGameScore(); 
            //life tokens
            drawlifeTokens();
             //checking if the game is over
            if(koGameOver)
            {
                drawkoGameOver();
                charMarioRinaldi_x = width/2;
                charMarioRinaldi_y = poshGreenGrass_y;
                return;
            }
            
        }

        function keyPressed()
        {
            // if statements to control the animation of the character when
            // keys are pressed.
            if(koGameOver)
            {
                return;
            }
            //open up the console to see how these work
            console.log("keyPressed: " + key);
            console.log("keyPressed: " + keyCode);

            if(keyCode == 37)
            {
                console.log("left arrow");
                isMarioMovingLeft = true;
            }
            else if(keyCode == 39)
            {
                console.log("right arrow");
                isMarioMovingRight = true;
            }
            if (keyCode == 38 && marioRinaldiPlummeting == false && isMarioDecending == false)
            {
                if (charMarioRinaldi_y >= poshGreenGrass_y)
                    {
                        console.log("up arrow"); 
                        charMarioRinaldi_y -= 100;
                        isMarioDecending = true;
                    }
            }
        }

        function keyReleased()
        {
            if(koGameOver)
            {
                return;
            }
            // if statements to control the animation of the character when
            // keys are released.
            console.log("keyReleased: " + key);
            console.log("keyReleased: " + keyCode);
            if(keyCode == 37)
            {
                console.log("left arrow");
                isMarioMovingLeft = false;
            }
            else if(keyCode == 39)
            {
                console.log("right arrow");
                isMarioMovingRight = false;
            }
            else if (keyCode == 38 )
            {
                console.log("up arrow"); 
                marioRinaldiPlummeting = false;
            }
        }
        
        function drawsuperRinaldiSun()
         {
            fill(255,170,0);
            ellipse(superRinaldiSun.x_pos,superRinaldiSun.y_pos,superRinaldiSun.size+40);
            fill(255,200,0);
            ellipse(superRinaldiSun.x_pos,superRinaldiSun.y_pos,superRinaldiSun.size);
            fill(255,190,0);
            ellipse(superRinaldiSun.x_pos,superRinaldiSun.y_pos,superRinaldiSun.size-40);
         }
        
        function drawpuffyWhiteClouds()
        {
            for (var i=0; i<puffyWhiteClouds.length; i++)
            {
                fill(250,250,240);
                strokeWeight(0);
                ellipse(puffyWhiteClouds[i].pos_x,puffyWhiteClouds[i].pos_y ,100,70);
                ellipse(puffyWhiteClouds[i].pos_x+60,puffyWhiteClouds[i].pos_y ,100,70);
                ellipse(puffyWhiteClouds[i].pos_x-10,puffyWhiteClouds[i].pos_y-20 ,100,70);
                ellipse(puffyWhiteClouds[i].pos_x+40,puffyWhiteClouds[i].pos_y-20 ,100,70);
                puffyWhiteClouds[i].pos_x = puffyWhiteClouds[i].pos_x+1;
            }
        }
            
        function drawfavouriteMountain()
        {
                for (var i=0; i<favouriteMountain.length; i++)
                {
                    stroke(47,79,79);
                    strokeWeight(3);
                    fill(85,107,47);
                    beginShape();
                    vertex (favouriteMountain[i].pos_x - favouriteMountain[i].Width, 
                            favouriteMountain[i].pos_y+ favouriteMountain[i].Height/2);
                    vertex (favouriteMountain[i].pos_x - favouriteMountain[i].Width/2, 
                            favouriteMountain[i].pos_y- favouriteMountain[i].Height/2.5);
                    vertex (favouriteMountain[i].pos_x + favouriteMountain[i].Width/4,
                            favouriteMountain[i].pos_y );
                    vertex (favouriteMountain[i].pos_x + favouriteMountain[i].Width, 
                            favouriteMountain[i].pos_y- favouriteMountain[i].Height/3.5);
                    vertex (favouriteMountain[i].pos_x+464,poshGreenGrass_y);
                   endShape(); 
                    fill(255,240,240);
                    strokeWeight(0);
                triangle(
                    favouriteMountain[i].pos_x-192,favouriteMountain[i].pos_y-20,
                    favouriteMountain[i].pos_x-54,favouriteMountain[i].pos_y-70,
                    favouriteMountain[i].pos_x-140,favouriteMountain[i].pos_y-115);
                triangle(
                    favouriteMountain[i].pos_x-192,favouriteMountain[i].pos_y-20,
                    favouriteMountain[i].pos_x-100,favouriteMountain[i].pos_y-70,
                    favouriteMountain[i].pos_x-120,favouriteMountain[i].pos_y-30);
                triangle (
                    favouriteMountain[i].pos_x+315,favouriteMountain[i].pos_y-40,
                    favouriteMountain[i].pos_x+200,favouriteMountain[i].pos_y-55,
                    favouriteMountain[i].pos_x+280,favouriteMountain[i].pos_y-83);
                triangle (
                    favouriteMountain[i].pos_x+315,favouriteMountain[i].pos_y-40,
                    favouriteMountain[i].pos_x+240,favouriteMountain[i].pos_y-55,
                    favouriteMountain[i].pos_x+280,favouriteMountain[i].pos_y);
                fill(47,79,79);
                strokeWeight(0);
                triangle(
                  favouriteMountain[i].pos_x-200,favouriteMountain[i].pos_y+145,
                  favouriteMountain[i].pos_x+200,favouriteMountain[i].pos_y+145,
                  favouriteMountain[i].pos_x,favouriteMountain[i].pos_y-200);
                triangle(
                  favouriteMountain[i].pos_x+50,favouriteMountain[i].pos_y+145,
                  favouriteMountain[i].pos_x+350,favouriteMountain[i].pos_y+145,
                  favouriteMountain[i].pos_x+200,favouriteMountain[i].pos_y-100);
                fill(60,79,79);
                ellipse(favouriteMountain[i].pos_x+10,favouriteMountain[i].pos_y,100,100);
                ellipse(favouriteMountain[i].pos_x-90,favouriteMountain[i].pos_y+50,20,20);
                ellipse(favouriteMountain[i].pos_x+100,favouriteMountain[i].pos_y+90,50,50);
                ellipse(favouriteMountain[i].pos_x+200,favouriteMountain[i].pos_y+40,80,80);
                strokeWeight(0);
                fill(255,240,240);
                 triangle (
                    favouriteMountain[i].pos_x-58,favouriteMountain[i].pos_y-100,
                    favouriteMountain[i].pos_x,favouriteMountain[i].pos_y-100,
                    favouriteMountain[i].pos_x-20,favouriteMountain[i].pos_y-60);
                triangle (
                    favouriteMountain[i].pos_x-58,favouriteMountain[i].pos_y-100,
                    favouriteMountain[i].pos_x+58,favouriteMountain[i].pos_y-100,
                    favouriteMountain[i].pos_x,favouriteMountain[i].pos_y-200);
                triangle (
                    favouriteMountain[i].pos_x-58,favouriteMountain[i].pos_y-100,
                    favouriteMountain[i].pos_x+50,favouriteMountain[i].pos_y-100,
                    favouriteMountain[i].pos_x+30,favouriteMountain[i].pos_y-70);
                triangle (
                    favouriteMountain[i].pos_x+237,favouriteMountain[i].pos_y-40,
                    favouriteMountain[i].pos_x+163,favouriteMountain[i].pos_y-40,
                    favouriteMountain[i].pos_x+200,favouriteMountain[i].pos_y-100);
                triangle (
                    favouriteMountain[i].pos_x+237,favouriteMountain[i].pos_y-40,
                    favouriteMountain[i].pos_x+185,favouriteMountain[i].pos_y-40,
                    favouriteMountain[i].pos_x+200,favouriteMountain[i].pos_y-20);
             }
        }
        
        function drawcrunchyAppleTrees()
        {
            for ( var i=0;i<crunchyAppleTrees.length;i++)
            {
                fill(139,69,19);
                strokeWeight(0);
                rect(crunchyAppleTrees[i],poshGreenGrass_y-142,50,145);
                fill(46,139,87);
                ellipse(crunchyAppleTrees[i] + 30,  poshGreenGrass_y -122,  90, 70);
                ellipse(crunchyAppleTrees[i] + 50,  poshGreenGrass_y -162,  90, 70);
                ellipse(crunchyAppleTrees[i] - 20,  poshGreenGrass_y -117,  90, 70);
                ellipse(crunchyAppleTrees[i] +70, poshGreenGrass_y -117,  90, 70);
                ellipse(crunchyAppleTrees[i] - 5,  poshGreenGrass_y -162,   90, 70);
                ellipse(crunchyAppleTrees[i]+20,  poshGreenGrass_y -212,  90, 70);
                fill(139,0,0);
                ellipse(crunchyAppleTrees[i] + 30,  poshGreenGrass_y -122, 10);
                ellipse(crunchyAppleTrees[i] + 50,  poshGreenGrass_y -162,  10);
                ellipse(crunchyAppleTrees[i] - 20,  poshGreenGrass_y -117, 10);
                ellipse(crunchyAppleTrees[i] +70, poshGreenGrass_y -117, 10);
                ellipse(crunchyAppleTrees[i] - 5,  poshGreenGrass_y -162, 10);
                ellipse(crunchyAppleTrees[i]+20,  poshGreenGrass_y -212, 10);
                ellipse(crunchyAppleTrees[i] - 5,  poshGreenGrass_y , 12);
                ellipse(crunchyAppleTrees[i]+20,  poshGreenGrass_y , 12);
                ellipse(crunchyAppleTrees[i] + 50,  poshGreenGrass_y,  12);
            }
        }
        
        function drawmyCrystallisedCoin(t_myCrystallisedCoin)
        {
            for(var i=0; i < myCrystallisedCoin.length; i++)
            {
                if (t_myCrystallisedCoin[i].isFound == false)   
                {
                fill(255,215,10);
                stroke(0);
                strokeWeight(3);           ellipse(t_myCrystallisedCoin[i].x_pos,t_myCrystallisedCoin[i].y_pos,t_myCrystallisedCoin[i].size,t_myCrystallisedCoin[i].size);
                fill(255);
                strokeWeight(0);
                triangle(t_myCrystallisedCoin[i].x_pos,t_myCrystallisedCoin[i].y_pos-20,t_myCrystallisedCoin[i].x_pos-22,t_myCrystallisedCoin[i].y_pos+10,t_myCrystallisedCoin[i].x_pos+20,t_myCrystallisedCoin[i].y_pos+12);
                //make the anchor point 
                fill(255,0,0);
                ellipse(t_myCrystallisedCoin[i].x_pos,t_myCrystallisedCoin[i].y_pos,9,9);
                }
            }
        }      
        function checkmyCrystallisedCoinfound(t_myCrystallisedCoin)
        {
            for(var i=0; i < myCrystallisedCoin.length; i++)
            {
                if(t_myCrystallisedCoin[i].isFound==false)
                {
                    var d = dist(charMarioRinaldi_x,charMarioRinaldi_y,t_myCrystallisedCoin[i].x_pos,t_myCrystallisedCoin[i].y_pos)
                    if(d<30)
                    {
                    t_myCrystallisedCoin[i].isFound=true;
                    mariorinGameScore++;
                    }
                }
            }  
        }

        function drawlonelyDeepCanyon(t_lonelyDeepCanyon)
        {
            for(var i=0; i < lonelyDeepCanyon.length; i++)
            {
              fill(150,193,255); 
             rect(t_lonelyDeepCanyon[i].x_pos,poshGreenGrass_y-2,t_lonelyDeepCanyon[i].Width,t_lonelyDeepCanyon[i].x_pos+80);
             fill(218,165,32);
             rect(t_lonelyDeepCanyon[i].x_pos,poshGreenGrass_y,t_lonelyDeepCanyon[i].Width/6,t_lonelyDeepCanyon[i].x_pos+80);
             rect(t_lonelyDeepCanyon[i].x_pos+t_lonelyDeepCanyon[i].Width,poshGreenGrass_y,t_lonelyDeepCanyon[i].Width/6,t_lonelyDeepCanyon[i].x_pos+80);
            }
        }
        function checklonelyDeepCanyon(t_lonelyDeepCanyon)
        {
            for(var i=0; i < lonelyDeepCanyon.length; i++)
            if((charMarioRinaldi_x-charMarioRinaldi_length/2 > t_lonelyDeepCanyon[i].x_pos )&&(charMarioRinaldi_x + charMarioRinaldi_length/2 < (t_lonelyDeepCanyon[i].x_pos+ t_lonelyDeepCanyon[i].Width))&&(charMarioRinaldi_y >= poshGreenGrass_y ))
                {
                    marioRinaldiPlummeting=true ;
                    charMarioRinaldi_y += 10;
                }
            if (marioRinaldiPlummeting==true)
                {
                    isMarioMovingLeft =false;
                    isMarioMovingRight=false;
                }
            
        }

        function drawf1typeFlagpole()
        {
            fill(135,125,30);
            rect(f1typeFlagpole.x_pos,poshGreenGrass_y-400,30,400);
            fill(20,20,20);
            if(f1typeFlagpole.isReached == true)
            {
                fill(20,20,20);
                rect(f1typeFlagpole.x_pos,poshGreenGrass_y-400,100,50);    
            }else
            {
                rect(f1typeFlagpole.x_pos,poshGreenGrass_y-50,100,50);
            }
        }

        function checkIfGameCharReachf1typeFlagpole()
        {
            if(f1typeFlagpole.isReached== false)
            {
                var d = abs(charMarioRinaldi_x - f1typeFlagpole.x_pos);
                if(d<10)
                {
                    f1typeFlagpole.isReached=true;
                    koGameOver = true;
                }
            }
        }
        
        function drawmariorinGameScore(){
            fill(0);
            textSize(30);
            text("score: " + mariorinGameScore,10,30);
        }
        
        function checkifplayerdie()
        {
            if (charMarioRinaldi_y > height)
            {
                mariorinlives--;
                if(mariorinlives > 0)
                {
                    startGame();
                }
                else
                {
                    koGameOver = true;
                }
            }
        }

     function drawlifeTokens()
        {
            fill(0);
            for (var i =0; i< mariorinlives;i++)
            {
                rect(40*i +900,10,30,30);
            }
        }

        function drawkoGameOver()
        {
            fill(40);
            textSize(100);
            text("GAME OVER !!",250, height/2 - 100);
            fill(200,160,150);
            if(mariorinlives > 0)
            {
                  text("You Win!",300, height/2);  
            }
            else
            {
                text("You Lose!",300, height/2);
            }
        }

        function marioEnemy(x,y,range)
        {
            this.x = x;
            this.y = y;
            this.range = range;
            
            this.currentX = x;
            this.inc = 1;
            
            this.update = function()
            {
                this.currentX += this.inc;
                if(this.currentX >this.x +this.range)
                {
                    this.inc = -1;
                }
                else if(this.currentX <this.x)
                {
                    this.inc = 1;
                }
            }
            this.draw = function()
            {
                this.update();
                fill(186,145,159);
                rect(this.currentX,this.y-10,40,20);
                rect(this.currentX,this.y-20,50,10);
                fill(0);
                rect(this.currentX,this.y-30,10,30);
                rect(this.currentX+40,this.y-30,10,30);
                fill(255);
                ellipse(this.currentX,this.y,20,20);
                ellipse(this.currentX+50,this.y-30,20,20);
                
            }
            
            this.checkContact = function(charMarioRinaldi_x,charMarioRinaldi_y)
            {
                var d = dist(charMarioRinaldi_x,charMarioRinaldi_y,this.currentX,this.y);
                if(d<20)
                {
                    return true;
                }
                return false;
            }
        }
        
        function createmarioEnemy(x,y,range)
        {
            return new marioEnemy(x,y,range);
        }

        function drawmarioEnemies()
        {
            for(var i=0; i<marioEnemies.length; i++)
            {
                marioEnemies[i].draw();
            }
        }

        function checkmariorinhitbymarioenemy()
        {
            if(mariorinhitbymarioEnemy)
            {
                return;
            }
            for(var i=0; i<marioEnemies.length; i++)
            {
                var isContact = marioEnemies[i].checkContact(charMarioRinaldi_x,charMarioRinaldi_y);
                if(isContact)
                {
                    mariorinhitbymarioEnemy = true;
                    break;
                }
            }
        }
    //gamecharacter code
    function drawisMarioMovingLeftDecending()
    {
        // add your jumping-left code
                //legs  
                fill(222,184,135);
                rect( charMarioRinaldi_x -9 , charMarioRinaldi_y-15 ,8,13,10);
                rect( charMarioRinaldi_x + 2 , charMarioRinaldi_y-15 ,8,13,10);
                 //marioRinaldihands behind
                fill(222,184,135);
                rect(charMarioRinaldi_x-18,charMarioRinaldi_y - 45, 20,5,20);
                //marioRinaldibody
                fill(0,0,0);
                 rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 50,24,40,10);
                //marioRinaldibelt
                fill(210,105,30);
                rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 30,24,5,10);
                fill(72,61,139);
                ellipse(charMarioRinaldi_x-9,charMarioRinaldi_y - 28,5,5);
                //marioRinaldihands 
                fill(222,184,135);
                rect(charMarioRinaldi_x-7,charMarioRinaldi_y - 45, 5,10,20);
                rect(charMarioRinaldi_x-22,charMarioRinaldi_y - 37, 20,5,20);
                //marioRinaldiHead 
                fill(222,184,135);
                ellipse ( charMarioRinaldi_x, charMarioRinaldi_y -61 , 25);
                fill(205,133,63);
                strokeWeight(2);
                arc(charMarioRinaldi_x-10, charMarioRinaldi_y-62, 10, 10, 1, 2);
                fill(0);
                ellipse(charMarioRinaldi_x-7,charMarioRinaldi_y-54,6,4);
                //marioRinaldieye bags 
                fill(255,255,255);
                noStroke();
                ellipse(charMarioRinaldi_x-6,charMarioRinaldi_y-64,9);
                //marioRinaldithe black circle eyes
                fill(0,0,0);
                ellipse(charMarioRinaldi_x-8,charMarioRinaldi_y-62,4);
    }
    
    function drawisMarioMovingRightDecending()
    {
        // add your jumping-right code
                //legs
                fill(222,184,135);
                rect( charMarioRinaldi_x -9 , charMarioRinaldi_y-15 ,8,13,10);
                rect( charMarioRinaldi_x + 2 , charMarioRinaldi_y-15 ,8,13,10);
                //marioRinaldihands behind
                fill(222,184,135);
                rect(charMarioRinaldi_x-2,charMarioRinaldi_y - 45, 20,5,20);
                //mariorinaldibody
                fill(0,0,0);
                 rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 50,24,40,10);
                //marioRinaldibelt
                fill(210,105,30);
                rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 30,24,5,10);
                fill(72,61,139);
                ellipse(charMarioRinaldi_x+9,charMarioRinaldi_y - 28,5,5);
                //marioRinaldihands 
                fill(222,184,135);
                rect(charMarioRinaldi_x+2,charMarioRinaldi_y - 45, 5,10,20);
                rect(charMarioRinaldi_x+2,charMarioRinaldi_y - 37, 20,5,20);
                //marioRinaldiHead 
                fill(222,184,135);
                ellipse ( charMarioRinaldi_x, charMarioRinaldi_y -61 , 25);
                fill(205,133,63);
                arc(charMarioRinaldi_x+10, charMarioRinaldi_y-62, 10, 10, 1, 2);
                fill(0);
                ellipse(charMarioRinaldi_x+7,charMarioRinaldi_y-54,6,4);
                //marioRinaldieye bags 
                fill(255,255,255);
                noStroke();
                ellipse(charMarioRinaldi_x+6,charMarioRinaldi_y-64,9);
                //marioRinaldithe black circle eyes
                fill(0,0,0);
                ellipse(charMarioRinaldi_x+8,charMarioRinaldi_y-62,4);
    }
    
    function drawisMarioMovingLeft()
    {
        // add your walking left code
                //marioRinaldilegs  
                fill(222,184,135);
                rect( charMarioRinaldi_x -9 , charMarioRinaldi_y-15 ,8,18,10);
                rect( charMarioRinaldi_x + 2 , charMarioRinaldi_y-15 ,8,18,10);
                //marioRinaldibody
                fill(0,0,0);
                 rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 50,24,40,10);
                //marioRinaldibelt
                fill(210,105,30);
                rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 30,24,5,10);
                fill(72,61,139);
                ellipse(charMarioRinaldi_x-9,charMarioRinaldi_y - 28,5,5);
                //marioRinaldihands 
                fill(222,184,135);
                rect(charMarioRinaldi_x-2,charMarioRinaldi_y - 45, 5,30,20);
                //marioRinaldiHead 
                fill(222,184,135);
                ellipse ( charMarioRinaldi_x, charMarioRinaldi_y -61 , 25);
                fill(205,133,63);
                arc(charMarioRinaldi_x-10, charMarioRinaldi_y-62, 10, 10, 1, 2);
                stroke(0);
                strokeWeight(2);
                noFill();
                arc(charMarioRinaldi_x-7, charMarioRinaldi_y-60, 20, 12, 1, 2);
                //marioRinaldieye bags 
                fill(255,255,255);
                noStroke();
                ellipse(charMarioRinaldi_x-6,charMarioRinaldi_y-64,9);
                //marioRinaldithe black circle eyes
                fill(0,0,0);
                ellipse(charMarioRinaldi_x-8,charMarioRinaldi_y-64,4);
    }

    function drawisMarioMovingRight()
    {
         // add your walking right code
                fill(222,184,135);
                rect( charMarioRinaldi_x -9 , charMarioRinaldi_y-15 ,8,18,10);
                rect( charMarioRinaldi_x + 2 , charMarioRinaldi_y-15 ,8,18,10);
                //marioRinaldibody
                fill(0,0,0);
                 rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 50,24,40,10);
                //marioRinaldibelt
                fill(210,105,30);
                rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 30,24,5,10);
                fill(72,61,139);
                ellipse(charMarioRinaldi_x+9,charMarioRinaldi_y - 28,5,5);
                //marioRinaldihands 
                fill(222,184,135);
                rect(charMarioRinaldi_x-2,charMarioRinaldi_y - 45, 5,30,20);
                //marioRinaldiHead 
                fill(222,184,135);
                ellipse ( charMarioRinaldi_x, charMarioRinaldi_y -61 , 25);
                fill(205,133,63);
                arc(charMarioRinaldi_x+10, charMarioRinaldi_y-62, 10, 10, 1, 2);
                stroke(0);
                strokeWeight(2);
                noFill();
                arc(charMarioRinaldi_x+7, charMarioRinaldi_y-60, 20, 12, 1, 2);
                //marioRinaldieye bags 
                fill(255,255,255);
                noStroke();
                ellipse(charMarioRinaldi_x+6,charMarioRinaldi_y-64,9);
                //marioRinaldithe black circle eyes
                fill(0,0,0);
                ellipse(charMarioRinaldi_x+8,charMarioRinaldi_y-64,4);
    }
    
    function drawisMarioDecendingorPlummeting()
    {
        // add your jumping facing forwards code
                //legs  
                fill(222,184,135);
                rect( charMarioRinaldi_x -9 , charMarioRinaldi_y-15 ,8,13,10);
                rect( charMarioRinaldi_x + 2 , charMarioRinaldi_y-15 ,8,13,10);
                //marioRinaldibody
                fill(0,0,0);
                rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 50,24,40,10);
                //marioRinaldibelt
                fill(210,105,30);
                rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 30,24,5,10);
                fill(72,61,139);
                ellipse(charMarioRinaldi_x,charMarioRinaldi_y - 28,5,5);
                fill(95,158,160);
                rect( charMarioRinaldi_x-5, charMarioRinaldi_y -48, 10,5,3);
                fill(255);
                rect( charMarioRinaldi_x-10, charMarioRinaldi_y -43, 20,5,3);
                fill(165,42,42);
                rect( charMarioRinaldi_x-5, charMarioRinaldi_y -38, 10,5,3);
                //marioRinaldihands 
                fill(222,184,135);
                rect(charMarioRinaldi_x+12,charMarioRinaldi_y - 45, 5,30,20);
                rect(charMarioRinaldi_x-17,charMarioRinaldi_y - 45, 5,30,20);
                //marioRinaldiHead 
                fill(222,184,135);
                ellipse (charMarioRinaldi_x, charMarioRinaldi_y -61 , 25);
                fill(205,133,63);
                arc(charMarioRinaldi_x, charMarioRinaldi_y-61, 10, 10, 1, 2);
                fill(255);
                ellipse(charMarioRinaldi_x,charMarioRinaldi_y-53,8,3);
                //marioRinaldieye bags 
                fill(255,255,255);
                noStroke();
                ellipse(charMarioRinaldi_x-5 ,charMarioRinaldi_y-64,9);
                ellipse(charMarioRinaldi_x+5 ,charMarioRinaldi_y-64,9);
                //marioRinaldithe black circle eyes
                fill(0,0,0);
                ellipse(charMarioRinaldi_x-5 ,charMarioRinaldi_y-62,4);
                ellipse(charMarioRinaldi_x+5 ,charMarioRinaldi_y-62,4);
    }
    
    function drawisMarioStandingStraight()
    {
        // add your standing front facing code
                //legs  
                fill(222,184,135);
                rect( charMarioRinaldi_x -9 , charMarioRinaldi_y-15 ,8,18,10);
                rect( charMarioRinaldi_x + 2 , charMarioRinaldi_y-15 ,8,18,10);
                //marioRinaldibody
                fill(0,0,0);
                rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 50,24,40,10);
                //marioRinaldibelt
                fill(210,105,30);
                rect(charMarioRinaldi_x-12,charMarioRinaldi_y - 30,24,5,10);
                fill(72,61,139);
                ellipse(charMarioRinaldi_x,charMarioRinaldi_y - 28,5,5);
                fill(95,158,160);
                rect( charMarioRinaldi_x-5, charMarioRinaldi_y -48, 10,5,3);
                fill(255);
                rect( charMarioRinaldi_x-10, charMarioRinaldi_y -43, 20,5,3);
                fill(165,42,42);
                rect( charMarioRinaldi_x-5, charMarioRinaldi_y -38, 10,5,3);
                //marioRinaldihands 
                fill(222,184,135);
                rect(charMarioRinaldi_x+12,charMarioRinaldi_y - 45, 5,30,20);
                rect(charMarioRinaldi_x-17,charMarioRinaldi_y - 45, 5,30,20);
                //marioRinaldiHead 
                fill(222,184,135);
                ellipse ( charMarioRinaldi_x, charMarioRinaldi_y -61 , 25)
                fill(205,133,63);
                arc(charMarioRinaldi_x, charMarioRinaldi_y-61, 10, 10, 1, 2);
                stroke(0);
                strokeWeight(2);
                noFill();
                arc(charMarioRinaldi_x, charMarioRinaldi_y-63, 20, 20, 1, 2);
                //marioRinaldieye bags 
                fill(255,255,255);
                noStroke();
                ellipse(charMarioRinaldi_x-5 ,charMarioRinaldi_y-64,9);
                ellipse(charMarioRinaldi_x+5 ,charMarioRinaldi_y-64,9);
                //marioRinaldithe black circle eyes
                fill(0,0,0);
                ellipse(charMarioRinaldi_x-5 ,charMarioRinaldi_y-64,4);
                ellipse(charMarioRinaldi_x+5 ,charMarioRinaldi_y-64,4);
    }