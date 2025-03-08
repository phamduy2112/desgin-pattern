nterface ISalaryStrategy {
    calculateSalary(): number;
  }
  
  class EmployeeSalary implements ISalaryStrategy {
    constructor(private salary: number) {}
  
    calculateSalary(): number {
      return this.salary;
    }
  }
  
  class ManagerSalary implements ISalaryStrategy {
    constructor(private salary: number, private bonus: number) {}
  
    calculateSalary(): number {
      return this.salary + this.bonus;
    }
  }
  
  class CustomerVIPSalary implements ISalaryStrategy {
    constructor(private salary: number, private discount: number) {}
  
    calculateSalary(): number {
      return this.salary - this.discount;
    }
  }
  
  abstract class Person {
    constructor(public name: string, public age: number, private salaryStrategy: ISalaryStrategy) {}
  
    getSalary(): number {
      return this.salaryStrategy.calculateSalary();
    }
  }
  
  class Employee extends Person {
    constructor(name: string, age: number, salary: number) {
      super(name, age, new EmployeeSalary(salary));
    }
  }
  
  class Manager extends Person {
    constructor(name: string, age: number, salary: number, bonus: number) {
      super(name, age, new ManagerSalary(salary, bonus));
    }
  }
  
  class CustomerVIP extends Person {
    constructor(name: string, age: number, salary: number, discount: number) {
      super(name, age, new CustomerVIPSalary(salary, discount));
    }
  }
  
  const employee = new Employee("Duy", 18, 20000);
  const manager = new Manager("Duy 2", 20, 50000, 2000);
  const customerVIP = new CustomerVIP("Duy VIP", 25, 100000, 5000);
  
  console.log("Employee Salary:", employee.getSalary());
  console.log("Manager Salary:", manager.getSalary());
  console.log("Customer VIP Salary:", customerVIP.getSalary());