function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // let scaleMap = new Map();
    // scaleMap.set(360, 0.8);
    // scaleMap.set(740, 1.5);
    // let scale = 0.8;
    // for (let [width, changedScale] of scaleMap.entries()) {
    //   if (window.innerWidth <= width) {
    //     scale = changedScale;
    //     break;
    //   }
    // }
    let canvasContainer = document.getElementById('canvas-container');
    let computedStyle = window.getComputedStyle(canvasContainer);
    let padding = computedStyle.getPropertyValue('padding-left');
    let maxWidth = canvasContainer.clientWidth - (2 * parseInt(padding));
    const MAX_HORIZONTAL_ABSTRACT_SIZE = 400;
    let scale = maxWidth / MAX_HORIZONTAL_ABSTRACT_SIZE;

    const rectW = 200 * scale;
    const rectH = 300 * scale;
    const smallSquareSide = 24 * scale;
    const compareSquareSide = 15 * scale;
    canvas.width = rectW * 2;
    canvas.height = rectH;

    const colorA = document.getElementById('colorA').value;
    const colorB = document.getElementById('colorB').value;
    const colorC = document.getElementById('colorC').value;
    const colorD = document.getElementById('colorD').value;

    console.log("Drawing Albers rectangles...");

    ctx.fillStyle = colorA;
    ctx.fillRect(0,0, rectW, rectH);

    ctx.fillStyle = colorB;
    ctx.fillRect(rectW, 0, rectW, rectH);

    let midX = rectW / 2;
    let smallSquareOriginX = midX - smallSquareSide / 2;
    let midY = rectH / 2;
    let smallSquareOriginY = midY - smallSquareSide / 2;

    ctx.fillStyle = colorC;
    ctx.fillRect(
      smallSquareOriginX,
      smallSquareOriginY,
      smallSquareSide,
      smallSquareSide
    );

    ctx.fillStyle = colorD;
    ctx.fillRect(
      smallSquareOriginX + rectW,
      smallSquareOriginY,
      smallSquareSide,
      smallSquareSide
    );

    if (colorC != colorD) {
      let compareOriginX = rectW;
      let compareOriginY = rectH;

      ctx.fillStyle = colorC;
      ctx.fillRect(
        compareOriginX - compareSquareSide,
        compareOriginY - compareSquareSide,
        compareSquareSide,
        compareSquareSide
      );

      ctx.fillStyle = colorD;
      ctx.fillRect(
        compareOriginX,
        compareOriginY - compareSquareSide,
        compareSquareSide,
        compareSquareSide
      );
    }
  }
}

window.addEventListener('load', draw);
window.addEventListener('resize', draw);
