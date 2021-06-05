class Paper{
constructor(x, y, width,height) {
      var options = {
          isStatic : true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
        }
    
      
      this.body = Bodies.circle(x, y, width,options);
      this.width = width;
      this.height = height;

      this.image = loadImage("paper.png");
      World.add(world, this.body);
      

}   
display(){
  var pos =this.body.position;
  
  push();
  
  rectMode(CENTER);
  circle(pos.x, pos.y, this.width, this.height);
  pop();
}
add(a,b){
  textSize(32);
  

  var sum;
  sum=a + b ;
  text(sum, 10, 30);
   
}
throw(xpos,ypos){
  var pos =this.body.position;

   Body.applyForce(this.body,{xpos,ypos},{x: 0, y: -0.05});
  
}
}