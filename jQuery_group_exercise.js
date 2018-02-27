            console.log($);
            $(document).ready(function(){
                // $("button").click(function(){
                //     $("p").hide();
                //     // alert("hclassden!");
                // })
                $("#hideButton").click(function(){
                    $("#hideParagraph").hide();
                })
                
                $(".show p").hide();
                $(".show button").click(function () {
                    $(".show p").show();
                })

                $(".toggle button").click(function() {
                    $(".toggle p").toggle();
                })

                $(".slideDown p, .slideDown ul").hide();                
                $(".slideDown button").click(function () {
                    $(".slideDown p, .slideDown ul").slideDown();
                })

                // $(".slideUp p, .slideUp ul").hide();
                $(".slideUp button").click(function () {
                    $(".slideUp p, .slideUp ul").slideUp();
                })
                    

            })