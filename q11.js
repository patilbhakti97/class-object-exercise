class FruitJuice
{
    pCode=1234;
    pType="xlx";
    pSize=123;
    pPrice=1234;
    flavour="choco";
    input()
    {
        let a=prompt('Enter the product code');
        this.pCode=parseInt(a);
        this.flavour=prompt('Enter the flavour (Orange/Apple,etc)');
        this.pType=prompt('Enter the pack type (tetra-pack/bottle,etc)');
        let b=prompt('Enter the pack size (200ml/400ml,etc)');
        this.pSize=parseInt(b);
        let c=prompt('Enter the product price');
        this.pPrice=parseInt(c);
    }
    discount()
    {
        this.pPrice-=10;
    }
    display()
    {
        document.write("Product code:"+this.pCode+"<br>");
        document.write("Flavour:"+this.flavour+"<br>");
        document.write("Pack type:"+this.pType+"<br>");
        document.write("Product size:"+this.pSize+"<br>");
        document.write("Product price:"+this.pPrice+"<br>");
        document.write("Discount:"+this.pPrice);
    }
}
let fruitJuice=new FruitJuice();
fruitJuice.input();
fruitJuice.discount();
fruitJuice.display();