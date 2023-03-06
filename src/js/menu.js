
// import templateFunction from './templates/template.hbs';
// document.body.innerHTML = templateFunction();

const menuList = document.querySelector('.js-menu');
const menuTemplate = document.querySelector('#menu-template').innerHTML;
const compiledTemplate = Handlebars.compile(menuTemplate);

fetch('./src/menu.json')
  .then(response => response.json())
  .then(menu => {
    const markup = menu.map(item => compiledTemplate(item)).join('');
    menuList.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => console.log(error));
