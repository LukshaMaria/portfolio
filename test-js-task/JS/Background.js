var element=document.getElementsByClassName("Sales");
element.onclick=function()
{
    if(this.style.backgroundColor)
    {
        this.style.backgroundColor="";
    }
    else
    {
        this.style.backgroundColor="red";
    }
}