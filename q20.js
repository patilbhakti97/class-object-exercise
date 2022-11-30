class RailwayTicket
{
    name;coach;mobno;amt;totalamt;
    main()
    {
        this.accept()
        this.update()
        this.display()
    }
    accept()
    {
        this.name=prompt('Enter your name')
        this.coach=prompt('Enter the coach')
        this.amt=parseInt(prompt('Enter the amount'))
        this.mobno=parseInt(prompt('Enter your mob no.'))
    }
    update()
    {
        if (this.coach==="First_AC") {
            this.totalamt=this.amt + 700;
        }
        else if (this.coach==="Second_AC") {
            this.totalamt=this.amt + 500;
        }
        else if (this.coach==="Third_AC") {
            this.totalamt=this.amt + 200;
        }
        else {
            this.totalamt=this.amt;
        }
    }
    display() 
    {
        document.write("Passenger Name: " + this.name + "<br>") 
        document.write("The Type of Coach Wants to Travel: " + this.coach + "<br>")
        document.write("Total Amount: " + this.totalamt + "<br>")
        document.write("Passenger Mobile Number " + this.mobno);
    }
}
let r1=new RailwayTicket();
r1.main();