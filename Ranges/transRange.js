const transparencySlider = document.getElementById('transparencySlider');
const transparencyValue = document.getElementById('transparencyValue');
let transparency = transparencySlider.value;

transparencySlider.addEventListener('input', function(e) {
        transparency = transparencySlider.value;
       // console.log(e.target.value);
        transparencyValue.textContent = 'Opacity: ' + transparency + "%" ;
        if(imageState){
                ctx.globalAlpha = transparency / 100;
                if(manageImageSizeToggle.checked){
                        ctx.clearRect(0, 0, img.width, img.height);
                        ctx.drawImage(img,0,0, img.width, img.height);
                     }else{                        
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img,0,0, defaultWidth, defaultHeight);  
                }
        }
        
});

    