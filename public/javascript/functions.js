let layedPieces = 0;
let pinguinsFed = 0;

const dragDrop = (object) => {

    object.onmousedown = (event) => {

        let shiftX = event.clientX - object.getBoundingClientRect().left;
        let shiftY = event.clientY - object.getBoundingClientRect().top;
      
        object.style.position = 'absolute';
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

const dragDropMap = (obj, btn, zookpr, speech) => {
  let currentDroppable = null;
  let kaartHeel = new Audio("../audio/3-Mappuzzel/2-kaartKlaar.mp3");

  obj.onmousedown = function(event) {

    let shiftX = event.offsetX;
    let shiftY = event.offsetY;

    obj.style.position = 'absolute';
    obj.style.transform = "rotate(0)";
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

    document.onmouseup = function() {

      document.removeEventListener('mousemove', onMouseMove);
      obj.style.cursor = "url('../images/cursor_grab_60.cur'), default";
      obj.onmouseup = null;

      const attr = currentDroppable.getAttribute('data-piece');

      if(attr == obj.getAttribute('data-piece')) {
        currentDroppable.style.opacity = '100%';
        currentDroppable.classList.add("layed");
        obj.hidden = true;
        layedPieces++;

        if(layedPieces == 9){
          btn.style.display = "block";
          zookpr.style.visibility = "visible";
          zookpr.style.zIndex = "1";
          zookpr.style.gridColumnStart = "10";
          btn.style.zIndex = "2";
          speech.style.gridColumnStart = "7";
          speech.style.visibility = "visible";
          speech.style.zIndex = "1";
          speech.innerHTML = "Dat ziet er veel beter uit! Laten we de kaart maar meteen gebruiken!";
          kaartHeel.play();
        }
      }
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

const dragDropArctic = (obj, speech, text, nextBtn, speechBtn) => {
  let currentDroppable = null;
  const goedZo = new Audio("../audio/7-pinguïn/2-goedZo.mp3");

  obj.onmousedown = function(event) {

    let shiftX = event.offsetX;
    let shiftY = event.offsetY;

    obj.style.position = 'absolute';
    obj.style.transform = "rotate(0)";
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

    document.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      obj.style.cursor = "url('../images/cursor_grab_60.cur'), default";
      obj.onmouseup = null;
      
      const attr = currentDroppable.getAttribute('data-pinguin');

      if(attr == obj.getAttribute('data-pinguin')) {
        let elem = document.createElement("img");
        elem.src = "../images/heart.png";
        elem.style.width = "50px";
        elem.style.position = "absolute";
        elem.style.left = "40px";
        currentDroppable.append(elem);
        currentDroppable.style.opacity = '100%';
        currentDroppable.classList.remove("droppable");
        obj.style.left = "18vw";
        obj.style.top ="80vh";
        //fixed de bug
        currentDroppable.removeAttribute('data-pinguin');
        pinguinsFed++;
      }
      
      if(pinguinsFed == 7){
        speech.style.visibility = "visible";
        obj.style.visibility = "hidden";
        speechBtn.style.display = "none";
        text.innerHTML = "Goed zo! Nu zijn de penguins ook weer blij.";
        goedZo.play();
        nextBtn.style.display = "block";
      }
    };
  };

  function enterDroppable(elem) {
    elem.style.opacity = '50%';
  }

  function leaveDroppable(elem) {
    elem.style.opacity = '100%';
  }

  obj.ondragstart = function() {
    return false;
  };
}

const modalView = (modal, title, text, button, {
    title_content = "",
    text_content = "",
    button_content = ""
  }) => {

  title.innerHTML = title_content;
  text.innerHTML = text_content;
  button.innerHTML = button_content;

  button.onclick = () => {
    modal.style.opacity = "0";
  }
}

const textBubble = () => {
  if(startOK == 0 && true){
    startP.innerHTML = "jaja";
    startOK ++;
    return;
  }
}

const dragDropGiraffe = (object) => {

  object.onmousedown = (event) => {

    let shiftX = event.clientX - object.getBoundingClientRect().left;
    let shiftY = event.clientY - object.getBoundingClientRect().top;
    
    object.style.position = 'absolute';
    object.style.zIndex = 10;
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
    document.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      object.style.cursor = "url('../images/cursor_grab_60.cur'), default";
      object.onmouseup = null;
      
    };
    
  };
    
  object.ondragstart = () => {
    return false;
  };
}

export { dragDrop, dragDropMap, dragDropArctic, modalView, dragDropGiraffe};
