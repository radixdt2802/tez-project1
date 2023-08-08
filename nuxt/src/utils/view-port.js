export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    var currentHeight = window.innerHeight || document.documentElement.clientHeight;
    return currentHeight > rect.y;

}
