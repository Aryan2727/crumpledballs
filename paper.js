class Paper{

    constructor(x,y,r){

        var options = {

            isStatic : false,
            restitution : 0.4,
            gravity : 0.4,
            density : 1.2

        }

        this.x = x;
        this.y = y;
        this.r = r
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)

    }
        display(){

            var paperPosition = this.body.position;

            push()
            translate(paperPosition.x,paperPosition.y)
            rectMode(CENTER)
            strokeWeight(0)
            fill("white")
            ellipse(0,0,this.r,this.r)
            imageMode(CENTER);
            image(this.image, 0, 0, 60, 60);
            pop()
        }
    }
   