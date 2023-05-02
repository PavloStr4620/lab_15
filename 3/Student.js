class Student extends Person{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName){
        console.log(this.name + " " + this.surmame + " " + midleName);
    }

    showCourse(){
        console.log("Курс: " + (2023 - this.year - 15));
    }
}