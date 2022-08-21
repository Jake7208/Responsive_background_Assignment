// ! the onclick once activated will see if the display is none if it is it will change it to inline
var a;
function show_hide()
{
    if(a ==1) 
    {
        document.getElementById("text").style.display="none";
        return a=0;
    }
    else 
    {
        document.getElementById("text").style.display="inline";
        return a=1;
    }
}
