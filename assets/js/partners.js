document.querySelector('#swiper-slides').addEventListener('mouseover',(e)=>{
    e.preventDefault();
    if (e.target.tagName === 'IMG') {
        src =  e.target.src.replace('black','colour');
        e.target.src = src;
        console.log(e.target.src);
    }
    
});

document.querySelector('#swiper-slides').addEventListener('mouseout',(e)=>{
    e.preventDefault();
    if (e.target.tagName === 'IMG') {
        src =  e.target.src.replace('colour','black');
        e.target.src = src;
        console.log(e.target.src);
    }
    
});
