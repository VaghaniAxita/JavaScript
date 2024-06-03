class Office {
    #salary;

    constructor(id, name, number, salary) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.#salary = salary;
    }


    getSalary() {
        return this.#salary;
    }


    setSalary(salary) {
        this.#salary = salary;
    }


    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Number: ${this.number}, Salary: ${this.#salary}`;
    }
}

class HR extends Office {
    constructor(id, name, number, salary, department) {
        super(id, name, number, salary);
        this.department = department;
    }


    displayDetails() {
        return `${super.displayDetails()}, Department: ${this.department}`;
    }
}

class Employee extends HR {
    constructor(id, name, number, salary, position) {
        super(id, name, number, salary);
        this.position = position;
    }


    displayDetails() {
        return `${super.displayDetails()}, Position: ${this.position}`;
    }
}


let officePerson = new Office(1, "abc", "123-456-7890", 50000);
let hrPerson = new HR(2, "def", "987-654-3210", 60000, "Human Resources");
let employeePerson = new Employee(3, "hij", "111-222-3333", 70000, "Software Developer");


console.log(officePerson.displayDetails());
console.log(hrPerson.displayDetails());
console.log(employeePerson.displayDetails()); 