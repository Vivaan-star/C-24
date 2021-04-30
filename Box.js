class Box{

constructor(x,y,width,height){    

    var options = {

        friction: 0.3,
        restitution: 0.8,
        density: 1

    }
       this.body = Bodies.rectangle(x,y,width,height,options);
     
       this.width = width;
       this.height = height;
       World.add(myWorld, this.body);

}

display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("white");
    stroke("green")
    strokeWeight(4)
    rectMode(CENTER);
    rect(0,0, this.width,this.height);
    pop();
    
}


}























































