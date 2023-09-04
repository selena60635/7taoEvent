import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world!");
const swiper = new Swiper(".mySwiper", {
  allowTouchMove: false, //關閉滑動效果
  slidesPerView: "auto", //顯示幾個swiper-slide
  speed: 10000,
  loop: true,
  autoplay: {
    delay: 0, //每個分頁間隔時間
    disableOnInteraction: false, //觸碰不會停止autoplay
  },
}); //left to right
const swiperR = new Swiper(".mySwiperR", {
  allowTouchMove: false, //關閉滑動效果
  slidesPerView: "auto", //顯示幾個swiper-slide
  speed: 10000,
  loop: true,
  autoplay: {
    delay: 0, //每個分頁間隔時間
    disableOnInteraction: false, //觸碰不會停止autoplay
    reverseDirection: true, //反轉方向
  },
}); //right to left
