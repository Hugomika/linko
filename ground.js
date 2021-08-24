class Ground{
    constructor(x,y,w,h) {
      var options = {
          is
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this. = w; 
      this. = h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode();
      fill("");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };