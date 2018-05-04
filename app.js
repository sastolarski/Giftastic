//first thing ill need is an array of video games for the premade buttons

var games = ["God of War", "Rainbow 6 Siege", "pubg", "Fortnite", "Rocket League", "Fallout", "Skyrim", "Call of Duty", "Dark Souls", "Mario Kart",];

//next thing is to turn everything from this array into a button on screen

$(document).ready(function(){

// function to create buttons and render them on screen

function renderButtons(){
    $("#buttonRow").empty();
    for(var i = 0; i < games.length; i++){
        var gameButton = $("<button>");
        gameButton.addClass("games btn btn-primary");
        gameButton.attr("data-name", games[i]);
        gameButton.text(games[i]);
        $("#buttonRow").append(gameButton);
    }
}

//next thing i want to do is create a form that lets me add more buttons to these
$(".submit").on("click", function(){
    event.preventDefault();
    var newGame = $("#gameTitles").val().trim();
    games.push(newGame);
    renderButtons();

})

renderButtons();

//next thing to do is to connect the buttons i've rendered into links to the giphy API
//they need to return a certain number of gifs with the keyword searched for as the title of the game









})  //document ready end