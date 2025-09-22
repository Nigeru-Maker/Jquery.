$(document).ready(function() {

    $("#myButton").click(function() {
        alert("Button is Clicked")
    });

    $(document).keyup(function(event) {
        if (event.which==89) {
            alert("Letter 'Y' pressed);
        }
    });

});


