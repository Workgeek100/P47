class Intro{
    constructor(){
        this.greeting = createElement("h1");
        this.button = createButton("PLAY");
        this.button2 = createButton("HOW TO PLAY");
        this.title1 = createElement("h1");
        this.title2 = createElement("h2");
        this.img = document.getElementById("intro_img");
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.title1.hide();
        this.title2.hide();
        this.title3.hide();
        this.title4.hide();
        this.button2.hide();
        this.img.style.visibilty='hidden';
    }
    display(){
        this.title1.html("CAN YOU ESCAPE?");
        this.title1.position(displayWidth/2,displayHeight/10);
        this.title2.html("MADE BY ASHWIN S PILLAI");
        this.title2.position(displayWidth/2,displayHeight/10+50);
        this.greeting.html(WELCOME);
        this.greeting.position(displayWidth/2,displayHeight/10-50);
        image(this.img, displayWidth/2,displayHeight/2,displayWidth,displayHeight);
        this.button2.position(displayWidth/2,displayHeight/2+50);
        
    }
}