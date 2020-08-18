var player;
var life =3, gameState= "start", mask1, sanitizer1, gloves1,house1, covid1, washHands1, people1, apps1;
var flag1, vaccine1, time = 15,player1,heart, timeScore= 15;
var  scores= 0;
var covid3, mask2,sanitizer2,gloves2,house2,washHands2,people2,apps2,flag2;

function preload(){
  mask1 = loadImage("masksketch.png"); 
  sanitizer1 = loadImage("sanitizersketch.png");
  gloves1 = loadImage("glovesketch.png");
  house1 = loadImage("housesketch.png");
  covid1 = loadImage("covidsketch.png");
  washHands1= loadImage("wash hands sketch.png");
   people1= loadImage("people sketch (1).png");
   apps1 = loadImage("tiktoksketch.png");
   flag1 = loadImage("chineseflag.png");
   vaccine1 = loadImage("vaccine sketch (1).png");
   player1= loadImage("player sketch.png");
   heart= loadImage("heart.png");
}
  function setup() {
  createCanvas(windowWidth,windowHeight);
  f1=  new Form();
  player= createSprite(400,720,30,30);
  player.addImage("player",player1);
  player.scale= 0.8;
  player.visible= false;
  covid3= createSprite(width/2,0,20,20);
  covid3.addImage("flag1",covid1);
  covid3.scale= 0.15;
  covid3.velocityY = random(8,10);
  covid3.x = random(20,2000);
  covid3.lifetime= 800/covid3.velocityY;
  
  covid3.visible= false;
  mask2 = createSprite(width/8,0,20,20);
  mask2.addImage("mask2",mask1);
  mask2.scale= 0.17;
  mask2.velocityY = random(9,11);
  mask2.x = random(20,2000);
  mask2.lifetime= 800/mask2.velocityY;
  mask2.visible= false;
  sanitizer2 = createSprite(width/6,0,20,20);
  sanitizer2.addImage("sanitizer2",sanitizer1);
  sanitizer2.scale= 0.5;
  sanitizer2.velocityY = random(7,10);
  sanitizer2.x = random(20,2000);
  sanitizer2.lifetime= 800/sanitizer2.velocityY;
  sanitizer2.visible= false;
  gloves2 = createSprite(width/2+ 400,0,20,20);
  gloves2.addImage("gloves2",gloves1);
  gloves2.scale= 0.2;
  gloves2.x = random(20,2000);
  gloves2.velocityY = random(8,12);
  gloves2.lifetime= 800/gloves2.velocityY;
  gloves2.visible= false;
  house2  = createSprite(300,0,20,20);
  house2.addImage("house2",house1);
  house2.scale= 0.2;
  house2.x = random(20,2000);
  house2.velocityY = random(8,11);
  house2.lifetime= 800/house2.velocityY;
  house2.visible= false;
  washHands2= createSprite(300,0,20,20);
  washHands2.addImage("washHands2",washHands1);
  washHands2.scale=0.17;
  washHands2.x = random(20,2000);
  washHands2.velocityY = random(7,10);
  washHands2.lifetime= 800/washHands2.velocityY;
  washHands2.visible= false;
  people2 = createSprite(300,0,20,20);
  people2.addImage("people2",people1); 
  people2.scale= 0.25;
  people2.x = random(20,2000);
  people2.velocityY = random(7,12);
  people2.shapeColor= "red";
  people2.lifetime= 800/people2.velocityY;
  people2.visible= false;
  apps2 = createSprite(300,0,20,20);
  apps2.addImage("apps2",apps1);
  apps2.scale= 0.3;
  apps2.x = random(20,2000);
  apps2.velocityY = random(7,13);
  apps2.shapeColor= "red";
  apps2.lifetime= 800/apps2.velocityY
  apps2.visible= false;
  flag2= createSprite(300,0,20,20);
  flag2.addImage("flag2",flag1);
  flag2.scale= 0.22;
  flag2.x = random(20,2000);
  flag2.velocityY = random(8,12);
  flag2.lifetime= 800/flag2.velocityY
  flag2.visible= false;

}
function draw() {
  background("skyblue");
  if(gameState=="start"){
       f1.display();
}
  if(gameState=="play"){
    washHands2.visible = true;
    if(washHands2.y>height){
      washHands2.y=-450;
      washHands2.x = random(20,775);
    }
    if(washHands2.isTouching(player)){
     washHands2.visible= false;
      washHands2.y= -200;
      washHands2.x = random(20,775);
      washHands2.visible=true;
      scores= scores+1;
   }
    house2.visible= true;
    if(house2.y>height){
      house2.y=-150;
      house2.x = random(20,775);
    }
    if(house2.isTouching(player)){
      house2.visible= false;
      house2.y= -200;
      house2.x = random(20,775);
      house2.visible=true;
      scores= scores+1;
   }
    gloves2.visible= true;
    if(gloves2.y>height){
      gloves2.y=-350;
      gloves2.x = random(20,775);
    }
    if(gloves2.isTouching(player)){
      gloves2.visible= false;
      gloves2.y= -200;
      gloves2.x = random(20,775);
      gloves2.visible=true;
      scores= scores+1;
   }
    sanitizer2.visible= true;
    if(sanitizer2.y>height){
      sanitizer2.y=-350;
      sanitizer2.x = random(20,775);
    }
    if(sanitizer2.isTouching(player)){
      sanitizer2.visible= false;
      sanitizer2.y= -200;
      sanitizer2.x = random(20,775);
      sanitizer2.visible=true;
      scores= scores+1;
   }
    mask2.visible= true;
    if(mask2.y>height){
      mask2.y=-350;
      mask2.x= random(20,775);
    }
    if(mask2.isTouching(player)){
      mask2.visible= false;
      mask2.y= -200;
      mask2.x= random(20,775);
      mask2.visible=true;
      scores= scores+1;
   }
   flag2.visible= true;
   if(flag2.y>height){
    flag2.y= -430;
}
if(flag2.isTouching(player)){
  flag2.visible= false;
  flag2.y= -200;
  flag2.x= random(20,775);
  flag2.visible=true;
  if(life>0){
    life= life-1;
  }
}
   apps2.visible= true;
   if(apps2.y>height){
    apps2.y= -500;
}
if(apps2.isTouching(player)){
  apps2.visible= false;
  apps2.y= -200;
  apps2.x= random(20,775);
  apps2.visible=true;
  if(life>0){
    life= life-1;
  }
}

   people2.visible=true;
   if(people2.y>height){
    people2.y= -200;
}
if(people2.isTouching(player)){
  people2.visible= false;
  people2.y= -200;
  people2.x= random(20,775);
  people2.visible=true;
  if(life>0){
    life= life-1;
  }
}
    covid3.visible= true;
    if(covid3.y>height){
        covid3.y= -200;
    }
    if(covid3.isTouching(player)){
       covid3.visible= false;
       covid3.y= -200;
       covid3.x= random(20,775);
       covid3.visible=true;
       if(life>0){
         life= life-1;
       }
    }
    
    player.visible= true;
    player.scale= 0.25;
    textSize(500);
    text(scores,width/2- 160,height/2+ 200);
    textSize(20);
    if(life==3){
      image(heart,20,20,80,50);
      image(heart,50,20,80,50);
      image(heart,80,20,80,50);
 } else if(life==2){
      image(heart,20,20,80,50);
      image(heart,50,20,80,50);}
    else if(life==1){
      image(heart,20,20,80,50);
    }
   
  
  
  if(life==0){
    gameState= "over";
  }}
  if(gameState=="over"){
    textSize(500);
    text(scores,width/2-160,height/2+ 200);
    textSize(20);
   
    covid3.visible=false;
    mask2.visible=false;
    sanitizer2.visible= false;
    gloves2.visible= false;
    house2.visible= false;
    washHands2.visible= false;
    people2.visible= false;
    apps2.visible= false;
    flag2.visible= false;
    
     if(scores<49){
      text('You are not aware about Covid-19',240,450)
      text('Press anywhere on the screen to restart the game',210,500);
    }
  if(scores>50){
    text('You are aware about Covid-19',40,40);
    text('Press anywhere on the screen to restart the game',210,500);
  }
  }
  player.x= mouseX;
  drawSprites();
}
function keyPressed(){
    if(keyCode===32 && gameState=== "over"){
        gameState= "play";
        life=3;
        scores=0;
        covid3.visible= true;
        mask2.visible= true;
        sanitizer2.visible= true;
        gloves2.visible= true;
        house2.visible= true;
        washHands2.visible= true;
        people2.visible= true;
        apps2.visible= true;
        flag2.visible= false;
       
    }}
