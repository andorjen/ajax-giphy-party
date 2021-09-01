"use strict"

console.log("Let's get this party started!");

const GIPHY_URL = "http://api.giphy.com/v1/gifs/search"; 
const GIPHY_API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

$("body").css("backgroundColor", "black")
    .css("color", "white")
    .css("textAlign", "center")

/** Get and return values from the form submit*/
function getFormValues() {
    let $submittedVal = $("#gif-input").val();
    return $submittedVal;
}

/** Call Giphy's API using the form value and return a random URL  */
async function getGiphy() {
    let value = getFormValues();
    let response = await axios.get(GIPHY_URL, { params: { q: value, api_key: GIPHY_API_KEY } });

    let randomNum = Math.floor(Math.random() * response.data.data.length);
    return response.data.data[randomNum].images.original.url;
}

/** Add the gif to the HTML */
async function addGiphy(evt) {
    evt.preventDefault();
    let gifUrl = await getGiphy();
    let gif = $("<img>");

    gif.addClass("gif")
        .attr("src", gifUrl)
        .css("margin", "20px")
        .css("width", "400px")

    let displayContainer = $("#gif-display");
    
    displayContainer.append(gif);

    $("#gif-input").val("");
}

$(".gif-form").on("submit", addGiphy)

$("#gif-clear").on("click", clearDisplay)

/** Clear the gifs displayed */
function clearDisplay() {
    $("#gif-display").empty();
}







