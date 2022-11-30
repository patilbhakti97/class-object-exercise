class movieMagic
{
    year;title;rating;
    main()
    {
        this.accept()
        this.display()
    }
    accept()
    {
        this.year=parseInt(prompt('Enter the year of movie'))
        this.title=prompt('Enter the title of movie')
        this.rating=parseFloat(prompt('Enter the rating of movie'))

    }
    display()
    {
        if(this.rating<=2.0)
        {
            document.write('Flop')
        }
        else if(this.rating>=2.1 && this.rating<=3.4)
        {
            document.write('Semi-Hit')
        }
        else if(this.rating>=3.5 && this.rating<=4.5)
        {
            document.write('Hit')
        }
        else if(this.rating>=4.6 && this.rating<=5.0)
        {
            document.write('Super Hit')
        }
    }
}
let mm=new movieMagic()
mm.main()