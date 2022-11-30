class Student
{
    name;hindi;english;maths;computer;average;grade;
    input()
    {
        this.name=prompt('Enter your name');
        this.hindi=parseInt(prompt('Enter your marks for hindi'));
        this.english=parseInt(prompt('Enter your marks for english'));
        this.maths=parseInt(prompt('Enter your marks for maths'));
        this.computer=parseInt(prompt('Enter your marks for computer'));
    }
    calcavg()
    {
        this.average=(this.hindi+this.english+this.maths+this.computer)/4;
        document.write('Average of marks:'+this.average+"<br>");
        if(this.average>=90){
            document.write("Grade : A++");
        }
        else if(this.average>=75 && this.average<=89){
            document.write("Grade A");
        }
    }
}
let t2=new Student();
t2.input();
t2.calcavg();
