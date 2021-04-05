class Pinkbox extends Box{
    constructor(x,y){
       super(x,y,30,40);
    }

    display(){
        fill("pink");
        super.display();
    }
}