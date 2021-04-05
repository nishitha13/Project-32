class Greybox extends Box{
    constructor(x,y){
       super(x,y,30,40);
    }

    display(){
        fill("grey");
        super.display();
    }
}