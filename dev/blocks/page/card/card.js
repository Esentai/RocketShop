var picIndex = 1;
showPics(picIndex);

var colorIndex = 1;
showColor(colorIndex);
var count = 0;

var blockIndex = 1;
showBlock(blockIndex);

function currentBlock(n){
    showBlock(blockIndex = n);
}

function showBlock(n){
    var r;
    var texts = document.getElementsByClassName("card-info__block");
    var buttons = document.getElementsByClassName("card-info__button");

    if(n > buttons.length){
        blockIndex = 1;
    }
    if(n < 1){
        blockIndex = buttons.length;
    }
    for(r=0; r < buttons.length; r++){
        texts[r].style.display = "none";
    }

    for(r=0; r < buttons.length; r++){
        buttons[r].className = buttons[r].className.replace("card-info__button_active","");

    }

    texts[blockIndex-1].style.display = "block";
    buttons[blockIndex-1].className+= " card-info__button_active";
}

function currentColor(n){
    showColor(colorIndex = n);
}

function showColor(n){
    var i;
    var text = document.getElementsByClassName("card-short-info__color-value");

    var colors = document.getElementsByClassName("card-short-info__colors");

    if(n > colors.length){
        colorIndex = 1;
    }
    if(n < 1){
        colorIndex = colors.length;
    }

    for(i=0; i < colors.length; i++){
        colors[i].className = colors[i].className.replace("card-short-info__colors_active","");
    }

    text[0].innerHTML  = colors[colorIndex-1].title;
    text[0].style.color = colors[colorIndex-1].dataset.color;
    
    colors[colorIndex-1].className+= " card-short-info__colors_active";
}

function currentPic(n){
    showPics(picIndex = n);
}

function showPics(n){
	var i;
    var pic = document.getElementsByClassName("card-images__image");

    pic[1].style.display = "none";

    var miniPics = document.getElementsByClassName("card-images__image_min");
    var button_pp = document.getElementsByClassName("card-button");
    
    for(i=0; i < miniPics.length; i++){
        miniPics[i].className = miniPics[i].className.replace("card-images__image_active","");
    }
    if (n != 4){
        pic[0].src = miniPics[picIndex-1].src;
        pic[0].style.display = "block";
        pic[1].pause();
        button_pp[0].className = button_pp[0].className.replace("rocket-pause-button","rocket-play-button");
        count = 0;
    }

    if(n ==4)   {
        pic[0].style.display = "none";
        pic[1].style.display = "block";
        button_pp[0].className = button_pp[0].className.replace("rocket-play-button","rocket-pause-button");

        if(count==0){
            count+=1;
            pic[1].currentTime = 0;
            pic[1].play();
        }

        else if(count==1){
            button_pp[0].className = button_pp[0].className.replace("rocket-pause-button","rocket-play-button");
            pic[1].pause();
            count+=1;
        }
        
        else if(count==2){
            pic[1].play();
            count-=1;
            button_pp[0].className = button_pp[0].className.replace("rocket-play-button","rocket-pause-button");
        }
    }
    
    miniPics[picIndex-1].className+= " card-images__image_active";
}

var itemNumber = 0;
showCount(itemNumber);

function showCount(n) {
    var counter = document.getElementsByClassName("count__value");
    counter[0].innerHTML = itemNumber;
    console.log(counter);
}

function add(){
    var i;
    var counter = document.getElementsByClassName("count__value");
    itemNumber = itemNumber +1;

    if(itemNumber > 100){
        itemNumber = 1;
    }
    showCount(itemNumber);
}

function minus(){
    var i;
    var counter = document.getElementsByClassName("count__value");

    itemNumber = itemNumber -1;
    if(itemNumber < 0){
        itemNumber = 0;
    }

    showCount(itemNumber);
}


