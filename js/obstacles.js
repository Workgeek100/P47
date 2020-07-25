class Obstacles{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.image1=loadImage("images/officeChair1.png");
        this.image2=loadImage("images/officeChair2.png");
        this.image3=loadImage("images/officeChair3.png");
        this.image4=loadImage("images/officeChair4.png");
        this.image5=loadImage("images/officeChair5.png");
        this.image6=loadImage("images/officeTable1.png");
        this.image7=loadImage("images/officeTable2.png");
        this.image8=loadImage("images/oilSpill.png")
        this.body=Bodies.rectangle(x,y,100,100,options);
        this.width=100;
        this.height=100;
        World.add(world,this.body);
    }
    display1(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image1,displayWidth-300,displayHeight/2+50,150,150);
        //image(this.image2,displayWidth-100,displayHeight/2+40,200,170);
        //image(this.image3,displayWidth-500,displayHeight/2+30,160,160);
        //image(this.image4,displayWidth-700,displayHeight/2+30,160,160);
        image(this.image5,displayWidth-900,displayHeight/2+30,230,160);
        //image(this.image6,displayWidth-800,displayHeight/2+10,300,350);
        //image(this.image7,displayWidth-400,displayHeight/2+50,300,130);
        //image(this.image8,displayWidth-200,displayHeight/2+100,100,50);
        
    }
    display2(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image1,displayWidth-300,displayHeight/2+50,150,150);
        //image(this.image2,displayWidth-100,displayHeight/2+40,200,170);
        //image(this.image3,displayWidth-500,displayHeight/2+30,160,160);
        //image(this.image4,displayWidth-700,displayHeight/2+30,160,160);
        //image(this.image5,displayWidth-900,displayHeight/2+30,230,160);
        image(this.image6,displayWidth-800,displayHeight/2+10,300,350);
        //image(this.image7,displayWidth-400,displayHeight/2+50,300,130);
        //image(this.image8,displayWidth-200,displayHeight/2+100,100,50);
        
    }
    display3(){
        var pos = this.body.position;
        imageMode(CENTER);
        //image(this.image1,displayWidth-300,displayHeight/2+50,150,150);
        //image(this.image2,displayWidth-100,displayHeight/2+40,200,170);
        //image(this.image3,displayWidth-500,displayHeight/2+30,160,160);
        image(this.image4,displayWidth-700,displayHeight/2+30,160,160);
        image(this.image5,displayWidth-900,displayHeight/2+30,230,160);
        //image(this.image6,displayWidth-800,displayHeight/2+10,300,350);
        //image(this.image7,displayWidth-400,displayHeight/2+50,300,130);
        //image(this.image8,displayWidth-200,displayHeight/2+100,100,50);
        
    }
    display4(){
        var pos = this.body.position;
        imageMode(CENTER);
        //image(this.image1,displayWidth-300,displayHeight/2+50,150,150);
        //image(this.image2,displayWidth-100,displayHeight/2+40,200,170);
        //image(this.image3,displayWidth-500,displayHeight/2+30,160,160);
        //image(this.image4,displayWidth-700,displayHeight/2+30,160,160);
        image(this.image5,displayWidth-900,displayHeight/2+30,230,160);
        //image(this.image6,displayWidth-800,displayHeight/2+10,300,350);
        //image(this.image7,displayWidth-400,displayHeight/2+50,300,130);
        image(this.image8,displayWidth-200,displayHeight/2+100,100,50);
        
    }
}