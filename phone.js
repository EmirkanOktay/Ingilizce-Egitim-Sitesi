$(document).ready(function(){
    $(".fa-solid.fa-phone.fa-sm").click(function(){
        $(".navbar-wrapper").hide();
        $(".introduce").hide();
        $(".phone-wrapper").slideDown(); 
        $("#social").hide()
        $("#media").hide()
        $("#social").hide()
        $(".section-wrapper").hide()
        $(".explain").hide() 
        $(".blog-wrapper").hide()
        $(".about").hide()
        $(".team").hide() 
        $(".contact-photo").hide()
        $(".contact").hide()
        $(".footer").hide()
        $(".kayit-wrapper").hide()
    });

    $("#x").click(function(){
        $(".phone-wrapper").slideUp(); 
        $(".navbar-wrapper").css("display","block");
        $(".introduce").css("display","block");
        $("#social").css("display","block");
        $("#media").css("display","block");
        $(".section-wrapper").css("display","block");
        $(".explain").css("display","block");
        $(".about").css("display","block");
        $(".team").css("display","block");
        $(".contact-photo").css("display","block");
        $(".contact").css("display","block");
        $(".footer").css("display","block");
        $(".kayit-wrapper").css("display","block");
    });
});
