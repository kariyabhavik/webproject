
//for image carosale start
 var slides=document.querySelector('.slider-items').children;
 var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}

//for image carosale end 

// for slider purpose

// var images = ['../images/carosal1.jpeg', '../images/carosal2.jpeg', '../images/carosal3.jpeg', '../images/carosal4.jpeg', '../images/carosal5.jpeg'];

// var x = 0;

// var imgs = document.getElementById('img');

// setInterval(slider, 3000);


// function slider() {

//   if (x < images.length) {
//     x = x + 1;
//   } else {
//     x = 1;
//   }

//   imgs.innerHTML = "<img src=" + images[x - 1] + ">";
// }
// for slider purpose






