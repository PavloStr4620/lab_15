class Triangle extends GeometricFigure{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }

    getArea(){
        return this.base * this.height * 0.5;
    }
}