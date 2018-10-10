
$(document).ready(function(){
    // $("#start_left_button").click(function(){
    //     $(".start_button").fadeOut("normal", function(){
    //         $(".red_button").fadeIn("normal");
    //         $("#top_header_text").css("color", "black").text("營樣與器官");
    //     });
    // });
    $("#start_left_button").click(function(){
        // $("#start_img1").fadeTo("normal", 0, function() {
        //     // Animation complete.
        //     $("#start_img2").fadeIn("normal");
        //     $(".red_button").fadeIn("normal");
        // });
        $(".red_button").fadeIn("normal");
        $(".start_button").fadeOut("normal");
        $("#top_header_text").css("color", "black").text("營樣與器官");
        // $("#top_header_text").text("營樣與器官");
    });
    // $("#start_left_button").hover(function(){
    //     $("#start_left_button").stop().animate({
    //         height: "100%",
    //         width: "20%",
    //         left: "0",
    //         bottom: "0",
    //         border: "0",
    //         borderRadius: "10px"
    //     }, "slow", function(){
    //         $("#start_left_button").text("想瞭解你的貓貓的器官有什麼隱藏危機嗎？");
    //     });
    // }, function(){
    //     $("#start_left_button").text("營樣與器官");
    //     $("#start_left_button").stop().animate({
    //         bottom: "50%",
    //         left: "10%",
    //         height: "50px",
    //         width: "125px",
    //         borderRadius: "25px"
    //     }, "slow")
    // });
    // $("#start_left_button").hover(function(){
    //     $(".start_button").fadeTo("normal", 0.8);
    //     $(".top_header").fadeTo("normal", 0.8);
    // }, function(){
    //     $(".start_button").fadeTo("normal", 1);
    //     $(".top_header").fadeTo("normal", 1);
    // });

    $("#start_right_button").click(function(){
        // $("#start_img1").fadeTo("normal", 0, function() {
        //     // Animation complete.
        //     $("#start_img3").fadeIn("normal");
        //     $(".blue_button").fadeIn("normal");
        // });
        $(".blue_button").fadeIn("normal");
        $(".start_button").fadeOut("normal");
        $("#top_header_text").css("color", "black").text("照顧冷知識");
        // $("#top_header_text").text("營樣與器官");
    });

    // $("#start_right_button").hover(function(){
    //     $(".start_button").fadeTo("normal", 0.8);
    //     $(".top_header").fadeTo("normal", 0.8);
    // }, function(){
    //     $(".start_button").fadeTo("normal", 1);
    //     $(".top_header").fadeTo("normal", 1);
    // });
    // $("#start_right_button").hover(function(){
    //     $("#start_right_button").stop().animate({
    //         height: "100%",
    //         width: "20%",
    //         right: "0",
    //         bottom: "0",
    //         border: "0",
    //         borderRadius: "10px"
    //     }, "slow", function(){
    //         $("#start_right_button").text("你不知道的照顧冷知識");
    //     });
    // }, function(){
    //     $("#start_right_button").text("照顧冷知識");
    //     $("#start_right_button").stop().animate({
    //         bottom: "50%",
    //         right: "10%",
    //         height: "50px",
    //         width: "125px",
    //         borderRadius: "25px"
    //     }, "slow")
    // });
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

  
    $("#leftTop_button_red").hover(function(){
        $("#leftTopExp_red").removeClass("displayNone");
        $("#leftTop_button_red").addClass("shadow");
        $("#leftTopExp_red").animate({
            height: "100px",
            width: "400px"
        }, "normal", function(){
            $("#leftTopExp_text_red").removeClass("displayNone");
        });
    });
    $("#leftDown_button_red").hover(function(){
        $("#leftDownExp_red").removeClass("displayNone");
        $("#leftDown_button_red").addClass("shadow");
        $("#leftDownExp_red").animate({
            height: "100px",
            width: "400px"
        }, "normal", function(){
            $("#leftDownExp_text_red").removeClass("displayNone");
        });
    });
    $("#rightTop_button_red").hover(function(){
        $("#rightTopExp_red").removeClass("displayNone");
        $("#rightTop_button_red").addClass("shadow");
        $("#rightTopExp_red").animate({
            height: "100px",
            width: "400px"
        }, "normal", function(){
            $("#rightTopExp_text_red").removeClass("displayNone");
        });
    });
    $("#rightDown_button_red").hover(function(){
        $("#rightDownExp_red").removeClass("displayNone");
        $("#rightDown_button_red").addClass("shadow");
        $("#rightDownExp_red").animate({
            height: "100px",
            width: "400px"
        }, "normal", function(){
            $("#rightDownExp_text_red").removeClass("displayNone");
        });
    });
    // $("#leftTop_button_red").click(function(){
    //     if($("#leftTopExp_red").hasClass("displayNone")){
    //         $("#leftTopExp_red").removeClass("displayNone");
    //         $("#leftTop_button_red").addClass("shadow");
    //         $("#leftTopExp_red").animate({
    //             height: "100px",
    //             width: "400px"
    //         }, "normal", function(){
    //             $("#leftTopExp_text_red").removeClass("displayNone");
    //         });
    //     }
    //     else{
    //         $("#leftTopExp_text_red").addClass("displayNone");
    //         $("#leftTopExp_red").animate({
    //             height: "100px",
    //             width: "100px"
    //         }, "normal", function(){
    //             $("#leftTopExp_red").addClass("displayNone");
    //             $("#leftTop_button_red").removeClass("shadow");
    //         });
    //     }
    // });
    
    // $("#leftDown_button_red").click(function(){
    //     if($("#leftDownExp_red").hasClass("displayNone")){
    //         $("#leftDownExp_red").removeClass("displayNone");
    //         $("#leftDown_button_red").addClass("shadow");
    //         $("#leftDownExp_red").animate({
    //             height: "100px",
    //             width: "400px"
    //         }, "normal", function(){
    //             $("#leftDownExp_text_red").removeClass("displayNone");
    //         });
    //     }
    //     else{
    //         $("#leftDownExp_text_red").addClass("displayNone");
    //         $("#leftDownExp_red").animate({
    //             height: "100px",
    //             width: "100px"
    //         }, "normal", function(){
    //             $("#leftDownExp_red").addClass("displayNone");
    //             $("#leftDown_button_red").removeClass("shadow");
    //         });
    //     }
    // });
    // $("#rightTop_button_red").click(function(){
    //     if($("#rightTopExp_red").hasClass("displayNone")){
    //         $("#rightTopExp_red").removeClass("displayNone");
    //         $("#rightTop_button_red").addClass("shadow");
    //         $("#rightTopExp_red").animate({
    //             height: "100px",
    //             width: "400px"
    //         }, "normal", function(){
    //             $("#rightTopExp_text_red").removeClass("displayNone");
    //         });
    //     }
    //     else{
    //         $("#rightTopExp_text_red").addClass("displayNone");
    //         $("#rightTopExp_red").animate({
    //             height: "100px",
    //             width: "100px"
    //         }, "normal", function(){
    //             $("#rightTopExp_red").addClass("displayNone");
    //             $("#rightTop_button_red").removeClass("shadow");
    //         });
    //     }
    // });
    // $("#rightDown_button_red").click(function(){
    //     if($("#rightDownExp_red").hasClass("displayNone")){
    //         $("#rightDownExp_red").removeClass("displayNone");
    //         $("#rightDown_button_red").addClass("shadow");
    //         $("#rightDownExp_red").animate({
    //             height: "100px",
    //             width: "400px"
    //         }, "normal", function(){
    //             $("#rightDownExp_text_red").removeClass("displayNone");
    //         });
    //     }
    //     else{
    //         $("#rightDownExp_text_red").addClass("displayNone");
    //         $("#rightDownExp_red").animate({
    //             height: "100px",
    //             width: "100px"
    //         }, "normal", function(){
    //             $("#rightDownExp_red").addClass("displayNone");
    //             $("#rightDown_button_red").removeClass("shadow");
    //         });
    //     }
    // });
    // --------------Blue-----------------------


    $("#leftTop_button_blue").hover(function(){
        $("#leftTopExp_blue").removeClass("displayNone");
        $("#leftTop_button_blue").addClass("shadow");
        $("#leftTopExp_blue").animate({
            height: "100px",
            width: "400px"
        }, "normal", function(){
            $("#leftTopExp_text_blue").removeClass("displayNone");
        });
    });
    $("#leftDown_button_blue").hover(function(){
        $("#leftDownExp_blue").removeClass("displayNone");
        $("#leftDown_button_blue").addClass("shadow");
        $("#leftDownExp_blue").animate({
            height: "100px",
            width: "400px"
        }, "normal", function(){
            $("#leftDownExp_text_blue").removeClass("displayNone");
        });
    });
    $("#rightTop_button_blue").hover(function(){
        $("#rightTopExp_blue").removeClass("displayNone");
        $("#rightTop_button_blue").addClass("shadow");
        $("#rightTopExp_blue").animate({
            height: "100px",
            width: "400px"
        }, "normal", function(){
            $("#rightTopExp_text_blue").removeClass("displayNone");
        });
    });
    $("#rightDown_button_blue").hover(function(){
        $("#rightDownExp_blue").removeClass("displayNone");
        $("#rightDown_button_blue").addClass("shadow");
        $("#rightDownExp_blue").animate({
            height: "100px",
            width: "400px"
        }, "normal", function(){
            $("#rightDownExp_text_blue").removeClass("displayNone");
        });
    });
    $("#rightMid_button_blue").hover(function(){
        $("#rightMidExp_blue").removeClass("displayNone");
        $("#rightMid_button_blue").addClass("shadow");
        $("#rightMidExp_blue").animate({
            height: "100px",
            width: "400px"
        }, "normal", function(){
            $("#rightMidExp_text_blue").removeClass("displayNone");
        });
    });

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
    });

    // $("#leftTop_button_blue").click(function(){
    //     if($("#leftTopExp_blue").hasClass("displayNone")){
    //         $("#leftTopExp_blue").removeClass("displayNone");
    //         $("#leftTop_button_blue").addClass("shadow");
    //         $("#leftTopExp_blue").animate({
    //             height: "100px",
    //             width: "400px"
    //         }, "normal", function(){
    //             $("#leftTopExp_text_blue").removeClass("displayNone");
    //         });
    //     }
    //     else{
    //         $("#leftTopExp_text_blue").addClass("displayNone");
    //         $("#leftTopExp_blue").animate({
    //             height: "100px",
    //             width: "100px"
    //         }, "normal", function(){
    //             $("#leftTopExp_blue").addClass("displayNone");
    //             $("#leftTop_button_blue").removeClass("shadow");
    //         });
    //     }
    // });
    // $("#leftDown_button_blue").click(function(){
    //     if($("#leftDownExp_blue").hasClass("displayNone")){
    //         $("#leftDownExp_blue").removeClass("displayNone");
    //         $("#leftDown_button_blue").addClass("shadow");
    //         $("#leftDownExp_blue").animate({
    //             height: "100px",
    //             width: "400px"
    //         }, "normal", function(){
    //             $("#leftDownExp_text_blue").removeClass("displayNone");
    //         });
    //     }
    //     else{
    //         $("#leftDownExp_text_blue").addClass("displayNone");
    //         $("#leftDownExp_blue").animate({
    //             height: "100px",
    //             width: "100px"
    //         }, "normal", function(){
    //             $("#leftDownExp_blue").addClass("displayNone");
    //             $("#leftDown_button_blue").removeClass("shadow");
    //         });
    //     }
    // });
    // $("#rightTop_button_blue").click(function(){
    //     if($("#rightTopExp_blue").hasClass("displayNone")){
    //         $("#rightTopExp_blue").removeClass("displayNone");
    //         $("#rightTop_button_blue").addClass("shadow");
    //         $("#rightTopExp_blue").animate({
    //             height: "100px",
    //             width: "400px"
    //         }, "normal", function(){
    //             $("#rightTopExp_text_blue").removeClass("displayNone");
    //         });
    //     }
    //     else{
    //         $("#rightTopExp_text_blue").addClass("displayNone");
    //         $("#rightTopExp_blue").animate({
    //             height: "100px",
    //             width: "100px"
    //         }, "normal", function(){
    //             $("#rightTopExp_blue").addClass("displayNone");
    //             $("#rightTop_button_blue").removeClass("shadow");
    //         });
    //     }
    // });
    // $("#rightDown_button_blue").click(function(){
    //     if($("#rightDownExp_blue").hasClass("displayNone")){
    //         $("#rightDownExp_blue").removeClass("displayNone");
    //         $("#rightDown_button_blue").addClass("shadow");
    //         $("#rightDownExp_blue").animate({
    //             height: "100px",
    //             width: "400px"
    //         }, "normal", function(){
    //             $("#rightDownExp_text_blue").removeClass("displayNone");
    //         });
    //     }
    //     else{
    //         $("#rightDownExp_text_blue").addClass("displayNone");
    //         $("#rightDownExp_blue").animate({
    //             height: "100px",
    //             width: "100px"
    //         }, "normal", function(){
    //             $("#rightDownExp_blue").addClass("displayNone");
    //             $("#rightDown_button_blue").removeClass("shadow");
    //         });
    //     }
    // });
    // $("#rightMid_button_blue").click(function(){
    //     if($("#rightMidExp_blue").hasClass("displayNone")){
    //         $("#rightMidExp_blue").removeClass("displayNone");
    //         $("#rightMid_button_blue").addClass("shadow");
    //         $("#rightMidExp_blue").animate({
    //             height: "100px",
    //             width: "400px"
    //         }, "normal", function(){
    //             $("#rightMidExp_text_blue").removeClass("displayNone");
    //         });
    //     }
    //     else{
    //         $("#rightMidExp_text_blue").addClass("displayNone");
    //         $("#rightMidExp_blue").animate({
    //             height: "100px",
    //             width: "100px"
    //         }, "normal", function(){
    //             $("#rightMidExp_blue").addClass("displayNone");
    //             $("#rightMid_button_blue").removeClass("shadow");
    //         });
    //     }
    // });
    // --------------WHY_BLOCK ---------------------
    $("#img_button_1").hover(function(){
        $("#img_button_1").addClass("img_button_selected").removeClass("img_button");
        $("#img_button_2").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_3").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_4").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_5").removeClass("img_button_selected").addClass("img_button");
        
        // change expression img
        $("#why_expression_img").attr("src", "images/index/why1.png");
        $("#why_expression_text").text("依照貓咪的品種、年齡，和身體需求，給予最合適的營養需求及照護建議，從危機預防到尋找徵兆，從早期發現到早期治療，居家搭建完整防護網。");
    });
    $("#img_button_2").hover(function(){
        $("#img_button_2").addClass("img_button_selected").removeClass("img_button");
        $("#img_button_1").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_3").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_4").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_5").removeClass("img_button_selected").addClass("img_button");
         // change expression img
        $("#why_expression_img").attr("src", "images/index/why2.png");
        $("#why_expression_text").text("貓咪情感細膩，對身邊的人和事非常敏感，也容易緊張、有壓力。貓咪的壓力可大可小，但心理會影響生理，嚴重更會致病，提供完整貓咪的心理照護資訊，不只照顧貓咪的身體，更能讓貓咪更開心。");
    });
    $("#img_button_3").hover(function(){
        $("#img_button_3").addClass("img_button_selected").removeClass("img_button");
        $("#img_button_2").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_1").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_4").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_5").removeClass("img_button_selected").addClass("img_button");
        // change expression img
        $("#why_expression_img").attr("src", "images/index/why3.png");
        $("#why_expression_text").text("依照貓咪的身體變化及飼主的回饋，隨時進行飲食菜單的調整，不僅是飲食的更換，更能針對貓咪及飼主的互動進行餵養方式的調整，讓每位毛爸毛媽放心，更能讓每位毛孩吃得健康。");
    });
    $("#img_button_4").hover(function(){
        $("#img_button_4").addClass("img_button_selected").removeClass("img_button");
        $("#img_button_2").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_3").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_1").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_5").removeClass("img_button_selected").addClass("img_button");
        // change expression img
        $("#why_expression_img").attr("src", "images/index/why4.png");
        $("#why_expression_text").text("月費式的消費模式能夠讓飼主馬上更換相同價位區間的飼料，讓毛孩能補充多樣微量元素，自由的選擇品牌搭配，給毛孩更多的選擇，且獸醫也建議貓咪至少每2~3個月需要更換一次飼料。");
    });
    $("#img_button_5").hover(function(){
        $("#img_button_5").addClass("img_button_selected").removeClass("img_button");
        $("#img_button_2").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_3").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_4").removeClass("img_button_selected").addClass("img_button");
        $("#img_button_1").removeClass("img_button_selected").addClass("img_button");
        // change expression img
        $("#why_expression_img").attr("src", "images/index/why5.png");
        $("#why_expression_text").text("網上的健檢諮詢就能獲得醫師所需的身理資訊，不需將寶貝毛孩帶出門奔波就能獲得飲食營養推薦及居家照護建議，省去飼主麻煩，減少貓咪外出壓力。");
    });
    // -------------------------------------------


    // --------------PROMISE_BLOCK ---------------------

    $("#promise_button_1").hover(function(){
        $("#promise_button_1").addClass("promise_button_selected").removeClass("bg-light");
        $("#promise_button_2").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_3").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_4").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_img").attr("src", "images/index/promise1.jpg");
        $("#promise_text").text("沒有業績銷售壓力，完全針對每隻毛孩的身體狀況，以最誠實、無偏見的方式呈現出最合適的飼料。");
    });

    $("#promise_button_2").hover(function(){
        $("#promise_button_2").addClass("promise_button_selected").removeClass("bg-light");
        $("#promise_button_1").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_3").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_4").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_img").attr("src", "images/index/promise2.jpg");
        $("#promise_text").text("整合國內外學界、研究單位及業界最新的寵物資訊，打造最正確、完善的健康飲食菜單。");
    });

    $("#promise_button_3").hover(function(){
        $("#promise_button_3").addClass("promise_button_selected").removeClass("bg-light");
        $("#promise_button_2").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_1").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_4").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_img").attr("src", "images/index/promise3.jpg");
        $("#promise_text").text("不僅是身理，卡卡貓也注重毛孩的心理健康，針對毛孩的特殊狀況都有可能是心理所引起的反應。");
    });

    $("#promise_button_4").hover(function(){
        $("#promise_button_4").addClass("promise_button_selected").removeClass("bg-light");
        $("#promise_button_2").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_3").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_button_1").removeClass("promise_button_selected").addClass("bg-light");
        $("#promise_img").attr("src", "images/index/promise4.jpg");
        $("#promise_text").text("透過專業的獸醫團隊及營養師團隊定期更新醫療界知識，確保每隻毛孩都能吃到最安心的選擇。");
    });
    // -------------------------------------------

});
