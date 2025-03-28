const blurSlider = document.getElementById('blurSlider');
const blurValue = document.getElementById('blurValue');
let blurV = blurSlider.value;

const grayscaleSlider = document.getElementById('grayscaleSlider');
const grayscaleValue = document.getElementById('grayscaleValue');
let grayscale = grayscaleSlider.value;

grayscaleSlider.addEventListener('input', function(e) {
        grayscale = grayscaleSlider.value;
        grayscaleValue.textContent = 'Grayscale: ' + grayscale + "%" ;
        if(imageState){
                ctx.filter = `grayscale(${grayscale}%) blur(${blurV}px)`;
                if(manageImageSizeToggle.checked){
                        ctx.clearRect(0, 0, img.width, img.height);
                        ctx.drawImage(img,0,0, img.width, img.height);
                     }else{                        
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img,0,0, defaultWidth, defaultHeight);  
                }
        }
        
});

blurSlider.addEventListener('input', function(e) {
        blurV = blurSlider.value;
        blurValue.textContent = 'Blur: ' + blurV;
        if(imageState){
                ctx.filter = `blur(${blurV}px) grayscale(${grayscale}%)`;
                if(manageImageSizeToggle.checked){
                        ctx.clearRect(0, 0, img.width, img.height);
                        ctx.drawImage(img,0,0, img.width, img.height);
                     }else{                        
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img,0,0, defaultWidth, defaultHeight);  
                }
        }
        
});
