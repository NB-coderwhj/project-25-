class Dustbin2{
    constructor(){
        var options = {
            'isStatic' : true
        }
       
      /*  this.body = Bodies.rectangle(x,y,600,250,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);*/
        this.image = loadImage("dustbin.png")
    }
    display(){
       //var pos = this.body.position;
   
       
        fill("white")
        imageMode(CENTER);
        image(this.image,600,280,120,140);
        
    }
}