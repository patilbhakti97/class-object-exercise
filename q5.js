class Mobike
{
    bno;phno;name;days;charge;
    input()
    {
        this.bno=prompt('Enter your bike no.');
        this.phno=prompt('Enter your phone no.');
        this.name=prompt('Enter your name');
        this.days=prompt('No. of days the bike is taken on rent');
    }
    calc()
    {
        if(this.days<=5){
            this.charge=this.days*500;
        }
        else if(this.days>5 && this.days<=10){
            this.charge=this.days*400;
        }
        else if(this.days>10){
            this.charge=this.days*200;
        }
    }
    display()
    {
        document.write("Bike no: "+this.bno +"<br>")
        document.write("Phone no: "+this.phno +"<br>")
        document.write("Name: "+this.name +"<br>")
        document.write("No. of Days: "+this.days +"<br>")
        document.write("Charge: "+this.charge +"<br>")
    }
}
let t1=new Mobike();
t1.input();
t1.calc();
t1.display();