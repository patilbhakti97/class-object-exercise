class hotel
{
    Rno;NOD;Name;Tarrif;
    CALC()
    {
        let Amount;
        Amount=this.NOD*this.Tarrif;
        if(Amount>10000){
            Amount=Amount*1.05;
            return Amount;
        }
    }
    Checkin()
    {
        this.Rno=parseInt(prompt('Enter the room no.'))
        this.Name=prompt('Enter your name')
        this.Tarrif=parseInt(prompt('Enter the tarrif'))
        this.NOD=parseInt(prompt('Enter the no. of days'))
    }
    Checkout()
    {
        document.write("Room No:"+this.Rno+"<br>");
        document.write("Name:"+this.Name+"<br>");
        document.write("Tarrif:"+this.Tarrif+"<br>");
        document.write("No. of days:"+this.NOD+"<br>");
        document.write("Amount:"+this.CALC());
    }
}
let h=new hotel();
h.Checkin();
h.Checkout();