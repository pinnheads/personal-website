import AOS from 'aos';

export function aosInit() {
    AOS.init({ duration: 800, easing: "ease-out-cubic", offset: 180, once: true });
}