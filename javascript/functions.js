const dragDrop = (object, width = '') => {

    object.onmousedown = (event) => {

        let shiftX = event.clientX - object.getBoundingClientRect().left;
        let shiftY = event.clientY - object.getBoundingClientRect().top;
      
        object.style.position = 'absolute';
        object.style.width = width;
        object.style.zIndex = 1000;
        object.style.cursor = "url('../images/cursor_grabbing_60.cur'), default";
        document.body.append(object);
      
        moveAt(event.pageX, event.pageY);
      
        // moves the object at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
          object.style.left = pageX - shiftX + 'px';
          object.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // move the object on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // drop the object, remove unneeded handlers
        object.onmouseup = () => {
          document.removeEventListener('mousemove', onMouseMove);
          object.style.cursor = "url('../images/cursor_grab_60.cur'), default";
          object.onmouseup = null;
        };
      
      };
      
      object.ondragstart = () => {
        return false;
      };
}

export default dragDrop;
