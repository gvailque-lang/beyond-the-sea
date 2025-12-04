/*
AI usage:
Prompt: Can you check this code
Response: ChatGPT provided the base for the output parts or just starting from $(document).ready
My changes: the length of the seaCreatures
Reasoning: I wanted the parts that I was adding to the old code look good
What code is AI: Everything that was listed in the response of ChatGPT was used through AI
*/

let aquariumName = "Beyond the Sea Aquarium";
let welcomeMessage = "Dive deep and explore the wonders of ocean life!";


let seaCreatures = ["Whale", "Jellyfish", "Seahorse", "Turtle"];

let whale = {
  name: "Whale",
  fact: "Despite their size, whales are peaceful and social creatures.",
  sound: "Wooooooo!"
};


$(document).ready(function () {

  $("#output").append(`<h2>${aquariumName}</h2>`);
  $("#output").append(`<p>${welcomeMessage}</p>`);

  
  $("#output").append("<h3>Meet our ocean friends:</h3>");
  $("#output").append("<ul>");

  for (let i = 0; i < seaCreatures.length; i++) {
    $("#output").append(`<li>${seaCreatures[i]}</li>`);
  }

  $("#output").append("</ul>");

  $("#output").append(`<p><strong>${whale.name} says:</strong> "${whale.sound}"</p>`);
  $("#output").append(`<p>Fun fact: ${whale.fact}</p>`);
});


/*
AI usage:
Prompt: Can you check this code and add to it
Response: ChatGPT provided the base of some of the code
My changes: I just changed the sea life parts
Reasoning: I wanted the parts that I was adding to the old code look good
What code is AI: Everything that was listed in the response of ChatGPT was used through AI
*/

function changeEnvironment(timeOfDay, creature) {
  if (timeOfDay === "day") {
    $("body").removeClass("nighttime").addClass("daytime");
    $("#output").append(`<p>The sun is shining brightly over the ${creature}!</p>`);

  } else if (timeOfDay === "night") {
    $("body").removeClass("daytime").addClass("nighttime");
    $("#output").append(`<p>The moonlight glows softly above the ${creature}...</p>`);

  } else {
    $("#output").append(`<p>The ocean feels mysterious right now!</p>`);
  }
}

$("#changeBtn").on("click", function () {
  let randomTime = Math.random() > 0.5 ? "day" : "night";
  let randomCreature = seaCreatures[Math.floor(Math.random() * seaCreatures.length)];

  changeEnvironment(randomTime, randomCreature);
});