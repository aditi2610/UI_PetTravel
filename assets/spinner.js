$(document).ready(function () {
    setTimeout(function () {
        $(".check").attr("class", "check check-complete");
        $(".fill").attr("class", "fill fill-complete");
    }, 5000);

    setTimeout(function () {
        $(".check").attr("class", "check check-complete success");
        $(".fill").attr("class", "fill fill-complete success");
        $(".path").attr("class", "path path-complete");
    }, 5000);
});