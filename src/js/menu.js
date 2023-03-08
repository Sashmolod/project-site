import itemsTemplate from '../markup/template.hbs';
import menus from '../menu.json';
const menuItemTemplate = itemsTemplate(menus);
galleryRef = document.querySelector(".js-menu");
galleryRef.insertAdjacentHTML('beforeend', menuItemTemplate);
