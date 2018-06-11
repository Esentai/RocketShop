function selectDelivery(n){
    selected_delivery(selectIndex = n);
}

function selectPayment(n){
    selected_payment(selectIndex = n);
}

function selected_delivery(n) {
	var buttons = document.getElementsByClassName("delivery-and-payment__method");
    var i;
	var logos = document.getElementsByClassName("delivery-and-payment__ico");

    for(i=0; i < buttons.length; i++){
        buttons[i].className = buttons[i].className.replace("delivery-and-payment__method_active","");
        logos[i].className = logos[i].className.replace("delivery-and-payment__ico_active"," ");
    }
    buttons[selectIndex-1].className+= " delivery-and-payment__method_active";
    logos[selectIndex-1].className+= " delivery-and-payment__ico_active";
}

function selected_payment(n) {
    var buttons = document.getElementsByClassName("delivery-and-payment__method_payment");
    var logos = document.getElementsByClassName("delivery-and-payment__ico_card");

    var i;
    for(i=0; i < buttons.length; i++){
        buttons[i].className = buttons[i].className.replace("delivery-and-payment__method_active","");
        logos[i].className = logos[i].className.replace("delivery-and-payment__ico_active"," ");
    }
    buttons[selectIndex-1].className+= " delivery-and-payment__method_active";
    logos[selectIndex-1].className+= " delivery-and-payment__ico_active";

}

