function refreshPage() {
    window.location.reload();
}

(function countdown(remaining) {
    if (remaining === 0) location.reload(true);
    if (remaining > 0)
        document.getElementById("countdown").innerHTML = remaining;
    setTimeout(function () {
        countdown(remaining - 1);
    }, 1000);
})(30); // 30 seconds
