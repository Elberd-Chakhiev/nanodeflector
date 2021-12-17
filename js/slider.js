let green = document.querySelector('.position_slide1');
let brown = document.querySelector('.position_slide2');
let blue = document.querySelector('.position_slide3');
let slides = document.querySelectorAll('.gallery_slider__item');
let containerWidth = document.querySelector('.gallery_slider-track').offsetWidth;


let position_one = 'gallery_slider__item position_slide1'
let position_two = 'gallery_slider__item position_slide2'
let position_three = 'gallery_slider__item position_slide3'

let arrowLeft = document.querySelector('.arrows_left');
let arrowRight = document.querySelector('.arrows_right');
// console.log(arrowRight.contains());
// arrowRight.addEventListener('click', ()=>{
//         // if(green.offsetLeft == '0'){
//         //     green.style.left = '40%';
//         //     green.style.top = '0';
//         // }else if(green.offsetLeft > '0' && green.offsetLeft < containerWidth/2){
//         //     green.style.left = '81%';
//         //     green.style.top = '50%';
//         // }else if(green.offsetLeft > containerWidth/2){
//         //     green.style.left = '0';
//         //     green.style.top = '50%';
//         // } 




//         // if(green.offsetLeft > '0' && green.offsetLeft < containerWidth/2){
//         //     brown.style.left = '81%';
//         //     brown.style.top = '50%';
//         // }else if(green.offsetLeft > containerWidth/2){
//         //     brown.style.left = '0';
//         //     brown.style.top = '50%';
//         // }
//         // else if(green.offsetLeft == '0'){
//         //     brown.style.left = '0';
//         //     brown.style.top = '40%';
//         // } 
        
// });
// arrowLeft.addEventListener('click', ()=>{
//     slides.forEach((elem)=>{

//     });

// });


 arrowRight.addEventListener('click', ()=>{
    slides.forEach((elem)=>{
         if(elem.className === position_one){
             elem.className = position_two;
         }else if(elem.className === position_two){
            elem.className = position_three;
         }else if(elem.className === position_three){
             elem.className = position_one
         } 
     });

 });
 arrowLeft.addEventListener('click', ()=>{
     slides.forEach((elem)=>{
         if(elem.className === position_one){
             elem.className = position_three;
         }else if(elem.className === position_two){
             elem.className = position_one;
         }else if(elem.className === position_three){
            elem.className = position_two
         } 
     });

 });
