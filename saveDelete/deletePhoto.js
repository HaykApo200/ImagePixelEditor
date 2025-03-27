const deleteBtn = document.getElementById('deletePhoto');

deleteBtn.addEventListener("click", () => {
    if(imageState){
        canvas.width = defaultWidth;
        canvas.height = defaultHeight;
        canvasBox.style.height = `${defaultHeight}px`;
        canvasBox.style.width =  `${defaultWidth}px`;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        imageState = false;
        transparencySlider.value = 100;
        transparency = 100;
        transparencyValue.textContent = 'Transparency: ' + transparency + "%" ;
    }
})