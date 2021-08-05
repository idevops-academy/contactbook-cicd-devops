$(document).ready(function() {
    $(".fa-heart").on("click",function (event) {
        console.log(event);
        alert(event.target.id);
    });
});