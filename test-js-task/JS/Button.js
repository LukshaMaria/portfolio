$('.buy').addClass("diagonal_swipe_left");
$('.buy').on('click',function()
{
    alert("Товар добавлен в корзину!");
});
window.onload = function () {

    var a = document.getElementById("plus");
    var b = document.getElementById("minus");
    var sum = document.getElementById("summa");
    var span=document.getElementById("span");
    var finish_sum=document.getElementById("finish_sum");
    var s=500;
    var min_sum=50;
    var f_s=530;
    a.onclick = function() 
    {

        span.innerHTML++;
        sum.innerHTML=s+min_sum;
        s+=min_sum;
        f_s+=min_sum;
        finish_sum.innerHTML=f_s;
    }
    b.onclick = function() 
    {
        span.innerHTML--;
        sum.innerHTML=s-min_sum;
        s-=min_sum;
        f_s-=min_sum;
        finish_sum.innerHTML=f_s;
    }
    var a2 = document.getElementById("plus2");
    var b2 = document.getElementById("minus2");
    var sum2 = document.getElementById("summa2");
    var span2=document.getElementById("span2");
    var s2=30;
    var min_sum2=10;
    a2.onclick = function() 
    {

        span2.innerHTML++;
        sum2.innerHTML=s2+min_sum2;
        s2+=min_sum2;
        f_s+=min_sum2;
        finish_sum.innerHTML=f_s;
    }
    b2.onclick = function() 
    {
        span2.innerHTML--;
        sum2.innerHTML=s2-min_sum2;
        s2-=min_sum2;
        f_s-=min_sum2;
        finish_sum.innerHTML=f_s;
    }
}