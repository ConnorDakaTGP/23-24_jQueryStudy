/* Put code for the task below */
$(document).ready(function(){
    $(".color").click(function(){
        $(".table").css("background-color", $(this).val());
    });
});