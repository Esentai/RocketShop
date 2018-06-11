$(document).ready(function() {
    $('.product-list__price').on('click', function(evt) {

        var elem = evt.target;
        var container = evt.currentTarget;
        var input = container.getElementsByClassName('product-amount__value')[0];
        var res = container.getElementsByClassName('product-amount__value');
        var sum = container.getElementsByClassName('product-list__price-value')[0];
        var count = parseInt(input.getAttribute('data-count'), 10);
        var price = parseInt(input.getAttribute('data-price'), 10);
        var minus = container.getElementsByClassName('product-amount__decrease')[0];


        if (elem.classList.contains('product-amount__decrease')) {
            count = count == 1 ? count : (count - 1);
            if(count == 1){
                minus.style.visibility = "hidden";
            }

        } else if (elem.classList.contains('product-amount__increase')){
            count += 1;
            minus.style.visibility = "visible";
        }

        input.value = count + ' шт.';
        sum.innerHTML = thousandSeparator(price * count)+'₸';

        input.setAttribute('data-count', count);


    });
});