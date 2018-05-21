(function () {

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
  setTimeout(function(){fireKeyboardEvent("keyup", 38); console.log('timeout')}, 10000);
  let i = 0;
  window.requestAnimationFrame(logSomething);

  function logSomething() {
    console.log(i);
    i++;
    window.requestAnimationFrame(logSomething);
  }

})();
