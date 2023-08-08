export default async function () {
  var elements = document.getElementsByClassName('nuxt-anchore');
  for (var i = 0; i < elements.length; i++) {
    if (!elements[i].onclick) {
      elements[i].onclick = function (e) { e.preventDefault(); window.$nuxt._router.push(this.getAttribute('href')); };
      elements[i].classList.remove("nuxt-anchore");
    }
  }
}
