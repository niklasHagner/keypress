var soundPlayer;

document.addEventListener("DOMContentLoaded", function(event) {
  initiateSoundPlayer();
  hookUpEvents();
});

function initiateSoundPlayer() {
  soundPlayer = KeyPressSoundController();

  //ALTERNATIVE: - load the sounds manually
  //var options = {doNotLoadSoundsAutomatically: true};
  //soundPlayer = KeyPressSoundController(options);
  //soundPlayer.LoadSounds(soundPlayer.FileNames);
}

function hookUpEvents() {
  document.getElementById('keypressArea').addEventListener("keypress", playSoundOnKeypress);
  document.getElementById('keypressArea').focus();
}

function playSoundOnKeypress(e) {
  soundPlayer.PlayRandomSound();
}
