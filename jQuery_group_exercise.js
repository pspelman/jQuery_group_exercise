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

                $(".slideToggle button").click(function(){
                    $(".slideToggle p, .slideToggle ul").slideToggle();
                })

                $(".fadeIn p, .fadeIn ul").hide();
                $(".fadeIn button").click(function() {
                    $(".fadeIn p, .fadeIn ul").fadeIn(2000);                    
                })
                
                $(".fadeOut button").click(function(){
                    $(".fadeOut ul, .fadeOut p").fadeOut(2000);
                })

                $(".addClass button").click(function(){
                    $(".addClass p").addClass("blue");
                })

                $(".before button").click(function() {
                    $(".before button").before("<p>This is a paragraph that came before!</p>");
                })

                $(".after button").click(function () {
                    $(".after button").after("<p>This is a paragraph that came after!</p>");
                })

                $(".attr button").click(function() {
                    // var likes = $(".attr input").attr("name");
                    // console.log(likes);
                    var likes = $(".attr input").attr("placeholder");
                    
                    // var likes = $(".attr #pizza").attr();
                    // var likes = $(".attr #pizza").attr();
                    $(".attr p").after("<p>I like " + likes + "</p>");
                    
                })

                $(".val button").click(function(){
                   var temp = $(".val input").val();
                   $(".val input").after("<p>"+temp+"</p>"); 
                    
                })

                $(".text button").click(function(){
                    $(".set_text_class").text("THIS IS NEW TEXT!!!!");
                    $(".set_text_class").attr("style","font-size: 30pt");
                })
                
                $(".data p").data("students",{first_name:"Fred", last_name:"Johnson" });
                $(".data button").click(function(){
                    var text = $(".data p").data("students").first_name;
                    $(".data p").text(text + " " + $(".data p").data("students").last_name);
                })

                $(".data p").data("students",{
                    first_name:"Fred", 
                    middle_name: "Paul",
                    last_name:"Johnson",
                     });
                     console.log($(".data p").data());
                var studentArray = $(".data p").data();

                var newArray = [ 
                    { fname: "tim", lname: "jones"},
                    { fname: "jill", lname: "thompson"},
                    { fname: "clark", lname: "kent"}
                ];
                console.log(newArray);

                function getFields(input, field) {
                    var output = [];
                    for (var i = 0; i < input.length; ++i)
                        output.push(input[i][field]);
                    return output;
                }
                console.log(getFields(newArray, "fname"));             
            
                console.log("MAPPING ARRAY");
                var result = newArray.map(name => name.fname);
                console.log("RESULT: " + result);



















                $(".html button").click(function() {

                    var currentHTML = $(".html ul").html();
                    $(".html ul").html(currentHTML + "<li>NEW ITEM</li>");
                    // $(".html div").html( + "<ul><li>NEW ITEM</li></ul>");
                })
                    

            })