class Square extends GeometricFigure{
        constructor(side){
            super();
            this.side = side;
        }

        getArea(){
            return Math.pow(this.side, 2);
        }
}