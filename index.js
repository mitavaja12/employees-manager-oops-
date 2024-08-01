class Employee {
    constructor(name, phoneNumber, departmentName) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.departmentName = departmentName;
        this.totalLeaveDays = 0;
    }

    leave(days) {
        this.totalLeaveDays += days;
        if (this.totalLeaveDays > 2) {
            console.log(`${this.name} has taken a total of ${this.totalLeaveDays} days of leave.`);
            console.log('Monthly leave day limit is 2. Please ensure to take fewer leaves next month.');
        } else {
            console.log(`${this.name} has taken ${days} days of leave this month. Next day should be present.`);
        }
    }

    setAnnualSalary(amount) {
        this.annualSalary = amount;
    }

    getMonthlySalary() {
        if (!this.annualSalary) {
            console.log('Annual salary is not set.');
            return;
        }
        return this.annualSalary / 12;
    }

    getSalaryForMonths(months) {
        const monthlySalary = this.getMonthlySalary();
        if (monthlySalary) {
            return monthlySalary * months;
        }
        return 0;
    }

    calculateBonus() {
        if (!this.annualSalary) {
            console.log('Annual salary is not set.');
            return 0;
        }
        let bonusPercentage = 0;
        const department = this.departmentName.toLowerCase();

        if (department === 'fullstack developer') {
            bonusPercentage = 10;
        } else if (department === 'graphics developer') {
            bonusPercentage = 8;
        } else if (department === 'animation developer') {
            bonusPercentage = 3;
        } else if (department === 'cyber security') {
            bonusPercentage = 5;
        } else {
            console.log('No bonus available for this department.');
            return 0;
        }

        return (this.annualSalary * bonusPercentage) / 100;
    }

    getLeaveDays() {
        return this.totalLeaveDays;
    }
}

// Manager class
class Manager extends Employee {
    constructor(name, phoneNumber, departmentName, teamSize) {
        super(name, phoneNumber, departmentName);
        this.teamSize = teamSize;
        this.teamMembers = ['jasmin', 'rudra', 'pal', 'jay'];
    }

    manage() {
        console.log(`${this.name} is managing a team of ${this.teamSize} people.`);
    }

    addEmployee(employee) {
        this.teamMembers.push(employee);
        console.log(`${employee.name} has been added to ${this.name}'s team.`);
    }
}

// Create an Employee instance
const emp1 = new Employee('Juhil', '8967789546', 'FullStack Developer');
console.log(emp1);
emp1.setAnnualSalary(60000);
emp1.leave(3);
const bonus = emp1.calculateBonus();

// Create a Manager instance
const mgr1 = new Manager('Yamini', '86434689543', 'Cyber Security', 5);
console.log(mgr1);
mgr1.setAnnualSalary(80000);
mgr1.addEmployee(emp1);
mgr1.manage();