const manageImageSizeToggle = document.getElementById('manageImageSize');

manageImageSizeToggle.addEventListener('change', () => {
    if(imageState){
      updateFilters(blurSlider, blurV, blurValue, 0,'Blur',false);
      updateFilters(transparencySlider,transparency, transparencyValue, 100, 'Transparency', true);
      updateFilters(grayscaleSlider, grayscale, grayscaleValue, 0, 'Grayscale' ,true);
       if(manageImageSizeToggle.checked){
          if((img.width !== canvas.width) && (img.height !== canvas.height)){
             canvasBox.style.height = `${img.height}px`;
             canvasBox.style.width =  `${img.width}px`;
             canvas.width = img.width;
             canvas.height = img.height;
            
             ctx.drawImage(img,0,0, canvas.width, canvas.height);
             const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
             sortPixelData(imageData.data, img.width, img.height);
          }
       }else{
          if((canvas.height !== defaultHeight) && (canvas.width !== defaultWidth)){
             canvasBox.style.height = `${defaultHeight}px`;
             canvasBox.style.width =  `${defaultWidth}px`;
             canvas.width = defaultWidth;
             canvas.height = defaultHeight;
             ctx.drawImage(img,0,0, defaultWidth, defaultHeight);
             const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
             sortPixelData(imageData.data, defaultWidth, defaultHeight);
          }
       }
    }
 })