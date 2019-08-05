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