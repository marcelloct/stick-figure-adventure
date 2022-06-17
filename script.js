 // Initialize the current scene to Scene 0 (Intro)
var curScene = 0

function changeScene(decision) {
    var message = "";
    switch(curScene){
        case 0:
            curScene = 1;
            message = "Your journey begins at a fork in the road.";
            break;
        case 1:
            if(decision == 1){
                curScene = 2;
                message = "You have arrived at a cute little house in the woods.";
            } else {
                curScene = 3;
                message = "You are standing on the bridge overlooking a peaceful stream.";
            }
            break;
        case 2:
            if(decision == 1){
                curScene = 4;
                message = "Peeking through the window, you see a witch inside the house.";
            } else {
                curScene = 5;
                message = "Sorry, a witch lives in the house and you just became part of her stew.";
            }
            break;
        case 3:
            if(decision == 1) {
                curScene = 6;
                message = "Sorry, a troll lives on the other side of the bridge and you just became his lunch.";
            } else {
                curScene = 7;
                message = "Your stare is interrupted by the arrival of a huge troll.";
            }
            break;
        case 4:
            if(decision == 1){
                curScene = 8;
            } else {
                curScene = 5;
                message = "Sorry, you became part of the witch's stew.";
            }
            break;
        case 5:
            curScene = 0;
            break;
        case 6:
            curScene = 0;
            break;
        case 7:
            if (decision == 1) {
                curScene = 6;
                message = "Sorry, you became the troll's tasty lunch.";
              }
              else {
                curScene = 9;
              }
              break;
        case 8:
            break;
        case 9:
            break;
    }

    document.querySelector("#sceneimg").src = "scene" + curScene + ".png";
    if(message != ""){
        alert(message);
    }
}