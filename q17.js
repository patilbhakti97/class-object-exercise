class ParkingLot
{
    vno;hours;bill;
    main()
    {
        this.input()
        this.calculate()
        this.display()
    }
    input()
    {
        this.vno=prompt('Enter vehicle No.')
        this.hours=parseInt(prompt('No.of hours vehicle is parked'))
    }
    calculate()
    {
        if (this.hours === 1) {
            this.bill = this.hours * 3;
        }
        else if (this.hours > 1) {
            this.bill = (this.hours - 1) * 1.50 + 3;
        }
    }
    display()
    {
        document.write("Vehicle no:"+this.vno+"<br>");
        document.write("No of hrs vehicle parked:"+this.hours+"<br>");
        document.write("Bill amount:"+this.bill+"<br>");
    }
}
let p=new ParkingLot()
p.main();