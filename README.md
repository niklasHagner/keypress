# Javascript Typewriter

* Plays random keyboard click sounds.
* Uses vanilla JS and mp3 files

#### [Demo of an oldschool terminal](https://dl.dropboxusercontent.com/u/4486136/Github/demo.html)

## Files
* `keypress.js` - the library itself
* `/sounds` - contains 9 mp3 files (`key0.mp3`, `key1.mp3` ...)
* `demo.html` - oldschool terminal demo
* `demo.js` - shows some examples
* `css` - styling for the terminal demo

## Getting started
* Include keypress.js and the /sounds folder
* Check out demo.js for sample code

```javascript
//create one KeyPressSoundController (the library wrapper)
var soundPlayer = KeyPressSoundController();
//start playing sounds on the keypress event
document.getElementById('keypressArea').addEventListener("keypress",
  function() {
    soundPlayer.PlayRandomSound();
  }
);
```

## Credits

* Forked from Christoph Olszowka's Linux TypeWriter https://github.com/colszowka/linux-typewriter
* Originally from Sayan "Riju" Chakrabarti https://github.com/sayanriju
* Keypress sounds extracted from 'keyboard-typing' by Anton at Freesound http://freesound.org/samplesViewSingle.php?id=137

## Can it play different sounds for different keys?

I've included a list of JS keycodes so you can modify the script to your liking
