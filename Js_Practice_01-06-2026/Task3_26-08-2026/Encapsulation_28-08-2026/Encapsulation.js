// Encapsulation means combining data and the methods that work on that data into one unit (usually a class), while controlling direct access to the data.

// In simple words:

// Encapsulation = Protect the data + control how the data is accessed or changed.

// example of bank without

class BankAccount{
    constructor(balance){
        this.balance = balance;
    }
}

const account = new BankAccount(50000);
account.balance = -100000;
console.log(account.balance);

// with

class BankAc{
    #balance1;
    constructor(balance1){
        this.#balance1 = balance1
    }

    deposite(amount){
        if(amount > 0){
            this.#balance1 += amount;
            console.log("Deposite:",amount);

        } else{
            console.log("Invalid amount");
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.#balance1){
            this.#balance1 -= amount;
            console.log("withdrawn:", amount);
        }else{
            console.log("Insufficient balance or Invalid amount");
        }
    }

    getBalance(){
        return this.#balance1;
    }
}
const account1 = new BankAc(50000);

account1.deposite(10000);
account1.withdraw(5000);

console.log("Balance:", account1.getBalance());



// employee salary

class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    increaseSalary(amount) {
        if (amount > 0) {
            this.#salary += amount;
            console.log("Salary increased by:", amount);
        }
    }
}

const emp1 = new Employee("Sana", 50000);

console.log("Salary:", emp1.getSalary());

emp1.increaseSalary(5000);

console.log("Salary:", emp1.getSalary());




// | Concept           | Meaning                            |
// | ----------------- | ---------------------------------- |
// | **Class**         | Blueprint for objects              |
// | **Constructor**   | Initializes the object             |
// | **`this`**        | Refers to the current object       |
// | **Method**        | Performs an action                 |
// | **Inheritance**   | Child class reuses parent features |
// | **Encapsulation** | Protects data and controls access  |

