class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
     fly(){
         this.sling.bodyA = null
     }
     attach(body){
        this.sling.bodyA = body;
    }

    display(){ 
        if(this.sling.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            line(pointA.x+30, pointA.y, pointB.x+10, pointB.y);
            line(pointA.x+30, pointA.y, pointB.x-30, pointB.y);
        }
    }
    
}
    