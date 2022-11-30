class Salary{
    Name;Address;subSpe;mSal;it;phone;
    constructor(){
     this.Name=prompt("Enter your Name")   
     this.Address=prompt("Enter your Address")   
     this.subSpe=prompt("Enter your subject Specialisation")   
     this.phone=prompt("Enter your phone no")   
     this.mSal=prompt("Enter your mSal")   
    }
    display(){
        document.write("Name: "+this.Name+"<br>");
        document.write("Address: "+this.Address+"<br>");
        document.write("Subject Specialisation: "+this.subSpe+"<br>");
        document.write("Phone No.: "+this.phone+"<br>");
        document.write("Monthly Salary: "+this.mSal+"<br>");
    }
    cal(){
      
        let asal=this.mSal*12;
        if(asal>175000){
            this.it=0.05*(asal-175000)
        }
        else{
            this.it=0;
        }
        document.write(this.it)
    }
}

let t1=new Salary();
t1.display();
t1.cal();