let menuicon = document.querySelector(".nav-menu");
let menulist = document.querySelector(".nav-items");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})


$('.parent-slide').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrow:false,
    speed: 300,
    slidesToShow: 1.9,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});