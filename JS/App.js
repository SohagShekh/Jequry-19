$(document).ready(function() {
    $('h4').nextAll('').css({
        "color": "red",
        "border": "2px solid red"
    });

    $('h4').prevAll('').css({
        "color": "blue",
        "border": "2px solid blue"
    });

});

//........................// 

$(document).ready(function() {
    $(".btn1").click(function() {
        $(".p1").hide("slow", function() {
            alert("Hi You Are Done");
        });
    });
});

//.........CALL BACK Mathord.........// 

$(document).ready(function() {
    $(".btn2").click(function() {
        $(".p2").css("background-color", "blue")
            .slideUp("slow")
            .slideDown("slow")
            .hide("slow")
    });
});

$(document).ready(function() {
    $(".btn3").click(function() {
        $(".hlw").load("Sub.html")

    });
});