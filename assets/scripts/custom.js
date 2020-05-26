jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = "https://ancient-dusk-93363.herokuapp.com/" + options.url;
    }
});

$.getJSON("https://some-random-api.ml/facts/dog", function (data) {
    console.log(data);

    let dog_fact = data.fact;
    $(".dog_fact").append(dog_fact);
});

$.getJSON("https://some-random-api.ml/img/dog", function (image) {
    console.log(image);

    let dog_img = image.link;
    $(".dog_img").attr("src", dog_img);
});
