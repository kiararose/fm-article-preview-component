function shareButton() {
    var share = document.getElementById("share");
    var author = document.getElementById("author");
    var button = document.getElementById("btn");
    var shareImg = document.getElementById("icon");
    var d = window.matchMedia("(min-width:800px)");

    if (d.matches) {
        if (share.style.display === "none") {
            share.style.display = "flex";
            button.style.background = "hsl(214, 17%, 51%)";
            shareImg.style.fill = "white";
        } else {
            share.style.display = "none";
            button.style.background = "hsl(210, 46%, 95%)";
            shareImg.style.fill = "#6E8098";
        }
    } else {
        if (share.style.display === "none"){
            share.style.display = "flex";
            author.style.display = "none";
            button.style.background = "hsl(214, 17%, 51%)";
            shareImg.style.fill = "white";
        } else {
            share.style.display = "none";
            author.style.display = "flex";
            button.style.background = "hsl(210, 46%, 95%)";
            shareImg.style.fill = "#6E8098";
        }
    }
}