// Template
function getInputValueById(inputId){
    const inputValue = document.getElementById(inputId);
    const valueText = inputValue.value;
    const value = parseFloat(valueText);
    return value;
    
}
// triangle
function triangle() {
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    const area = .5*base*height;
    const triangleAreaField = document.getElementById('triangle-area');
    triangleAreaField.innerText = area;
}
// rectangle
function rectangle() {
    const width = getInputValueById('rectangle-width');
    const length = getInputValueById('rectangle-length');
    const area = width*length;
    const rectangleAreaField = document.getElementById('rectangle-area');
    rectangleAreaField.innerText = area;
}
// parallelogram
function parallelogram(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base*height;
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
}
// rhombus
function rhombus(){
    const d1 = getInputValueById('rhombus-diagonal-1');
    const d2 = getInputValueById('rhombus-diagonal-2');
    const area = .5*d1*d2;
    const rhombusAreaField = document.getElementById('rhombus-area');
    rhombusAreaField.innerText = area;
}
// pentagon
function pentagon(){
    const p = getInputValueById('pentagon-p');
    const b = getInputValueById('pentagon-b');
    const area = .5*p*b;
    const pentagonAreaField = document.getElementById('pentagon-area');
    pentagonAreaField.innerText = area;
}
// ellipse
function ellipse(){
    const a = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');
    const area = 3.1416*a*b;
    const ellipseAreaField = document.getElementById('ellipse-area');
    ellipseAreaField.innerText = area;
}