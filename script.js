$(document).ready(function() {

    $("#myButton").click(function() {
        alert("Button is Clicked");
        $("#myParagraph").slideToggle("slow");
    });

    $(document).keyup(function(event) {
        if (event.key && event.key.toLowerCase() === 'y') {
            alert("Letter 'Y' pressed);
            $("#myParagraph").slideToggle("slow");
        }
    });

});

