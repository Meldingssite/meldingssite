"use strict";

function deleteNullProperties(deleteObject) {
  /**************************
   * deleteNullProperties()
   **************************
   * Deletes empty properties in the object
   */
  var keys = Object.keys(deleteObject);

  for (var x = 0; keys.length > x; x++) {
    if (deleteObject[keys[x]] == null) {
      delete deleteObject[keys[x]];
    }
  }

  return deleteObject;
}

function toggleSpace(item) {
  var ForceSpace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  /**************************
   * toggleSpace()
   **************************
   * Switches between _ and spaces for onclick arguments
   */
  var returnItem = "";

  if (item.indexOf('_') > -1 || ForceSpace === true) {
    returnItem = item.replace(new RegExp("_", "g"), ' ');
  } else if (item.indexOf(' ') > -1) {
    returnItem = item.replace(new RegExp(" ", "g"), '_');
  } else if (item.indexOf(' ') < 1 && item.indexOf('_') < 1) {
    return item;
  } else {
    console.log("something appears to have gone wrong with" + item + " !");
  }

  return returnItem;
}

function extraInfo(ID) {
  /**************************
   * extraInfo()
   **************************
   * Toggles if the extra info is shown
   */
  document.getElementById('extraInfo' + ID).classList.toggle("hidden");
}

function updateNotify(element) {
  /**************************
   * updateNotify()
   **************************
   * DESCRIPTION HERE
   */
  document.getElementById('view' + element['id']).style.color = "yellow";
  alertSound("Alert");
}

function alertSound(audioName) {
  /**************************
   * alertSound()
   **************************
   * Plays an alert sound
   */
  var audio = new Audio(IMAGE_DIR + '../audio/' + audioName + ".mp3");
  audio.loop = false;
  audio.play();
}