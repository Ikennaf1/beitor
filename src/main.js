import './style.css'

var navBtn = document.querySelector('#nav-open');
var menu = document.querySelector('#nav-opened')
navBtn.onclick = () => {
  menu.hidden = !menu.hidden;
  navBtn.ariaHidden = !navBtn.ariaHidden;
  navBtn.ariaExpanded = !navBtn.ariaExpanded;
}
