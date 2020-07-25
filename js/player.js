class Player{
    constructor(x,y,width,height){
       var options = {
           restitution : 0.2,
           density : 10,
           friction : 1
       }
       this.image2 = loadAnimation("images/running1.png","images/running2.png","images/running3.png","images/running4.png","images/running5.png");
       this.image = loadImage("images/standing.png");
       this.image3 = loadImage("images/jumping.png");
       this.image4 = loadImage("images/sliding.png");
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.x=x;
       this.y=y;
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        push();
        if(keyDown(RIGHT_ARROW)){
           animation(this.image2, pos.x,pos.y,this.width,this.height);
            pos.x=pos.x+1;
        }
       if(keyDown(UP_ARROW)){
           image(this.image3, pos.x, pos.y, this.width, this.height);
           this.velocityY = -12;
           this.velocittyY=this.velocityY+0.6;
       }
       if(keyDown(DOWN_ARROW)){
           image(this.image4, pos.x, pos.y, this.wodth, this,height);
           this.velocityY=0;
       }
       
        pop();
        }
}