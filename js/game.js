class Game{
    constructor(){
        this.currentState=0;
        this.level=0;
    }

    getState(){
        return this.currentState;
    }

    update(state){
        this.currentState=state;
    }

    storyLine(){
        var howtoplay = new Howtoplay();
    }


    playBg1(){
        background("white");
        background(bg1);
        obstacles.display1();
    }

    playBg2(){
        background("white");
        background(bg2);
        obstacles.display2();
    }

    playBg3(){
        background("white");
        background(bg3);
        obstacles.display3();
    }

}