jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = "https://ancient-dusk-93363.herokuapp.com/" + options.url;
    }
});

// $.getJSON("https://some-random-api.ml/facts/dog", function (data) {
$.getJSON("https://dog-api.kinduff.com/api/facts", function (data) {
    console.log(data);

    let dog_fact = data.facts;
    $(".dog_fact").append(dog_fact);
});

$.getJSON("https://dog.ceo/api/breeds/image/random", function (image) {
    console.log(image);

    let dog_img = image.message;
    $(".dog_img").attr("src", dog_img);
});
