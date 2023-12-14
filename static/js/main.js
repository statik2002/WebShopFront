function zoom(e){
    let zoomer = e.currentTarget;
    //let img = zoomer.querySelector("img");
    //zoomer.setAttribute('style', `background-image: url(${img.src})`);
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}