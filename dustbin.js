class Dustbin{

    constructor(x,y,height,width){        
      
        var options = {

            isStatic : true
        }

        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,height,width,options)
        World.add(world,this.body)
    }

    display(){

        var dustbinpos = this.body.position

        push();
        rectMode(CENTER)
        strokeWeight(0)
        fill("white")
        imageMode(CENTER);
        image(this.image, 590, 570, 160, 160);
        rect(dustbinpos.x,dustbinpos.y,this.height,this.width)
        pop();
    }
}