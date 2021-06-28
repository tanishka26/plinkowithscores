class Plinko {
    constructor(x,y ) {
      var options = {
         isStatic:true,restitution:1,friction:0
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.r=10
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.r);
     
    }
  };