var soundPlayer;

document.addEventListener("DOMContentLoaded", function(event) {
  initiateSoundPlayer();
  hookUpEvents();
});

function initiateSoundPlayer() {
  soundPlayer = KeyPressSoundController();
}

function initiateSoundPlayerWithOptions() {
  //if you for some reason dont want sounds to load automatically
  var options = {
    doNotLoadSoundsAutomatically: true
  };
  soundPlayer = KeyPressSoundController(options);
  soundPlayer.LoadSounds(soundPlayer.FileNames);
}

function hookUpEvents() {
  document.getElementById('keypressArea').addEventListener("keypress", playSoundOnKeypress);
  document.getElementById('keypressArea').focus();
}

function playSoundOnKeypress(e) {
  soundPlayer.PlayRandomSound();
}
