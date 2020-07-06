function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    const scale = 2;
    const rectW = 200 * scale;
    const rectH = 300 * scale;
    const smallSquareSide = 24 * scale;
    const compareSquareSide = 15 * scale;

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
