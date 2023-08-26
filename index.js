/*

const menu= document.querySelector(".menu-toogle");
const lista=document.querySelector(".navbar-list");

menu.classList.remove('activo');
lista.classList.add('desactivada');

menu.addEventListener('click',()=>{
    menu.classList.toggle('activo');

    lista.classList.toggle('desactivada')

  })




function toggleSubMenu(element) {
    var subMenu = element.nextElementSibling;
    subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
  }



  function toggleViajesBox(element) {
    var viajesBox = element.nextElementSibling;
    viajesBox.style.display = viajesBox.style.display === "block" ? "none" : "block";
  }

*/

const menu = document.querySelector(".menu-toogle");
const lista = document.querySelector(".navbar-list");

menu.classList.remove('activo');
lista.classList.add('desactivada');




function toggleSubMenu(element) {
  var subMenu = element.nextElementSibling;
  subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
}

function toggleViajesBox(element) {
  var viajesBox = element.nextElementSibling;
  viajesBox.style.display = viajesBox.style.display === "block" ? "none" : "block";
}

function handleResponsiveFunctions() {
  //const subMenuTriggers = document.querySelectorAll(".submenu-trigger"); // Cambia ".submenu-trigger" por el selector correcto
 // const viajesBoxTriggers = document.querySelectorAll(".viajesbox-trigger"); // Cambia ".viajesbox-trigger" por el selector correcto

  if (window.innerWidth <= 576) {
    menu.addEventListener('click', () => {
      menu.classList.toggle('activo');
      lista.classList.toggle('desactivada');
    });

    subMenuTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => toggleSubMenu(trigger));
    });

    viajesBoxTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => toggleViajesBox(trigger));
    });
  } else {
    subMenuTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => toggleSubMenu(trigger));
    });

    viajesBoxTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => toggleViajesBox(trigger));
    });
  }
}

window.addEventListener('resize', handleResponsiveFunctions);
window.addEventListener('DOMContentLoaded', handleResponsiveFunctions);




