class Electricbill
{
    n;units;bill;
    main()
    {
        this.accept()
        this.calculate()
        this.print()
    }
    accept()
    {
        this.n=prompt('Enter your name')
        this.units=parseInt(prompt('Enter the unit consumed'))
    }
    calculate()
    {
        
        if(this.units<=100)
        {
            this.rate=2
            this.bill=this.units*this.rate
        }
        else if(this.units>=101 && this.units<=200)
        {
            this.rate=3
            this.bill=this.units*this.rate
        }
        else if (this.units>=201 && this.units<=300)
        {
            this.rate=5
            this.bill=this.units*this.rate
        }
        else{
            this.charge=this.units*(2.5/100)
            this.bill=5*this.units+this.charge
        }
    }
    print()
    {
        document.write("Name of customer:"+this.n+"<br>");
        document.write("No of units consumed:"+this.units+"<br>");
        document.write("Bill amount:"+this.bill);
    }
}
let e1=new Electricbill()
e1.main()