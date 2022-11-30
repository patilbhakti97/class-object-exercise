class Empl
{
    Emp_no;Name;Basic;DA;HRA;TA;PF;Gross;
    main()
    {
        this.get()
        this.calcu()
        this.display()
    }
    get()
    {
        this.Emp_no=(prompt('Enter Empl No.'))
        this.Name=prompt('Enter your name')
        this.Basic=(prompt('Enter your basic salary'))
    }
    calcu()
    {
        if(this.Basic>=20000)
        {
            this.DA=(53/100)*this.Basic;
            this.HRA=(12/100)*this.Basic;
            this.TA=(10/100)*this.Basic;
            this.PF=(8/100)*this.Basic;
        }
        else if(this.Basic>=10000 && this.Basic<20000)
        { 
            this.DA=(45/100)*this.Basic;
            this.HRA=(10/100)*this.Basic;
            this.TA=(12/100)*this.Basic;
            this.PF=(7.5/100)*this.Basic;
        }
        else if(this.Basic<10000)
        {
            this.DA=(40/100)*this.Basic;
            this.HRA=(8/100)*this.Basic;
            this.TA=(14/100)*this.Basic;
            this.PF=(7/100)*this.Basic;
        }
        this.Gross=(parseInt(this.Basic)+parseInt(this.DA)+parseInt(this.TA)+parseInt(this.HRA))-this.PF
    }
    display()
    {
        document.write('Employee No.:'+this.Emp_no+"<br>");
        document.write('Name.:'+this.Name+"<br>");
        document.write('Gross Slary:'+this.Gross+"<br>");
        document.write('PF:'+this.PF+"<br>");
    }
}
let emp=new Empl();
emp.main();
