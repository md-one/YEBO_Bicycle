const img = document.querySelectorAll("#shop img");
const overLay = document.querySelectorAll("#shop .overLay");

let i;

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseenter", name())


    function name() {
        img[i].onmouseover = function () {
            mouseOver()
        };
        img[i].onmouseout = function () {
            mouseOut();
        }
    };

    function mouseOver() {
        overLay[i].style.display = "block";
    }

    function mouseOut() {
        overLay[i].style.display = "none";
    }
}

for (let i = 0; i < img.length; i++) {

    img[i].onmouseover = function () {
        overLay[i].style.display = "block";
    };

    img[i].onmouseout = function () {
        overLay[i].style.display = "none";
    };

}


var rightImg = document.querySelectorAll(".rightImg");
var leftImg = document.querySelectorAll(".leftImg");


var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        duration: 100
    }
});

var scene = new ScrollMagic.Scene({
    triggerElement: "#imgGrid",
    duration: 100
}).on("enter", function () {
    TweenMax.to(rightImg, 1, {
        x: "100%",
        transformOrigin: "0% 100%"
    });

}).on("leave", function () {
    TweenMax.to(rightImg, 1, {
        x: "0%"
    })
}).addTo(controller);