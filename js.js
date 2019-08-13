var rightImg = document.querySelectorAll(".rightImg");
var leftImg = document.querySelectorAll(".leftImg");


var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        //duration: 500
    }
});

// i make 3 scene for every row in the grid because of the different size of images and i made the triggerElement the bigger element in the row

let q = window.matchMedia("(max-width: 768px)");

if (q.matches) {
    for (let i = 0; i < rightImg.length; i++) {

        var scene = new ScrollMagic.Scene({
            triggerElement: leftImg[0]
        }).on("enter", function () {
            TweenMax.to(rightImg[i], 1, {
                opacity: 1
            });

            TweenMax.to(leftImg[i], 1, {
                opacity: 1
            });

        }).on("leave", function () {
            TweenMax.to(rightImg[i], 1, {
                opacity: 0
            })
            TweenMax.to(leftImg[i], 1, {
                opacity: 0
            });
        }).addTo(controller);

    }


} else {
    var scene = new ScrollMagic.Scene({
        triggerElement: leftImg[0]
    }).on("enter", function () {
        TweenMax.to(rightImg[0], 1, {
            x: "-50%",
            transformOrigin: "0% 100%",
            opacity: 1

        });

        TweenMax.to(leftImg[0], 1, {
            x: "50%",
            transformOrigin: "0% 100%",
            opacity: 1
        });

    }).on("leave", function () {
        TweenMax.to(rightImg[0], 1, {
            x: "0%",
            opacity: 0
        })
        TweenMax.to(leftImg[0], 1, {
            x: "0%",
            transformOrigin: "0% 100%",
            opacity: 0
        });
    }).addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: rightImg[1]
    }).on("enter", function () {
        TweenMax.to(rightImg[1], 1, {
            x: "-50%",
            transformOrigin: "0% 100%",
            opacity: 1
        });

        TweenMax.to(leftImg[1], 1, {
            x: "50%",
            transformOrigin: "0% 100%",
            opacity: 1
        });

    }).on("leave", function () {
        TweenMax.to(rightImg[1], 1, {
            x: "0%",
            opacity: 0
        })
        TweenMax.to(leftImg[1], 1, {
            x: "0%",
            transformOrigin: "0% 100%",
            opacity: 0
        });
    }).addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: leftImg[2]
    }).on("enter", function () {
        TweenMax.to(rightImg[2], 1, {
            x: "-50%",
            transformOrigin: "0% 100%",
            opacity: 1
        });

        TweenMax.to(leftImg[2], 1, {
            x: "50%",
            transformOrigin: "0% 100%",
            opacity: 1
        });

    }).on("leave", function () {
        TweenMax.to(rightImg[2], 1, {
            x: "0%",
            opacity: 0
        })
        TweenMax.to(leftImg[2], 1, {
            x: "0%",
            transformOrigin: "0% 100%",
            opacity: 0
        });
    }).addTo(controller);
}