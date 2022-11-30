class Library
{
    acc_num;title;author;
    main()
    {
        this.input();
        this.compute();
        this.display();
    }
    input()
    {
        this.acc_num=prompt('Enter the accession number')
        this.title=prompt('Enter the title')
        this.author=prompt('Enter the author')
    }
    compute()
    {
        let late=prompt('Enter the no. of days late')
        this.fine=late*2;
    }
    display()
    {
        document.write("Accession number:"+this.acc_num+"<br>");
        document.write("Title:"+this.title+"<br>");
        document.write("Author:"+this.author+"<br>");
        document.write("Fine:Rs."+this.fine+"<br>");
    }
}
let Lib=new Library()
Lib.main();