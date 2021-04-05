class Greenbox extends Box{
    constructor(x,y){
       super(x,y,30,40);
    }

    display(){
        fill("green");
        super.display();
    }
}