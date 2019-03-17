var characters = [  "097",
                    "098", 
                    "099", 
                    "100", 
                    "101", 
                    "102", 
                    "103", 
                    "104", 
                    "105", 
                    "106", 
                    "107", 
                    "108", 
                    "109", 
                    "110", 
                    "111", 
                    "112", 
                    "113", 
                    "114", 
                    "115", 
                    "116", 
                    "117", 
                    "118", 
                    "119", 
                    "120", 
                    "121", 
                    "122"];

function addCharacter(event) {
  for(var i = 0; i < characters.length; i++) {
    character = characters[i];
    var elem = document.createElement("img");
    elem.src = "characters/" + characters[i] + ".webp";
    var char = event.which || event.keyCode;
    if(char == character) {
      document.getElementById("container").appendChild(elem);
    }
  }
}