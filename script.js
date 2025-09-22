$(document).ready(function() {

    $("#myButton").click(function() {
        alert("Button is Clicked");
        $("p").slideToggle("slow");
    });

    $(document).keyup(function(event) {
        if (event.key && event.key.toLowerCase() === 'y') {
            alert("Letter 'Y' pressed – toggling text");
            $("p").slideToggle("slow");
        }
    });

});
