$(document).ajaxStart(function() {

    $("form").css("opacity", "0.5");
    $("#ApplicationLoading").css("display", "block");
});
$(document).ajaxComplete(function() {
    $("form").css("opacity", "1");
    $("#ApplicationLoading").css("display", "none");
});

$(window).load(function() {
    $("form").css("opacity", "1");
    $("#ApplicationLoading").css("display", "none");
});