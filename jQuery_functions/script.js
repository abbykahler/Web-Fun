$(document).ready(function(){
    // click hide show
    $(".button1").click(function(){
    $("p").hide();
    });
    $(".button2").click(function(){
        $("p").show();
    });

    // toggle
    $(".button3").click(function(){
        $("p").toggle();
    });

        // slide
    $(".button4").click(function(){
    $("p").slideUp();
    });
    $(".button5").click(function(){
        $("p").slideDown();
    });
//         slide up and down
    $(".button6").click(function(){
        $("p").slideToggle();
    });
 //         fade in and out     
    $(".button7").click(function(){
    $("p").fadeOut();
    });
    $(".button8").click(function(){
    $("p").fadeIn();
    });
    //  add class
    $(".button9").click(function(){
        $("p").addClass("addclass");
    });

    // before and after
    $(".button10").click(function(){
        $("p").before("more and more ");
    });
    $(".button11").click(function(){
        $("p").after("And even more after ");
    });

    // append
    $(".button12").click(function(){
        $("p").append(" <b>More text </b>.");
    });

    // html

    $(".button13").click(function(){
        $("p").html("Magic!!");
      });

    //   attr
    $(".button14").click(function(){
        $("p").attr("font-size", "200px");
      });
    //   val
    $(".button15").click(function(){
        $("input:text").val("Batman");
      });
    //   text
    $(".button16").click(function(){
        $("p").text("GoodBye");
      });
});