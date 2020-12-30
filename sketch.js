var player,playerimg,form,bgimg,bgimg2,role,cafe,cafeimg,standImg;
var gameState='start';
function preload(){
    bgimg=loadImage('BG.png')
    playerimg=loadAnimation('walk1.png','walk2.png','walk3.png','walk4.png','walk5.png')
    cafeimg=loadImage('cafe.png')
    standImg=loadImage('walk1.png')
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    form=new Form();
    
}
function draw(){
    
    if (gameState==='start'){
        
        background(bgimg)
       
        form.display()
        console.log("gamestate is start");
       
    }
   
    if (gameState==='play'){
        cafe=createSprite(displayWidth/2,displayHeight/2,200,displayHeight)
        cafe.addImage(cafeimg)
        textSize(40)
        fill("red")
        text(role,displayWidth/2,displayHeight/2-400)
        player.depth=cafe.depth+1
        play()
        

    }
    drawSprites()
    
}
function getRole(){
    player=createSprite(displayWidth/2,displayHeight/2,20,20);
    player.addImage(standImg);
    player.addAnimation('running',playerimg);

    player.scale=.5
    var rand = Math.round(random(1,3));
    switch(rand) {
   //   case 1: role='IMPOSTER';
   //           break;
      case 2: role='CrewMate';
              break;
      case 3: role='CrewMate';
              break;
    default:break;
    }
    
}
function play(){
    player.changeAnimation('running',playerimg);
   
    if(keyDown("w")) {
      
        player.y = player.y-3;
      
      }
      if (keyDown("s")) {
        
       player.y =player.y + 3;
    
        
      }
      if (keyDown("d")) {
       
      player.x=player.x+ 3;
      
     
      }
      if (keyDown("a")) {
        
        player.x=player.x -3;
      
    }
    

}