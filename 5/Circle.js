class Circle extends GeometricFigure{
    constructor(radius){
        super();
        this.radius = radius;
    }

    getArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}