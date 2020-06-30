const pb = document.querySelector('.paint');
image = 'image/jpeg;base64,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'.split('');
pb.innerHTML = '<img src="data:">';
  

localStorage.setItem('paint_score', 0);

delete localStorage.paint_previousPixel_x;
delete localStorage.paint_previousPixel_y;

// pb.touchmove = function (e) {
//  color = 'blue';
//  pixelSize = 10;
//  x = e.clientX-pixelSize/2;
//  y = e.clientY-pixelSize/2;
//  pb.innerHTML += '<div class="pixel" style="background-color:'+color+';width:'+pixelSize+'px;height:'+pixelSize+'px;top:'+y+'px;left:'+x+'px"></div>';
// }

pb.addEventListener("touchend", function(event) {
  delete localStorage.paint_previousPixel_x;
  delete localStorage.paint_previousPixel_y;
});
pb.addEventListener("touchmove", function(event) {
  
  color = 'blue';
  pixelSize = 10;
  e = window.event;
  x = e.targetTouches[0].clientX-pixelSize/2;
  y = e.targetTouches[0].clientY-pixelSize/2;
  setPixel(x,y,pixelSize,color);
  
  
  x_prev = localStorage.getItem('paint_previousPixel_x');
  y_prev = localStorage.getItem('paint_previousPixel_y');
  
  if (x_prev!=undefined) {
    x2 = (parseInt(x)+parseInt(x_prev))/2;
    y2 = (parseInt(y)+parseInt(y_prev))/2;
    plus2dots(parseInt(x_prev),parseInt(y_prev),parseInt(x2),parseInt(y2),parseInt(x),parseInt(y),pixelSize,'purple')
    setPixel(x2,y2,pixelSize,'red');
    
    localStorage.setItem('paint_previousPixel_x', x);
    localStorage.setItem('paint_previousPixel_y', y);
  }
  else {
    localStorage.setItem('paint_previousPixel_x', x);
    localStorage.setItem('paint_previousPixel_y', y);
  }
  
  
  
  
  
});


function setPixel(x,y,pixelSize,color) {
    // pb.innerHTML += '<div class="pixel" style="background-color:'+color+';width:'+pixelSize+'px;height:'+pixelSize+'px;top:'+y+'px;left:'+x+'px"></div>';
    if(localStorage.getItem('paint_score')<image.length)
    pb.querySelector('img').src += image[parseInt(localStorage.getItem('paint_score'))];
    
    localStorage.setItem('paint_score', parseInt(localStorage.getItem('paint_score'))+1);
    // if(localStorage.getItem('paint_score')>500) {
    //  clearPaint();
    //}
}

function plus2dots(x1,y1,x2,y2,x3,y3,pixelSize,color) {
  x1_2 = (x1+x2)/2;
  y1_2 = (y1+y2)/2;
  
  x2_3 = (x2+x3)/2;
  y2_3 = (y2+y3)/2;
  
  setPixel(x1_2,y1_2,pixelSize,color);
  setPixel(x2_3,y2_3,pixelSize,color);
}

function clearPaint() {
  localStorage.setItem('paint_score', 0);
}
