
$(document).ready(function(){

    $("#start_left_button").click(function(){
        $("#start_img1").fadeTo("normal", 0, function() {
            // Animation complete.
            $("#start_img2").fadeIn("normal");
            $(".red_button").fadeIn("normal");
        });
        $(".start_button").fadeOut("normal");
        $("#top_header_text").css("color", "white").text("營樣與器官");
        // $("#top_header_text").text("營樣與器官");
    });

    $("#start_left_button").hover(function(){
        $(".start_button").fadeTo("normal", 0.8);
        $(".top_header").fadeTo("normal", 0.8);
    }, function(){
        $(".start_button").fadeTo("normal", 1);
        $(".top_header").fadeTo("normal", 1);
    });

    $("#start_right_button").click(function(){
        $("#start_img1").fadeTo("normal", 0, function() {
            // Animation complete.
            $("#start_img3").fadeIn("normal");
            $(".blue_button").fadeIn("normal");
        });
        $(".start_button").fadeOut("normal");
        $("#top_header_text").css("color", "white").text("照顧冷知識");
        // $("#top_header_text").text("營樣與器官");
    });

    $("#start_right_button").hover(function(){
        $(".start_button").fadeTo("normal", 0.8);
        $(".top_header").fadeTo("normal", 0.8);
    }, function(){
        $(".start_button").fadeTo("normal", 1);
        $(".top_header").fadeTo("normal", 1);
    });

    $("#cancel_button_red").click(function(){
        $( "#start_img2" ).fadeOut("normal", function() {
            // Animation complete.
            $("#start_img1").fadeTo("normal", 1);
            $(".start_button").fadeTo("normal", 1);
        });
        $(".red_button").fadeOut("normal");
        $("#top_header_text").css("color", "black").text("開始瞭解");
        
        if(!$("#leftTopExp_red").hasClass("displayNone")){
            $("#leftTopExp_text_red").addClass("displayNone");
            $("#leftTopExp_red").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#leftTopExp_red").addClass("displayNone");
            });
        }
        if(!$("#leftDownExp_red").hasClass("displayNone")){
            $("#leftDownExp_text_red").addClass("displayNone");
            $("#leftDownExp_red").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#leftDownExp_red").addClass("displayNone");
            });
        }
        if(!$("#rightDownExp_red").hasClass("displayNone")){
            $("#rightDownExp_text_red").addClass("displayNone");
            $("#rightDownExp_red").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#rightDownExp_red").addClass("displayNone");
            });
        }
        if(!$("#rightTopExp_red").hasClass("displayNone")){
            $("#rightTopExp_text_red").addClass("displayNone");
            $("#rightTopExp_red").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#rightTopExp_red").addClass("displayNone");
            });
        }
        // $("#top_header_text").text("營樣與器官");
    });

    // $("#cancel_button_red").hover(function(){
    //     $(".red_button").fadeTo("normal", 0.8);
    //     $("#start_img2").fadeTo("normal", 0.8);
    //     // $(".exp_red").fadeTo("normal", 0.8);
    // }, function(){
    //     $(".red_button").fadeTo("normal", 1);
    //     $("#start_img2").fadeTo("normal", 1);
    //     // $(".exp_red").fadeTo("normal", 1);
    // });
    // $(".red_exp").hide();

    $("#leftTop_button_red").click(function(){
        if($("#leftTopExp_red").hasClass("displayNone")){
            $("#leftTopExp_red").removeClass("displayNone");
            $("#leftTop_button_red").addClass("shadow");
            $("#leftTopExp_red").animate({
                height: "100px",
                width: "400px"
            }, "normal", function(){
                $("#leftTopExp_text_red").removeClass("displayNone");
            });
        }
        else{
            $("#leftTopExp_text_red").addClass("displayNone");
            $("#leftTopExp_red").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#leftTopExp_red").addClass("displayNone");
                $("#leftTopExp_red").removeClass("shadow");
            });
        }
    });
    $("#leftDown_button_red").click(function(){
        if($("#leftDownExp_red").hasClass("displayNone")){
            $("#leftDownExp_red").removeClass("displayNone");
            $("#leftDownExp_red").addClass("shadow");
            $("#leftDownExp_red").animate({
                height: "100px",
                width: "400px"
            }, "normal", function(){
                $("#leftDownExp_text_red").removeClass("displayNone");
            });
        }
        else{
            $("#leftDownExp_text_red").addClass("displayNone");
            $("#leftDownExp_red").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#leftDownExp_red").addClass("displayNone");
                $("#leftDownExp_red").removeClass("shadow");
            });
        }
    });
    $("#rightTop_button_red").click(function(){
        if($("#rightTopExp_red").hasClass("displayNone")){
            $("#rightTopExp_red").removeClass("displayNone");
            $("#rightTop_button_red").addClass("shadow");
            $("#rightTopExp_red").addClass("shadow");
            $("#rightTopExp_red").animate({
                height: "100px",
                width: "400px"
            }, "normal", function(){
                $("#rightTopExp_text_red").removeClass("displayNone");
            });
        }
        else{
            $("#rightTopExp_text_red").addClass("displayNone");
            $("#rightTopExp_red").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#rightTopExp_red").addClass("displayNone");
                $("#rightTop_button_red").removeClass("shadow");
                $("#rightTopExp_red").removeClass("shadow");
            });
        }
    });
    $("#rightDown_button_red").click(function(){
        if($("#rightDownExp_red").hasClass("displayNone")){
            $("#rightDownExp_red").removeClass("displayNone");
            $("#rightDownExp_red").animate({
                height: "100px",
                width: "400px"
            }, "normal", function(){
                $("#rightDownExp_text_red").removeClass("displayNone");
            });
        }
        else{
            $("#rightDownExp_text_red").addClass("displayNone");
            $("#rightDownExp_red").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#rightDownExp_red").addClass("displayNone");
            });
        }
    });
    // --------------Blue-----------------------
    $("#cancel_button_blue").click(function(){
        $( "#start_img3" ).fadeOut("normal", function() {
            // Animation complete.
            $("#start_img1").fadeTo("normal", 1);
            $(".start_button").fadeTo("normal", 1);
        });
        $(".blue_button").fadeOut("normal");
        $("#top_header_text").css("color", "black").text("開始瞭解");
        
        if(!$("#leftTopExp_blue").hasClass("displayNone")){
            $("#leftTopExp_text_blue").addClass("displayNone");
            $("#leftTopExp_blue").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#leftTopExp_blue").addClass("displayNone");
            });
        }
        if(!$("#leftDownExp_blue").hasClass("displayNone")){
            $("#leftDownExp_text_blue").addClass("displayNone");
            $("#leftDownExp_blue").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#leftDownExp_blue").addClass("displayNone");
            });
        }
        if(!$("#rightDownExp_blue").hasClass("displayNone")){
            $("#rightDownExp_text_blue").addClass("displayNone");
            $("#rightDownExp_blue").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#rightDownExp_blue").addClass("displayNone");
            });
        }
        if(!$("#rightTopExp_blue").hasClass("displayNone")){
            $("#rightTopExp_text_blue").addClass("displayNone");
            $("#rightTopExp_blue").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#rightTopExp_blue").addClass("displayNone");
            });
        }
        if(!$("#rightMidExp_blue").hasClass("displayNone")){
            $("#rightMidExp_text_blue").addClass("displayNone");
            $("#rightMidExp_blue").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#rightMidExp_blue").addClass("displayNone");
            });
        }
        // $("#top_header_text").text("營樣與器官");
    });

    $("#leftTop_button_blue").click(function(){
        if($("#leftTopExp_blue").hasClass("displayNone")){
            $("#leftTopExp_blue").removeClass("displayNone");
            $("#leftTop_button_blue").addClass("shadow");
            $("#leftTopExp_blue").animate({
                height: "100px",
                width: "400px"
            }, "normal", function(){
                $("#leftTopExp_text_blue").removeClass("displayNone");
            });
        }
        else{
            $("#leftTopExp_text_blue").addClass("displayNone");
            $("#leftTopExp_blue").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#leftTopExp_blue").addClass("displayNone");
                $("#leftTopExp_blue").removeClass("shadow");
            });
        }
    });
    $("#leftDown_button_blue").click(function(){
        if($("#leftDownExp_blue").hasClass("displayNone")){
            $("#leftDownExp_blue").removeClass("displayNone");
            $("#leftDownExp_blue").addClass("shadow");
            $("#leftDownExp_blue").animate({
                height: "100px",
                width: "400px"
            }, "normal", function(){
                $("#leftDownExp_text_blue").removeClass("displayNone");
            });
        }
        else{
            $("#leftDownExp_text_blue").addClass("displayNone");
            $("#leftDownExp_blue").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#leftDownExp_blue").addClass("displayNone");
                $("#leftDownExp_blue").removeClass("shadow");
            });
        }
    });
    $("#rightTop_button_blue").click(function(){
        if($("#rightTopExp_blue").hasClass("displayNone")){
            $("#rightTopExp_blue").removeClass("displayNone");
            $("#rightTop_button_blue").addClass("shadow");
            $("#rightTopExp_blue").addClass("shadow");
            $("#rightTopExp_blue").animate({
                height: "100px",
                width: "400px"
            }, "normal", function(){
                $("#rightTopExp_text_blue").removeClass("displayNone");
            });
        }
        else{
            $("#rightTopExp_text_blue").addClass("displayNone");
            $("#rightTopExp_blue").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#rightTopExp_blue").addClass("displayNone");
                $("#rightTop_button_blue").removeClass("shadow");
                $("#rightTopExp_blue").removeClass("shadow");
            });
        }
    });
    $("#rightDown_button_blue").click(function(){
        if($("#rightDownExp_blue").hasClass("displayNone")){
            $("#rightDownExp_blue").removeClass("displayNone");
            $("#rightDownExp_blue").animate({
                height: "100px",
                width: "400px"
            }, "normal", function(){
                $("#rightDownExp_text_blue").removeClass("displayNone");
            });
        }
        else{
            $("#rightDownExp_text_blue").addClass("displayNone");
            $("#rightDownExp_blue").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#rightDownExp_blue").addClass("displayNone");
            });
        }
    });
    $("#rightMid_button_blue").click(function(){
        if($("#rightMidExp_blue").hasClass("displayNone")){
            $("#rightMidExp_blue").removeClass("displayNone");
            $("#rightMidExp_blue").animate({
                height: "100px",
                width: "400px"
            }, "normal", function(){
                $("#rightMidExp_text_blue").removeClass("displayNone");
            });
        }
        else{
            $("#rightMidExp_text_blue").addClass("displayNone");
            $("#rightMidExp_blue").animate({
                height: "100px",
                width: "100px"
            }, "normal", function(){
                $("#rightMidExp_blue").addClass("displayNone");
            });
        }
    });
    // --------------WHY_BLOCK ---------------------
    $("#img_button_1").click(function(){
        $("#img_button_1").addClass("img_button_selected").removeClass("img_button");
        $("#img_button_2").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_3").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_4").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_5").removeClass("img_button_selected").addClass("img_button");
        
        // change expression img
        $("#why_expression_img").attr("src", "./images/index/why1.png");
        $("#why_expression_text").text("獸醫院專屬飲食營養推薦以及居家照護建議，讓您不用出門就可以讓您的貓接受專業診療。");
    });
    $("#img_button_2").click(function(){
        $("#img_button_2").addClass("img_button_selected").removeClass("img_button");
        $("#img_button_1").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_3").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_4").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_5").removeClass("img_button_selected").addClass("img_button");
         // change expression img
        $("#why_expression_img").attr("src", "./images/index/why2.png");
        $("#why_expression_text").text("second");
    });
    $("#img_button_3").click(function(){
        $("#img_button_3").addClass("img_button_selected").removeClass("img_button");
        $("#img_button_2").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_1").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_4").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_5").removeClass("img_button_selected").addClass("img_button");
        // change expression img
        $("#why_expression_img").attr("src", "./images/index/why3.png");
        $("#why_expression_text").text("third");
    });
    $("#img_button_4").click(function(){
        $("#img_button_4").addClass("img_button_selected").removeClass("img_button");
        $("#img_button_2").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_3").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_1").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_5").removeClass("img_button_selected").addClass("img_button");
        // change expression img
        $("#why_expression_img").attr("src", "./images/index/why4.png");
        $("#why_expression_text").text("fourth");
    });
    $("#img_button_5").click(function(){
        $("#img_button_5").addClass("img_button_selected").removeClass("img_button");
        $("#img_button_2").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_3").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_4").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_1").removeClass("img_button_selected").addClass("img_button");
        // change expression img
        $("#why_expression_img").attr("src", "./images/index/why5.png");
        $("#why_expression_text").text("fifth");
    });
    // -------------------------------------------


    // --------------PROMISE_BLOCK ---------------------

    $("#promise_button_1").click(function(){
        $("#promise_button_1").addClass("promise_button_selected").removeClass("bg-light");
        $("#promise_button_2").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_3").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_4").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_img").attr("src", "./images/index/promise1.jpg");
        $("#promise_text").text("誠實建議");
    });

    $("#promise_button_2").click(function(){
        $("#promise_button_2").addClass("promise_button_selected").removeClass("bg-light");
        $("#promise_button_1").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_3").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_4").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_img").attr("src", "./images/index/promise2.jpg");
        $("#promise_text").text("論文研究");
    });

    $("#promise_button_3").click(function(){
        $("#promise_button_3").addClass("promise_button_selected").removeClass("bg-light");
        $("#promise_button_2").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_1").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_4").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_img").attr("src", "./images/index/promise3.jpg");
        $("#promise_text").text("寵物行為師");
    });

    $("#promise_button_4").click(function(){
        $("#promise_button_4").addClass("promise_button_selected").removeClass("bg-light");
        $("#promise_button_2").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_3").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_1").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_img").attr("src", "./images/index/promise4.jpg");
        $("#promise_text").text("獸醫把關");
    });
    // -------------------------------------------

});
