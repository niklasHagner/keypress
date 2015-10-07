var KeyPressSoundController = function(options) {

  var fileNames = [
    "sounds/key0.mp3",
    "sounds/key1.mp3",
    "sounds/key2.mp3",
    "sounds/key3.mp3",
    "sounds/key4.mp3",
    "sounds/key5.mp3",
    "sounds/key6.mp3",
    "sounds/key7.mp3",
    "sounds/key8.mp3"
  ];

  var loadedAudioFiles = [];

  var keys = {
    isAtoZ: function(e) {
      return e >= 65 && e <= 90;
    },
    isNumber: function(e) {
      return e >= 48 && e <= 57;
    },
    isF1toF12: function(e) {
      return e >= 112 && e <= 123;
    },
    isNotWrittenText: function(e) {
      return e >= 16 && e < 46 || (e>= 91 && e <=146);
    },
    isBackspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pausebreak: 19,
    capslock: 20,
    escape: 27,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    leftarrow: 37,
    uparrow: 38,
    rightarrow: 39,
    downarrow: 40,
    insert: 45,
    delete: 46,
    leftwindowkey: 91,
    rightwindowkey: 92,
    selectkey: 93,
    numlock: 144,
    scrolllock: 145
  };

  var ignorelist = [
    keys.escape
  ];

  var loadSounds = function(fileNames) {
    fileNames.forEach(function(fileName) {
      try {
        var sound = new Audio(fileName);
        sound.load();
        loadedAudioFiles.push(sound);
      } catch (e) {
        console.error("Error loading sound " + fileName);
        return;
      }
    });

  };

  var playRandomSound = function() {
    if (fileNames.length <1 || loadedAudioFiles.length <1) {
      console.error("No audio files loaded");
      return;
    }
    var randomIndex = getRandomInt(0, fileNames.length - 1);
    var randomSound = loadedAudioFiles[randomIndex];
    playAudioObject(randomSound);
  };
  var playSoundByFileName = function(fileName) {
    var ix = fileNames.indexOf(fileName);
    playAudioObject(loadedAudioFiles[ix]);
  };

  var playAudioObject = function(audioObject) {
    audioObject.play();
  };

  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  var constructReturnObject = function(options) {
    var returnObject = {
      FileNames: fileNames,
      LoadSounds: loadSounds,
      PlayRandomSound: playRandomSound,
      PlaySoundByFileName: playSoundByFileName
    };
    if (typeof options === "undefined" || typeof options !== "object") {
      applyDefaultOptions(returnObject);
      return returnObject;
    }
    if (options.doNotLoadSoundsAutomatically === false) {
      returnObject.LoadSounds(returnObject.FileNames);
    }

    return returnObject;
  };

  var applyDefaultOptions = function(returnObject) {
    returnObject.LoadSounds(returnObject.FileNames);
  };

  return constructReturnObject(options);
};
