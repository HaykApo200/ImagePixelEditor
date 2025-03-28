const blurSlider = document.getElementById('blurSlider');
const blurValue = document.getElementById('blurValue');
let blurV = blurSlider.value;

const grayscaleSlider = document.getElementById('grayscaleSlider');
const grayscaleValue = document.getElementById('grayscaleValue');
let grayscale = grayscaleSlider.value;

listener(blurSlider, blurValue, 'blur', "Blur");
listener(grayscaleSlider, grayscaleValue, 'grayscale', "Grayscale");

function listener(slider, value, filterType, name) {
    slider.addEventListener('input', function(e) {
      
        if (filterType === 'blur') {
            blurV = slider.value; 
        } else if (filterType === 'grayscale') {
            grayscale = slider.value; 
        }

        // Update the displayed text
        value.textContent = `${name}: ${filterType === 'blur' ? blurV : grayscale}%`;

        // Apply the filters when the sliders change
        if (imageState) {
            ctx.filter = `blur(${blurV}px) grayscale(${grayscale}%)`; 
            if (manageImageSizeToggle.checked) {
                ctx.clearRect(0, 0, img.width, img.height);
                ctx.drawImage(img, 0, 0, img.width, img.height);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, defaultWidth, defaultHeight);
            }
        }
    });
}
