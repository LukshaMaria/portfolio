$(function()
  {
    $(".area").hover(
    function(){
        $(this).css("fill","#8B0000")
    },
    function(){
        $(this).css("fill","");
        $('#city_name').css("fill","");
    }
        )
});

$(function(){
  $('.circle_city1,.circle_city2,.circle_city3,.circle_city4,.circle_city5, .circle_city6,.circle_city7, .circle_city, circle_city12').hover(
    function()
    {
      $(this).css("fill","FFD700")
    },
    function()
    {
      $(this).css("fill","")
    }
  )
});


$("[data-tooltip]").mousemove(function(eventObject)
{
  $data_tooltip=$(this).attr("data-tooltip");
  $("#tooltip").text($data_tooltip).css
  ({
      "top":eventObject.pageY+10,
      "left":eventObject.pageX+10
  }).show();
}).mouseout(function(){
  $("#tooltip").hide()
               .text("")
               .css
               ({
                  "top":0,
                  "left":0
               });
});


$(document).ready(function(){
    $('.circle_city1').click(function()
    {
        $('#myOverlay').fadeIn(300,function()
        {
            $('#Modal_Mcecheta')
                .css('display','block')
                .animate({opacity:1},200);
        });
    });
    
    $('.circle_city2').click(function()
    {
        $('#myOverlay').fadeIn(300, function()
        {
            $('#Modal_Gergety')
            .css('display','block')
            .animate({opacity:1},200);
        });
    });
    
    $('.circle_city3').click(function()
    {
        $('#myOverlay').fadeIn(300, function()
        {
            $('#Modal_Rabat')
            .css('display','block')
            .animate({opacity:1},200);
        });
    });
    
    $('.circle_city4').click(function()
    {
        $('#myOverlay').fadeIn(300, function()
        {
            $('#Modal_Gonio')
            .css('display','block')
            .animate({opacity:1},200);
        });
    });
    
    $('.circle_city5').click(function()
    {
        $('#myOverlay').fadeIn(300, function()
        {
            $('#Modal_Square')
            .css('display','block')
            .animate({opacity:1},200);
        });
    });
    $('.circle_city6').click(function()
    {
        $('#myOverlay').fadeIn(300, function()
        {
            $('#Modal_Prometea')
            .css('display','block')
            .animate({opacity:1},200);
        });
    });
    $('.circle_city7').click(function()
    {
        
        $('#myOverlay').fadeIn(300, function()
        {
            $('#Modal_Mocamet')
            .css('display','block')
            .animate({opacity:1},200);
        });
       
    });
    $('#Modal_Close_Mcecheta, #Modal_Close_Gergety,#Modal_Close_Rabat,#Modal_Close_Kaxetia,#Modal_Close_Gonio,#Modal_Close_Mocamet, #Modal_Close_Square,#Modal_Close_Prometea,#Modal_Close_Canion').hover(function()
    {
        $('#Modal_Mcecheta').animate({opacity:0},200,function()
        {
            $(this).css('display','none');
            $('#myOverlay').fadeOut(300);
        })
        $('#Modal_Gergety').animate({opacity:0},200,function()
        {
            $(this).css('display','none');
            $('#myOverlay').fadeOut(300);
        })
        $('#Modal_Rabat').animate({opacity:0},200,function()
        {
            $(this).css('display','none');
            $('#myOverlay').fadeOut(300);
        })
        $('#Modal_Gonio').animate({opacity:0},200,function()
        {
            $(this).css('display','none');
            $('#myOverlay').fadeOut(300);
        })
         $(' #Modal_Square').animate({opacity:0},200,function()
        {
            $(this).css('display','none');
            $('#myOverlay').fadeOut(300);
        })
        $(' #Modal_Prometea').animate({opacity:0},200,function()
        {
            $(this).css('display','none');
            $('#myOverlay').fadeOut(300);
        })
        $('#Modal_Mocamet').animate({opacity:0},200,function()
        {
            $(this).css('display','none');
            $('myOverlay').fadeOut(300);
        })
        $('#Canion').animate({opacity:0},200,function()
        {
            $(this).css('display','none');
            $('myOverlay').fadeOut(300);
        })
        $('#Kaxetia').animate({opacity:0},200,function()
        {
            $(this).css('display','none');
            $('myOverlay').fadeOut(300);
        })
    });
});

var MouseCoords = {
    getX: function(e)
    {
        if (e.pageX)
        {
            return e.pageX;
        }
        else if (e.clientX)
        {
            return e.clientX+(document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
        }
        return 0;
    },
    getY: function(e)
    {
        if (e.pageY)
        {
            return e.pageY;
        }
        else if (e.clientY)
        {
            return e.clientY+(document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
        }
        return 0;
    }
    }
        document.onclick = function(e)
    {
        if (!e) e = window.event;
        var oldq = $('.image').offset();
        var speed = calcSpeed([oldq.top, oldq.left]);
        $('.image').animate({ top: MouseCoords.getY(e), left: MouseCoords.getX(e) }, speed, function(){ 
            if(((MouseCoords.getX(e)>340)&&(MouseCoords.getX(e)<365))&&((MouseCoords.getY(e)>300)&&(MouseCoords.getY(e)<340)))
            {
                
                $('#myOverlay').fadeIn(300, function()
                {
                    $('#Canion')
                    .css('display','block')
                    .animate({opacity:1},200);
                });
            }
            if(((MouseCoords.getX(e)>1300)&&(MouseCoords.getX(e)<1400))&&((MouseCoords.getY(e)>600)&&(MouseCoords.getY(e)<630)))
            {
                
                $('#myOverlay').fadeIn(300, function()
                {
                    $('#Kaxetia')
                    .css('display','block')
                    .animate({opacity:1},200);
                });
            }
        });
        function calcSpeed(prev) 
        { 
            var x = Math.abs(prev[1] - MouseCoords.getY(e));
            var y = Math.abs(prev[0] - MouseCoords.getX(e));  
            var greatest = x > y ? x : y; 
            var speedModifier = 0.7;
            var speed = Math.ceil(greatest/speedModifier);
        return speed;
        }
    }