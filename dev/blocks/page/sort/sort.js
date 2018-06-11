function sort(n){
    sortcolor(selectIndex = n);
}

function sortcolor(n) {
    var buttons = document.getElementsByClassName("sort__top_button");
    for(var i=0; i < buttons.length; i++){
        buttons[i].className = buttons[i].className.replace("sort__top_button_active","");
    }
    buttons[selectIndex-1].className+= " sort__top_button_active";
}