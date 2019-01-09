$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   var toggleWidth = $(".login-page").width() == "360" ? "530" : "360";
        $('.login-page').animate({ width: toggleWidth },"slow");
});