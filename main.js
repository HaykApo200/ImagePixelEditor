const fileInput = document.getElementById('fileInput');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const canvasBox = document.getElementById("canvasBox");

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
       
       const reader = new FileReader();
       reader.onload = function(e) {
           img.src = e.target.result;
           img.onload = function() {

            if(manageImageSizeToggle.checked){
               canvasBox.style.height = `${img.height}px`;
               canvasBox.style.width =  `${img.width}px`;
               canvas.width = img.width;
               canvas.height = img.height;

               ctx.drawImage(img,0,0, canvas.width, canvas.height);
               const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
               pixelData = imageData.data;

            }else{
               canvasBox.style.height = `${defaultHeight}px`;
               canvasBox.style.width =  `${defaultWidth}px`;
               canvas.width = defaultWidth;
               canvas.height = defaultHeight;

               ctx.drawImage(img,0,0, defaultWidth, defaultHeight);
               const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
               pixelData = imageData.data;
            }


             //   console.log(`First pixel (RGBA): (${r}, ${g}, ${b}, ${a})`);
           };
       };
       reader.readAsDataURL(file);
   }
})



 

