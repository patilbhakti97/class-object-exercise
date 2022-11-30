class student
{
    name;age;m1;m2;m3;max;avg;
    constructor()
    {
        this.name=prompt('Enter your name:')
        this.m1=parseInt(prompt('Enter your marks for m1:'))
        this.m2=parseInt(prompt('Enter your marks for m2:'))
        this.m3=parseInt(prompt('Enter your marks for m3:'))
        this.age=parseInt(prompt('Enter your age:'))
    }
    display()
    {
        __proto__:this.compute();
        document.write(`Name: ${this.name}\n`+"<br>")
        document.write(`Age: ${this.age}\n`+"<br>")
        document.write(`Marks: ${this.m1+this.m2+this.m3}\n`+"<br>")
        document.write(`Max marks: ${this.max}\n`+"<br>")
        document.write(`Average: ${this.avg}`)
    }
    compute()
    {
        this.max=Math.max(Math.max(this.m1,this.m2),this.m3);
        this.avg=(this.m1+this.m2+this.m3)/3;
    }
}
let ob=new student();
ob.display();