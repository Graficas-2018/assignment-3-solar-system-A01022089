
// An integer value, in pixels, indicating the X coordinate at which the mouse pointer was located when the event occurred.
var mouseDown = false, pageX = 0/*, pageY = 0*/;
var left = false, right = false;

function rotateScene(deltax)
{
    celestialGroup.rotation.y += deltax / 100;
    $("#rotation").html("rotation: 0," + celestialGroup.rotation.y.toFixed(1) + ",0");
}

function moveScene(deltax/*, deltay*/)
{
  camera.translateX(deltax/50);
  //camera.translateY(deltay/300);
}

function scaleScene(scale)
{
    celestialGroup.scale.set(scale, scale, scale);
    $("#scale").html("scale: " + scale);
}

function onMouseMove(evt)
{
    if (!mouseDown)
        return;

    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    evt.preventDefault();

    if( left == true)
    {
      var deltax = evt.pageX - pageX;
      pageX = evt.pageX;
      rotateScene(deltax);
    }
    if(right == true)
    {
      var deltax = evt.pageX - pageX;
      //var deltay = evt.pageY - pageY;
      pageX = evt.pageX;
      //pageY = evt.pageY;
      moveScene(-deltax/*, deltay*/);
    }
}

function onMouseDown(evt)
{
  /*
    evt.preventDefault();

    mouseDown = true;
    pageX = evt.pageX;
    */
    evt.preventDefault();
    mouseDown = true;
    pageX = evt.pageX;

      if(evt.button == 0)
      {
        left = true;
      }
      if(evt.button == 2)
      {
        right = true;
      }
}

function onMouseUp(evt)
{
    evt.preventDefault();

    mouseDown = false;

    left = false;
    right = false;
}

function addMouseHandler(canvas)
{
    canvas.addEventListener( 'mousemove',
            function(e) { onMouseMove(e); }, false );
    canvas.addEventListener( 'mousedown',
            function(e) { onMouseDown(e); }, false );
    canvas.addEventListener( 'mouseup',
            function(e) { onMouseUp(e); }, false );
}
