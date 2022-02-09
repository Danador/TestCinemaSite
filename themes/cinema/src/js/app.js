import Alpine from 'alpinejs'
import lozad from 'lozad'
import './swiper';

window.Alpine = Alpine

Alpine.start()

const observer = lozad();
observer.observe();
