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
















}