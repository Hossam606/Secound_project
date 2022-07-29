 
//mixitup all product

  $(document).ready(function() {

      // mixItup     
      var mixer = mixitup('.container');
      var mixer = mixitup(containerEl);
     
     
     var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
     
     
   
    
});

  $('.shuffle li').click(function(){
         $(this).addClass('selected').siblings().removeClass('selected');
     });




//product men-woman-kids
// creat popup with image 

let ourGallery =document.querySelectorAll(".product img");

ourGallery.forEach(img => {
    
    img.addEventListener('click',(e)=>{
        
        //create overlay element
        let overlay=document.createElement("div");
        
        // add class to overlay
        overlay.className='popup-overlay';
        
        //append overlay to body
        document.body.appendChild(overlay);
        
        //create the popup box
        let popupBox =document.createElement("div");
        
        //add class to the popup box
        popupBox.className='popup-box';
        
        
        if (img.alt !== null){
            
            //create heading
            let imgHeading = document.createElement("h3");
            
            //create text for heading
            let imgText =document.createTextNode(img.alt);
            
            imgHeading.appendChild(imgText);
            
            popupBox.appendChild(imgHeading);
            
        }
        
        //create the image
        let popupImage=document.createElement("img");
        
        //set image source
        popupImage.src =img.src;
        
        //add image to popup box 
        popupBox.appendChild(popupImage);
        
        // append the popup box to body
        document.body.appendChild(popupBox);
        
        //create the Close Span 
        let closeButton = document.createElement("span");
        let closeButtonText = document.createTextNode("X")
        closeButton.appendChild(closeButtonText);
        closeButton.className='close-button';
        popupBox.appendChild(closeButton);
        
    });
    
});

// close popup
document.addEventListener("click",function(e){
    
    if(e.target.className=='close-button'){
        // remove current popup
        e.target.parentNode.remove();
        //remove overlay
        document.querySelector(".popup-overlay").remove();
    }
    
});