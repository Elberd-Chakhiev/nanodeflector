"use strict"
let iconMenu = document.querySelector('.burger');
let iconBody = document.querySelector('.burger_body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle("active");
        iconBody.classList.toggle("active");
    });
} 
