var thousandSeparator = function(str) {
    var parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;

    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output;
        }
        --i;
    }

    if (parts.length > 1) {
        output += '.' + parts[1];
    }
    return output+'&#160';
};

var element = document.getElementsByClassName('price');
if (element.length > 0) {
    for (var i = 0; i < element.length; i++) {
        element[i].innerHTML = thousandSeparator(element[i].innerHTML);
    }
}