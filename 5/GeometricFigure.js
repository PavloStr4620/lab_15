class GeometricFigure {
    getArea(){
        return 0;
    }

    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}