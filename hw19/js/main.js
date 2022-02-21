console.log('Sample JavaScript #5 HW #19');
let container = null;
let prevIndicator = null;

function block(){
    let elem = document.createElement('div');
    elem.id = 'carousel';
    elem.className = 'carousel';
    document.querySelector('body').appendChild(elem);
    container = document.querySelector('#carousel');
}
function list(n)
{
    let ul =document.createElement('ul');
    ul.className='slides';
    container.appendChild(ul);
    for (i = 0; i < n; i++)
        {
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.setAttribute('class',i === 0 ? 'slides__item active' : 'slides__item');
        a.href='#';
        ul.appendChild(li);
        li.appendChild(a);
        }
}
function indicator(m){
    let indicator = document.createElement('div');
    indicator.className = 'indicators';
    container.appendChild(indicator);
    for( i = 0; i < m; i++)
    {
    let span = document.createElement('span');
    span.setAttribute('class',i === 0 ? 'indicators__item active' : 'indicators__item');
    span.setAttribute('data-slide-to',i);
    span.innerHTML = 'Lorem';
    indicator.appendChild(span);
    }
}
function controls(){
    let control = document.createElement('div');
    control.className = 'controls';
    container.appendChild(control);
    for( i = 0 ; i < 3; i++)
    {
    let div = document.createElement('div');
    div.setAttribute('class', i === 0 ?'controls__item controls__prev': i === 1?'controls__item controls__next':'controls__item controls__pause');
    control.appendChild(div);
    let icon = document.createElement('i');
    icon.setAttribute('class', i === 0 ?'fas fa-chevron-left': i === 1?'fas fa-chevron-right':'fas fa-play');
    div.appendChild(icon);
    }
}
function contentStyle()
{
createStyle = document.createElement('style');
let styles =
    `.slides{position: relative}
    .controls{position: relative}
    .indicators{display: flex }
    .indicators__item {
        width:50px;
        background-color: blue;
        margin: 5px;}`;
    createStyle.innerHTML = styles;
    container.appendChild(createStyle);
}
function styleIndicator(event){
    let target = event.target;
    if (target.classList.contains('indicators__item')) {target.style.backgroundColor = 'red';
    if (prevIndicator !== null) prevIndicator.removeAttribute('style');
    prevIndicator = target;
    }
}
function button(){
    let click = document.querySelector('div.indicators');
    click.addEventListener('click', styleIndicator);
}
function createCarousel(slidesCount = 5) {
    block();
    container = document.querySelector('#carousel');
    list(slidesCount);
    indicator(slidesCount);
    controls();
    contentStyle()
    button();
}

createCarousel();