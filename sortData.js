function sortPixelData(data, x, y){
    let pixelSortData = [];
    let count = 0;
    for(let i = 0; i < y; i++){
        pixelSortData[i] = [];
        for(let j = 0; j < x; j++){
            pixelSortData[i][j] = [];
            for(let k = 0; k < 4; k++){
                pixelSortData[i][j][k] = data[count];
                count++;
            }
        }
    }
    //console.log(pixelSortData[123][245]);
    pixelData = pixelSortData;
}