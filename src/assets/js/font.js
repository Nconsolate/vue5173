function font() {
  document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 7.5 + "px";
}
font()
window.onresize = font