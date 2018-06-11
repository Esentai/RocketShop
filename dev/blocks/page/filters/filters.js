var slider = document.getElementById("range_min");
var slider2 = document.getElementById("range_max");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
output.innerHTML = slider.value;
output2.innerHTML = slider2.value;
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width','212');
svg.setAttribute('height','20');


var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line.setAttribute('width', '0');
line.setAttribute('height', '0');
line.setAttribute('y1', '0');
line.setAttribute('y2', '0');
line.setAttribute('z', '105');
line.setAttribute('stroke', '#e00985');
line.setAttribute('stroke-width', '6');
function filterFunction() {
    if(slider.value>=slider2.value-300){
        slider.value=slider2.value-100;
        slider2.disabled=true;
        // slider2.value=slider.value+100;
    }
    output.innerHTML = slider.value;
    output.innerHTML = thousandSeparator(output.innerHTML)
    line.setAttribute('x1', (slider.value)/275);
    output2.innerHTML = slider2.value;
    output2.innerHTML = thousandSeparator(output2.innerHTML)
    line.setAttribute('x2', (slider2.value)/267+20);
    slider2.disabled=false;

}
line.setAttribute('x1',(slider.value)/275);
line.setAttribute('x2',(slider2.value)/267+30);
svg.appendChild(line);

var ct = document.getElementById('range__line');
ct.appendChild(svg);
