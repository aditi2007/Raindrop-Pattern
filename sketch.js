var r1,r2,r3,r4,r5,r6,r7,r8;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 r1=new Raindrop(120,120,20,20);
 r2=new Raindrop(40,40,120,20,20);
 r3=new Raindrop(100,100,20,20);
 r4=new Raindrop(80,80,20,20);
 r5=new Raindrop(140,140,20,20);
 r6=new Raindrop(60,60,20,20);
 r7=new Raindrop(160,160,20,20);
 r8=new Raindrop(180,180,20,20);
 var r1_options={
  restitution:3
   }
   var r2_options={
    restitution:3
     }
     var r3_options={
      restitution:3
       }
       var r4_options={
        restitution:3
         }
         var r5_options={
          restitution:3
           }
           var r6_options={
            restitution:3
             }
             var r7_options={
              restitution:3
               }
               var r8_options={
                restitution:3
                 }

}

function draw() {
  background(255,255,255);  
  drawSprites();
  
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  r6.display();
  r7.display();
  r8.display();
}