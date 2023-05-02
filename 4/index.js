class Worker {
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        // this.experience = 1.2;
    }

    showSalary(){
        return this.dayRate * this.workingDays;
    }

    showSalaryWithExperience(){
        return this.dayRate * this.workingDays * this.experience;
    }

    get getExperience(){
        return this.experience;
    }

    set setExperience(exp){
        this.experience = exp;
    }

}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName + " " +  worker1.showSalary());
worker1.setExperience = 1.2;
console.log(worker1.showSalaryWithExperience());

worker1.setExperience = 1.5;
console.log(worker1.showSalaryWithExperience());

// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.getExperience);
// worker1.showSalaryWithExperience();
// worker1.setExperience = 1.5;
// console.log("New experience: " + worker1.getExperience);
// worker1.showSalaryWithExperience();
let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName + " " +  worker2.showSalary());

// let worker3 = new Worker("Andy Ander", 29, 23);