function changePixelColor(x, y, r, g, b, a) {
    const imageData = ctx.getImageData(x, y, 1, 1);  
    const data = imageData.data; 
 
    data[0] = r;  
    data[1] = g;  
    data[2] = b;  
    data[3] = a;  
 
    ctx.putImageData(imageData, x, y);
}
  

