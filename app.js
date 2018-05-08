//first thing ill need is an array of video games for the premade buttons

var games = ["God of War", "Rainbow 6 Siege", "pubg", "Fortnite", "Rocket League", "Fallout", "Skyrim", "Call of Duty", "Dark Souls", "Mario Kart",];

var createdNewGifs = ["Create Your Own Text Gifs"];



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

//run render Buttons to intialize and create all started buttons
renderButtons();

//next thing i want to do is create a form that lets me add more buttons to these
$("#submitGame").on("click", function(){
    event.preventDefault();
    var newGame = $("#gameTitles").val().trim();
    games.push(newGame);
    renderButtons();

})


function renderCreates(){
    $("#createdGifs").empty();
    for(var k = 0; k < createdNewGifs.length; k++){
        var createButton = $("<button>");
        createButton.addClass("creates btn btn-primary");
        createButton.attr("data-name", createdNewGifs[k]);
        createButton.text(createdNewGifs[k]);
        $("#createdGifs").append(createButton);
    }
}
renderCreates();

$("#submitCreate").on("click", function(){
    console.log("create pushed")
    event.preventDefault();
    var newCreate = $("#createGif").val().trim();
    createdNewGifs.push(newCreate);
    renderCreates();

})


//next thing to do is to connect the buttons i've rendered into links to the giphy API
//they need to return a certain number of gifs with the keyword searched for as the title of the game

$("#buttonRow").on("click", ".games", function(){
    console.log($(this).attr("data-name"));

    $("#gifsRender").empty();
    var gameSearch = $(this).attr("data-name");

    event.preventDefault();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gameSearch + "&api_key=kGu4HUdaUdb45rMyWat7f6rh1lxq0BYe&limit=10";

    $.ajax({
        url: queryURL, 
        method: "GET"
        }).then(function(response){
            console.log(response);

            for(var j = 0; j < 10; j++){
                var newGif = $("<img>")
                newGif.attr({
                    "src" : response.data[j].images.original_still.url,
                    "data-still" : response.data[j].images.original_still.url,
                    "data-animate" : response.data[j].images.fixed_height.url,
                    "data-state" : "still"    
                });

                newGif.addClass("gifs")
                
                $("#gifsRender").append(newGif)
            } //loop ending

            $(".gifs").on("click", function() {

                var state = $(this).attr("data-state");

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });
            
        });


})

//next thing i needs is an ajax call that links to the .creates buttons and sends a transform request to the giphy API

$("#createdGifs").on("click", ".creates", function(){
    console.log("you pushed a button");
    console.log($(this).attr("data-name"));
})






});  //document ready ending