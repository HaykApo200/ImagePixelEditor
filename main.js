const fileInput = document.getElementById('fileInput');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const canvasBox = document.getElementById("canvasBox");
//ctx.filter = 'blur(5px)';
// ctx.fillStyle = '#011111'
//console.log(ctx);

const defaultHeight = 600;
const defaultWidth = 600;
canvasBox.style.height = `${defaultHeight}px`;
canvasBox.style.width = `${defaultWidth}px`;

const img = new Image;
let imageState = false;
let pixelData;

fileInput.addEventListener('change', function(event) {
   const file = event.target.files[0];
   imageState = true;
   if (file) {
    ctx.filter = 'blur(3px)';
       const reader = new FileReader();
       reader.onload = function(e) {
           img.src = e.target.result;
           img.onload = function() {
               drawPhoto();

             //   console.log(`First pixel (RGBA): (${r}, ${g}, ${b}, ${a})`);
           };
           
       };
       reader.readAsDataURL(file);
   }
})

function drawPhoto(){
   // transparencySlider.value = 100;
   // transparency = 100;
   // transparencyValue.textContent = 'Transparency: ' + transparency + "%" ;
   // updateFilters(blurSlider, blurV, blurValue, 0,'Blur',false);
   // updateFilters(transparencySlider,transparency, transparencyValue, 100, 'Transparency', true);
   // updateFilters(grayscaleSlider, grayscale, grayscaleValue, 0, 'Grayscale' ,true);
    if(manageImageSizeToggle.checked){
       canvasBox.style.height = `${img.height}px`;
       canvasBox.style.width =  `${img.width}px`;
       canvas.width = img.width;
       canvas.height = img.height;
       //ctx.filter = 'blur(5px)';
       ctx.drawImage(img,0,0, canvas.width, canvas.height);
       const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
       sortPixelData(imageData.data, img.width, img.height);
      // console.log(pixelData[123][234]);
       

    }else{
       canvasBox.style.height = `${defaultHeight}px`;
       canvasBox.style.width =  `${defaultWidth}px`;
       canvas.width = defaultWidth;
       canvas.height = defaultHeight;
      // ctx.filter = 'blur(5px)';
       ctx.drawImage(img,0,0, defaultWidth, defaultHeight);
       const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
       sortPixelData(imageData.data, defaultWidth, defaultHeight);
     //  console.log(pixelData[123][24]);
       
    }
}
 

