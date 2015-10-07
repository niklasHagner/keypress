# Javascript Typewriter

* Generates random keyboard click sounds.
* Nuthin' but vanilla JS is used

[Demo using an Oldschool Terminal](https://dl.dropboxusercontent.com/u/4486136/Github/demo.html)

## Files
* keypress.js - the only code you need
* /sounds - contains key0.mp3 to key8.mp3
* demo.html - oldschool terminal demo
* demo.js - shows some examples of how to initiate the Keypress controller
* css - just some styling for the terminal demo

## Getting started
* Include keypress.js and the /sounds folder
* Check out demo.js for sample code

```javascript
//on page load: create a KeyPressSoundController, the class which IS the library
var soundPlayer = KeyPressSoundController();
//call this every time you wanna play a sound
soundPlayer.PlayRandomSound();
```

## Credits

* I ripped this off from Christoph Olszowka ( https://github.com/colszowka/linux-typewriter )
* He in turn ripped off Sayan "Riju" Chakrabarti (sayanriju).
* Keypress sounds extracted from 'keyboard-typing' by Anton at Freesound ( www.freesound.org/samplesViewSingle.php?id=137 )

## Can it play different sounds for different keys?

Nope.
But I've included a list of JS keycodes so you can modify the script to your liking
