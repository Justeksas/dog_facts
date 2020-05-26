// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = "https://example.com"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
//     .then((response) => response.text())
//     .then((contents) => console.log(contents))
//     .catch(() =>
//         console.log("Can’t access " + url + " response. Blocked by browser?")
//     );

let api_url =
    "https://thingproxy.freeboard.io/fetch/https://some-random-api.ml/facts/dog";
$.ajax({
    url: api_url,
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
        console.log(result);
    },
});
