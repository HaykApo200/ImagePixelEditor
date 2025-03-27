const savePhotoBtn = document.getElementById('savePhoto');
let imageSaveCount = 0;

savePhotoBtn.addEventListener('click', function () {
    if(imageState){
        const imageURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = `${imageSaveCount}_image.png`; 
        imageSaveCount++;
        link.click();  
    }
  });