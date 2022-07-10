let layedPieces = 0;
let pinguinsFed = 0;
let aantalIjs = 0;
let ijsPrijs = 7;

// const dragDrop = (object, width = '') => {
let tree = 0;
let rock = 0;
let pond = 0;

// audio

// let kaartHeel = new Audio("../audio/3-Mappuzzel/2-kaartKlaar.mp3");

const addAnimate = (animate) => {
  animate.classList.add("reload_animation");
}

const removeAnimate = (animate) => {
  animate.classList.remove("reload_animation");
}


const reloadSpeech = (audio, animate) => {
  addAnimate(animate);
  audio.play();
  audio.onended = () => {
    removeAnimate(animate);
  }
}

const reloadHint = (audio, animate) => {
  addAnimate(animate);
  audio.play();
  audio.onended = () => {
    removeAnimate(animate);
  }
}

const hintGlow = (isGlow, hint) => {
  switch (isGlow) {
    case 0:
      hint.classList.add("glow");
      break;
    case 1:
      hint.classList.remove("glow");
      break;
  }
}

const dragDropMap = (obj, btn, zookpr, speech, speechP, kaartHeel, herhaal, speechButton, mapOverlay, hintBtn) => {
  let currentDroppable = null;
  let attr;

  obj.onmousedown = function(event) {

    let shiftX = event.offsetX;
    let shiftY = event.offsetY;

    obj.style.position = 'absolute';
    obj.style.transform = "rotate(0)";
    obj.style.zIndex = 1000;
    obj.style.cursor = "url('../images/cursor/cursor_grabbing_60.cur'), default";
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
      obj.style.cursor = "url('../images/cursor/cursor_grab_60.cur'), default";
      obj.onmouseup = null;

      try {
        attr = currentDroppable.getAttribute('data-piece');
      } catch (e) {
        return;
      }

      if(attr == obj.getAttribute('data-piece')) {
        currentDroppable.style.opacity = '100%';
        currentDroppable.classList.add("layed");
        obj.hidden = true;
        currentDroppable.removeAttribute('data-piece');
        layedPieces++;

        if(layedPieces == 16){
          hintBtn.disabled = true;
          zookpr.src = "../images/zookeeper-poses/male/zookeeper-pose-happy-goodjob.png";
          zookpr.style.visibility = "visible";
          zookpr.style.zIndex = "2";
          zookpr.style.gridColumnStart = "7 / span 3;";
          btn.style.zIndex = "2";
          speech.style.gridColumn = "3 / span 1";
          speech.style.visibility = "visible";
          speech.style.zIndex = "2";
          speechP.innerHTML = "Dat ziet er veel beter uit! Laten we de kaart maar meteen gebruiken!";
          speechButton.style.display = "none";
          mapOverlay.style.zIndex = '1';
          kaartHeel.play();

          kaartHeel.onended = () => {
            herhaal.style.display = "block";
            btn.style.display = "block";
          }
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

const dragDropArctic = (obj, speech, text, nextBtn, speechBtn, goedGedaan, herhaal, hintBtn) => {
  let currentDroppable = null;
  let stop = 0;
  let attr;

  obj.onmousedown = function(event) {

    let shiftX = event.offsetX;
    let shiftY = event.offsetY;

    obj.style.position = 'absolute';
    obj.style.transform = "rotate(0)";
    obj.style.zIndex = 1000;
    obj.style.cursor = "url('../images/cursor/cursor_grabbing_60.cur'), default";
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
      obj.style.cursor = "url('../images/cursor/cursor_grab_60.cur'), default";
      obj.onmouseup = null;
      
      try {
        attr = currentDroppable.getAttribute('data-pinguin');
      } catch (e) {
        return;
      }

      if(attr == obj.getAttribute('data-pinguin')) {
        let elem = document.createElement("img");
        elem.src = "../images/pinguinverblijf/heart.png";
        elem.style.width = "50px";
        elem.style.position = "absolute";
        // elem.style.left = "40px";
        elem.style.left = "1vw";
        elem.style.top = "13vh";

        currentDroppable.append(elem);
        currentDroppable.style.opacity = '100%';
        currentDroppable.classList.remove("droppable");
        obj.style.left = "18vw";
        obj.style.top ="80vh";
        //fixed de bug
        currentDroppable.removeAttribute('data-pinguin');
        pinguinsFed++;
      }
      
      if(pinguinsFed == 7 && stop == 0){
        hintBtn.disabled = true;
        speech.style.visibility = "visible";
        obj.style.visibility = "hidden";
        speechBtn.style.display = "none";
        text.style.visibility = "visible";
        text.innerHTML = "Goed gedaan! De pinguïns zijn heel blij.";
        goedGedaan.play();

        goedGedaan.onended = () => {
          nextBtn.style.display = "block";
          herhaal.style.display = "block";
          hintBtn.disabled = true;
        }
        
        herhaal.onclick = () => {
          reloadSpeech(goedGedaan, herhaal);
        }
        stop++;
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

const dragDropIjs = (obj, kassa, bol1, bol2, ijsjes, speech, audio, herhaal, kassaDrop) => {
  let currentDroppable = null;
  let attr;

  obj.onmousedown = function(event) {

    let shiftX = event.offsetX;
    let shiftY = event.offsetY;

    obj.style.position = 'absolute';
    obj.style.zIndex = 1000;
    obj.style.cursor = "url('../images/cursor/cursor_grabbing_60.cur'), default";
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

      let droppableBelow = elemBelow.closest('.ijs-droppable');

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
      obj.style.cursor = "url('../images/cursor/cursor_grab_60.cur'), default";
      obj.onmouseup = null;

      try {
        attr = currentDroppable.getAttribute('data-bol');
      } catch (e) {
        return;
      }
    
      if(attr == obj.getAttribute('data-bol')) {
        let kleur = obj.getAttribute('data-kleur');
        currentDroppable.src = `../images/ijswinkel/ijs_${kleur}.png`;
        currentDroppable.style.opacity = "100%";
        obj.hidden = true;
        currentDroppable.removeAttribute('data-bol');
        currentDroppable.classList.remove('ijs-droppable');
        aantalIjs++;

        if(aantalIjs == 1) {
          bol1.style.display = "block";

        } else if (aantalIjs == 2) {
          bol2.style.display = "block";

        } else if(aantalIjs == 3) {
          herhaal.style.display = "none";
          audio.play();
          audio.onended = () => {
            herhaal.style.display = "block";
          }
          kassaDrop.classList.add("geld-droppable");
          kassa.style.display = "block";
          kassa.innerHTML = `Dat is dan ${ijsPrijs} Euro.`;
          kassa.parentNode.dataset.geld1 = "1";
          kassa.parentNode.dataset.geld2 = "2";
          speech.innerHTML = "Zo je ijsje is klaar! Je kan het geld naar de kassa toe slepen.";
          // speech.style.fontSize = "14px";
          for(let ijs of ijsjes){
            ijs.onclick = null;
          }

          herhaal.onclick = () => {
            reloadSpeech(audio, herhaal);
          }
        }
      }
    };
  };

  function enterDroppable(elem) {
    elem.style.opacity = '30%';
  }

  function leaveDroppable(elem) {
    elem.style.opacity = '50%';
  }

  obj.ondragstart = function() {
    return false;
  };
}


const dragDropGeld = (obj, kassa, btn, speech, audio, kaching, herhaal, hint) => {
  let currentDroppable = null;
  let attr1;
  let attr2;

  obj.onmousedown = function(event) {

    let shiftX = event.offsetX;
    let shiftY = event.offsetY;

    obj.style.position = 'absolute';
    obj.style.zIndex = 1000;
    obj.style.cursor = "url('../images/cursor/cursor_grabbing_60.cur'), default";
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

      let droppableBelow = elemBelow.closest('.geld-droppable');

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
      obj.style.cursor = "url('../images/cursor/cursor_grab_60.cur'), default";
      obj.onmouseup = null;

      try {
        attr1 = currentDroppable.getAttribute('data-geld1');
        attr2 = currentDroppable.getAttribute('data-geld2');
      } catch (e) {
        return;
      }

      if (ijsPrijs == 1) {
        obj.removeAttribute('data-geld2');
      }

      if(attr1 == obj.getAttribute('data-geld1')) {
        kaching.volume = 0.2;
        kaching.play();
        ijsPrijs--;
        obj.removeAttribute('data-geld1');
        currentDroppable.style.opacity = "100%";
        obj.hidden = true;
        
      } else if (attr2 == obj.getAttribute('data-geld2')) {
        kaching.volume = 0.2;
        kaching.play();
        ijsPrijs = ijsPrijs- 2;
        obj.removeAttribute('data-geld2');
        currentDroppable.style.opacity = "100%";
        obj.hidden = true;
      }
      kassa.innerHTML = `Dat is dan ${ijsPrijs} Euro.`;

      if (ijsPrijs == 0) {
        herhaal.style.display = "none";
        audio.play();
        audio.onended = () => {
          herhaal.style.display = "block";
        }
        document.getElementById("js--ijs-keuze-kassa").classList.remove("geld-droppable");
        kassa.innerHTML = "Dankjewel!";
        btn.style.display = "block";
        speech.innerHTML = "Dankjewel! Geniet van jullie ijsjes.";

        herhaal.onclick = () => {
          reloadSpeech(audio, herhaal);
        }
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

const dragDropGiraffe = (object, endBtn, giraffeImage) => {
  let el;

  object.onmousedown = (event) => {

    let shiftX = event.clientX - object.getBoundingClientRect().left;
    let shiftY = event.clientY - object.getBoundingClientRect().top;
    
    // object.style.position = 'absolute'; //in css al meegegeven
    object.style.zIndex = 10;
    object.style.cursor = "url('../images/cursor/cursor_grabbing_60.cur'), default";
    // object.style.top = '100px';
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
      object.style.cursor = "url('../images/cursor/cursor_grab_60.cur'), default";
      object.onmouseup = null;

      try {
        el = object.getAttribute("data-elements");
      } catch (e) {
        return;
      }

      if (el == "tree") {
        object.removeAttribute('data-elements');
        tree++;
      }
      if (el == "rock") {
        object.removeAttribute('data-elements');
        rock++;
      }
      if (el == "pond") {
        object.removeAttribute('data-elements');
        pond++;
      }

      if (tree == 2) {
        document.getElementById("tree").checked = true;
      }
      if (rock == 2) {
        document.getElementById("rock").checked = true;
      }
      if (pond == 1) {
        document.getElementById("pond").checked = true;
      }
      if (tree >= 2 && rock >= 2 && pond >= 1) {
        endBtn.style.display = "block";
        giraffeImage.style.gridColumn = "7 / span 3";
        giraffeImage.style.gridRow = "3 / span 3";
        giraffeImage.style.backgroundColor = "transparent";
      }
    };
    
  };
    
  object.ondragstart = () => {
    return false;
  };
};

export { 
  addAnimate, 
  removeAnimate, 
  reloadSpeech,
  reloadHint,
  hintGlow, 
  dragDropMap, 
  dragDropArctic, 
  dragDropIjs, 
  dragDropGeld, 
  dragDropGiraffe 
};
