class Employee {
    pan; name; taxincome; tax
    input() {
        this.pan = prompt("Enter PAN")
        this.name = prompt("Enter Name")
        this.taxincome = prompt("Enter Taxable income")
    }
    compute() {
        if (this.taxincome <= 100000) {
            this.tax = 0;
        }
        else if (this.taxincome > 100000 && this.taxincome <= 150000) {
            this.tax = 0.1 * (this.taxincome - 100000)
        }
        else if (this.taxincome > 150000 && this.taxincome <= 250000) {
            this.tax = 5000 + (0.2 * (this.taxincome - 150000))
        }
        else if (this.taxincome > 250000) {
            this.tax = 25000 + (0.3 * (this.taxincome - 250000))
        }
    }
    display() {
        document.write("PAN: " + this.pan + "<br>")
        document.write("Name: " + this.name + "<br>")
        document.write("Taxable Income: " + this.taxincome + "<br>")
        document.write("Tax: " + this.tax + "<br>")
    }
}

let emp1 = new Employee();
emp1.input();
emp1.compute();
emp1.display();