$(document).ready(function() {

    $("#myButton").click(function() {
        alert("Button is Clicked");
        $("#para").slideToggle("slow");
    });

    $(document).keyup(function(event) {
        if (event.key && event.key.toLowerCase() === 'y') {
            alert("Letter 'Y' pressed");
            $("#para").slideToggle("slow");
        }
    });

});


