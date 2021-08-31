console.log("Let's get this party started!");

$("body").css("backgroundColor", "black")
    .css("color", "white")
    .css("textAlign", "center")

function getFormValues () {
    let $submittedVal = $("#gif-input").val();
    return $submittedVal;
}

async function getGiphy () {
    let value = getFormValues();
    let response = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: value, api_key:MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym}});
    return response.data.data[0].url;
}

$(".gif-form").on("submit", )




