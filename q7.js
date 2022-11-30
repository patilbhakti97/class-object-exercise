class Bank
{
    name;acno;type;bal;
    main()
    {
        let bank=new Bank();
        bank.initialise()
        bank.depo(1000)
        bank.withdraw(500)
        bank.print()
    }
    initialise()
    {
        this.name=prompt('Enter the name of dipositor')
        this.acno=parseInt(prompt('Enter your a/c No'))
        this.type=prompt('Enter your type of account')
        this.bal=parseInt(prompt('Enter amount to withdraw'))
    }
    depo(a)
    {
        this.deposit=a;
        this.bal=parseInt(this.bal)+parseInt(this.deposit);
    }
    withdraw(b)
    {
        this.withdraw=b;
        if (this.bal-this.withdraw<1000){
            document.write('Minimum balance should be rs 1000'+this.bal+"<br>");
        }
        else
        {this.bal=this.bal-this.withdraw;}
    }
    print()
    {
        document.write("Your Name " + this.name + "<br>")
        document.write("Your Account no " + this.acno + "<br>")
        document.write("Account Type " + this.type + "<br>")
        document.write("Account Balance " + this.bal + "<br>")
    }
}
let obj1=new Bank()
obj1.main()