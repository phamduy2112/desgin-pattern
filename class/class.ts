interface IPerson {
    id:number;
    name:string;
    age:number;
    getInfo():string;
    calculateBonus():number
  }
  abstract class Person implements IPerson{
         id:number;
    name:string;
    age:number;
     constructor(id: number, name: string, age: number) {
      this.id = id;
      this.name = name;
      this.age = age;
    }
  
    abstract getInfo(): string; // Bắt buộc lớp con phải triển khai
      abstract calculateBonus(): number;
  
  }
  class Employee implements Person{
      id:number;
    name:string;
    age:number;
    salary:number;
    constructor(id:number,name:string,age:number,salary:number){
      this.id=id;
      this.name=name;
      this.age=age;
      this.salary=salary
    }
    getInfo(){
     return `Tên: ${this.name} Tuổi: ${this.age} Lương ${this.salary}`
    }
    calculateBonus():number{
      return this.salary*0.1
    }
  
  }
  
  class Manager extends Employee{
      bonus:number
      constructor(id:number,name:string,age:number,salary:number,   bonus:number){
          super(id,name,age,salary);
          this.bonus=bonus
       }
       getInfo(){
     return `Tên: ${this.name} Tuổi: ${this.age} Lương: ${this.salary} Thưởng: ${this.bonus}`
    }
    calculateBonus():number{
          return this.salary * 0.2 + this.bonus; // 20% bonus + thưởng riêng
  
    }
  
  }
  class Intern extends Person{
      duration:number;
      constructor(id:number,name:string,age:number,duration:number){
          super(id,name,age)
          this.duration=duration
      }
        getInfo(): string {
      return `Tên: ${this.name} | Tuổi: ${this.age} | Thời gian thực tập: ${this.duration} tháng`;
    }
  
    calculateBonus(): number {
      return 0; // Intern không có bonus
    }
  }
  const listPeople: IPerson[] = [
    new Employee(1, "Duy", 18, 20000),
    new Manager(2, "Duy 2", 20, 50000, 2000),
    new Intern(3, "Duy 3", 21, 6),
  ];
  class PayrollService{
      private people: IPerson[];
  
      constructor(people: IPerson[]){
          this.people=people;
      }
      calculateAll(){
            this.people.forEach((person) => {
        console.log(`${person.name} Total Bonus: ${person.calculateBonus()}`);
      });
      }
  }
  
  const payrollService = new PayrollService(listPeople);
  payrollService.calculateAll();