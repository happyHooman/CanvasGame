(function () {

  function appendStatsDisplay(){
    let container = document.createElement("DIV");
    container.style.backgroundColor = 'white';
    container.style.position = 'absolute';
    container.style.border = '1px solid red';
    container.style.width = '200px';
    container.style.height = '60px';
    container.style.borderRadius = '5px';
    container.style.top = '10px';
    container.style.right = '10px';
    let title = document.createElement('H4');
    let titleText = document.createTextNode('Game Stats');
    title.appendChild(titleText);
    container.appendChild(title);
    document.body.appendChild(container)
  }

  function fireKeyboardEvent(event, keycode) {
    var keyboardEvent = document.createEventObject ?
      document.createEventObject() : document.createEvent("Events");

    if(keyboardEvent.initEvent) {
      keyboardEvent.initEvent(event, true, true);
    }

    keyboardEvent.keyCode = keycode;
    keyboardEvent.which = keycode;

    document.dispatchEvent ? document.dispatchEvent(keyboardEvent)
      : document.fireEvent(event, keyboardEvent);
  }

  setInterval(function(){fireKeyboardEvent("keydown", 38)}, 500);

  // Before start
  appendStatsDisplay();


  // The game process
  gameProcess();
  function gameProcess() {
    if (Runner.instance_.activated){ //play game

    } else { // on game over

      console.log('reached speed:', Runner.instance_.currentSpeed);
      // restart the game
      fireKeyboardEvent("keyup", 38);
    }
    window.requestAnimationFrame(gameProcess);

  }
})();