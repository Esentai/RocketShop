function basketDisplay() {
    var basket = document.getElementById("basket");
    var basket_btn = document.getElementById("basket_icon");
    if( basket) {
        basket_btn.classList.toggle("basket_opened");
    }
}

$(document).ready(function() {
    $("#basket_icon").click(function(e) {
        $(".basket").toggle();
        e.stopPropagation();
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.basket, .basket *')) {
            $(".basket").hide();
            document.getElementById("basket_icon").classList.remove("basket_opened");
        }
    });
});