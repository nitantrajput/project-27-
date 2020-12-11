class Rope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            body1: body1,
            body2: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        
            var bodyA = this.rope.bodyA.position;
            var bodyB = this.bodyB;
            strokeWeight(4);
            line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
        }
    }