$(document).ready(function(){
    $("#myButton").click(function(){
        $("#myParagraph").slideToggle("slow");
    });
	
// for "y"
    $(document).keyup(function(event){
        if(event.which === 89){ 
            $("#myParagraph").slideToggle("slow");
        }
    });
});
