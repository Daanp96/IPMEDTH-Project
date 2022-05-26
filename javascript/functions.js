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

const dragDropMap = (obj, width = '', map) => {
  let currentDroppable = null;

    obj.onmousedown = function(event) {
      let test = event.target.id;
      console.log(test);

      let shiftX = event.clientX - obj.getBoundingClientRect().left;
      let shiftY = event.clientY - obj.getBoundingClientRect().top;

      obj.style.position = 'absolute';
      obj.style.width = width;
      obj.style.zIndex = 1000;
      obj.style.cursor = "url('../images/cursor_grabbing_60.cur'), default";
      document.body.append(obj);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        obj.style.left = pageX - shiftX + 'px';
        obj.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        obj.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        obj.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');

        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      obj.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        obj.style.cursor = "url('../images/cursor_grab_60.cur'), default";
        obj.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.opacity = '50%';
    }

    function leaveDroppable(elem) {
      elem.style.opacity = '30%';
    }

    obj.ondragstart = function() {
      return false;
    };
}

export { dragDrop, dragDropMap };
