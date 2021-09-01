console.log("Let's get this party started!");

$("body").css("backgroundColor", "black")
    .css("color", "white")
    .css("textAlign", "center")

function getFormValues() {
    let $submittedVal = $("#gif-input").val();
    return $submittedVal;
}

async function getGiphy() {
    let value = getFormValues();
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", { params: { q: value, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" } });

    let randomNum = Math.floor(Math.random() * response.data.data.length);
    return response.data.data[randomNum].images.original.url;
}

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

function clearDisplay() {
    $("#gif-display").html("")
}







