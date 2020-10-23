class rope {

    constructor(body1, body2, offsetX, offsetY) {
      
      this.offsetX= offsetX
      this.offsetY= offsetY
       var options={
           bodyA:body1,
           bodyB:body2,
           pointB:{x:this.offsetX, y:this.offsetY}
   
       }
     this.rope=Constraint.create(options)  ;
     World.add(world, this.rope);
   
      rope1= new rope(bobObject1.body, roofObject.body,-bobDiameter*2, 0)
      rope2= new rope(bobObject2.body, roofObject.body,-bobDiameter*2, 0)
      rope3= new rope(bobObject3.body, roofObject.body,-bobDiameter*2, 0)
      rope4= new rope(bobObject4.body, roofObject.body,-bobDiameter*2, 0)
      rope5= new rope(bobObject5.body, roofObject.body,-bobDiameter*2, 0)
       }
       display() {
       var pointA= this.rope.bodyA.position;
       var pointB= this.rope.bodyB.position;
       
       strokeWeight(3);
       line(pointA.x,pointA.y,pointB.x,pointB.y)
       
       rope1();
       rope2();
       rope3();
       rope4();
       rope5();
   }
   }