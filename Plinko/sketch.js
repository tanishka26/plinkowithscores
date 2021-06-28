const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particles=[];
var plinkos=[];
var divisions =[];
var divisionHeight =300;
var score=0;
var turn=0;

var gameState='play'



function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
   
     ground=new Ground(400,790,800,20)
     for (var k=0;k<=width ; k=k+80){
      divisions.push( new Division (k,height-divisionHeight/2,10,divisionHeight))
    }
    for (var j=75;j<=width ; j=j+50){
      plinkos.push( new Plinko (j,75))
    }
    for (var j=50;j<=width-10 ; j=j+50){
      plinkos.push( new Plinko (j,175))
    }
    for (var j=75;j<=width ; j=j+50){
      plinkos.push( new Plinko (j,275))
    }
    for (var j=50;j<=width-10 ; j=j+50){
      plinkos.push( new Plinko (j,375))
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display()
    fill("white")
    textSize(20)
    text('score: '+ score,20,30)
    text('score: '+ turn ,700,30)
    var t=20;
    var a=260;
    var v=500;
    for(var s=0;s<3;s++){
      
      fill("white")
    textSize(15)
    text('500: ' ,t,550)
    t=t+80
    }
    for(var s=0;s<4;s++){
      fill("white")
    textSize(15)
    text('100: ' ,a,550)
    a=a+80
    }
    for(var s=0;s<3;s++){
      fill("white")
    textSize(15)
    text('200: ' ,v,550)
    v=v+80
    }
    if(particles !=null){
    particles.display()

    
if (particles.body.position.y>500){
  if (particles.body.position.x<300){
    score=score+500
    particles=null
    if(turn>=5){
      gameState='end'
    }
  }
  if (particles.body.position.x<300 && particles.body.position.x<600){
    score=score+100
    particles=null
    if(turn>=5){
      gameState='end'
    }
  }
  if (particles.body.position.x>601 && particles.body.position.x<900){
    score=score+200
    particles=null
    if(turn>=5){
      gameState='end'
    }
  }
}
}

    for (var a=0;a<plinkos.length ; a++){
      
      plinkos[a].display();
    }
    
    for (var k=0;k<divisions.length ; k++){
      divisions[k].display();
    }
    if(turn>=5&&gameState==='end'){
      fill("white")
      textSize(35)
      text('game over ' ,300,350)
    }
 
}
function mousePressed() {
  if (gameState !=='end'){
    turn++
    particles=new Particle(mouseX,10,10,10)
  }
}