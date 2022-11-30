class Bill
{
    name;consumerno;unitconsumed;
    datainput()
    {
        this.name=prompt('Enter your name')
        this.consumerno=parseInt(prompt('Enter consumer no.'))
        this.unitconsumed=parseInt(prompt('Unit consumed'))
    }
    compute()
    {
        if(this.unitconsumed<=100)
        {
            this.billamount=1.20*this.unitconsumed;
        }
        else if(this.unitconsumed>100 && this.unitconsumed<=200)
        {
            this.billamount=2.20*this.unitconsumed;
        }
        else if(this.unitconsumed>200 && this.unitconsumed<=300)
        {
            this.billamount=3.20*this.unitconsumed;
        }
        else if(this.unitconsumed>300)
        {
            this.billamount=4.00*this.unitconsumed;
        }
    }
    display()
    {
        document.write("Consumer Name:"+this.name+"<br>");
        document.write("Consumer No.:"+this.consumerno+"<br>");
        document.write("Unit consumed::"+this.unitconsumed+"<br>");
        document.write("Bill amount:"+this.billamount);
    }
}
let t1=new Bill();
t1.datainput();
t1.compute();
t1.display();