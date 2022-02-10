import Swiper from "swiper";

var swiper = new Swiper('.swiper_film', {
    slidesPerView: 4,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    spaceBetween: 20,
});