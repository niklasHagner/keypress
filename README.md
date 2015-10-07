# Javascript Typewriter

Generate random keyboard click sounds.
Uses vanilla JS and the HTML 'Audio' object

[Demo](https://dl.dropboxusercontent.com/u/4486136/Github/demo.html)

## Files

## Getting started
* Include keypress.js and the /sounds folder
* Check out demo.js for sample code

```javascript
//create a controller once
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
