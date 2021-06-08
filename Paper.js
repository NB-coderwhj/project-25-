class Paper{
    constructor(x,y){
        var options = { 
            'density' : 1.5,
            'friction' : 0.7, 
        }
        this.body = Bodies.rectangle (x,y,50,50, options)
        this.d = 50 
        World.add(world,this.body);
        this.image = loadImage("paper.png")
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("white");
        imageMode(RADIUS);
        image(this.image,0,0, this.d,this.d);
        pop();
    }
}