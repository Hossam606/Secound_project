
//header change background
let landingPage = document.querySelector(".header");

let imgsArray =["header1.jpg","header2.jpg","header3.jpg","header4.jpg",]

setInterval(() => {
   let randomNumber = Math.floor(Math.random()* imgsArray.length);
    
    landingPage.style.backgroundImage= 'url("image/' + imgsArray[randomNumber] + '")';
},2000);



$(document).ready(function(){
      $('.slider').bxSlider();
    });





 