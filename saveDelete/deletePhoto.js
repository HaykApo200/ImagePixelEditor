const deleteBtn = document.getElementById('deletePhoto');

deleteBtn.addEventListener("click", () => {
    if(imageState){
        canvas.width = defaultWidth;
        canvas.height = defaultHeight;
        canvasBox.style.height = `${defaultHeight}px`;
        canvasBox.style.width =  `${defaultWidth}px`;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        imageState = false;
        updateFilters(blurSlider, blurV, blurValue, 0,'Blur',false);
        updateFilters(transparencySlider,transparency, transparencyValue, 100, 'Transparency', true);
        updateFilters(grayscaleSlider, grayscale, grayscaleValue, 0, 'Grayscale' ,true);
    }
})

function updateFilters(slider, filter, filterValue, value, name, percent){
    slider.value = value;
    filter = value;
    filterValue.textContent = `${name}: ` + filter + `${percent ? "%" : ""}`;
}