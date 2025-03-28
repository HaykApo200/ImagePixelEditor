const blurSlider = document.getElementById('blurSlider');
const blurValue = document.getElementById('blurValue');

blurSlider.addEventListener('input', function(e) {

        let blurV = blurSlider.value;
        console.log(e.target.value);
        blurValue.textContent = 'Blur ' + blurV;
        if(imageState){
                if(manageImageSizeToggle.checked){
                        ctx.clearRect(0, 0, img.width, img.height);
                        ctx.filter = `blur(${blurV}px)`;
                        ctx.drawImage(img,0,0, img.width, img.height);
                     }else{                        
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.filter = `blur(${blurV}px)`;
                        ctx.drawImage(img,0,0, defaultWidth, defaultHeight);  
                }
        }
        
});
