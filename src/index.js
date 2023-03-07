console.log("parcel-plugin-handlebars");

import './sass/index.scss';
import './js/theme-switch.js';

//const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

// menu.exports = {
//     data: 'src/markup/',
//     decorators: 'src/markup/decorators',
//     helpers: 'src/markup/helpers',
//     layouts: 'src/markup/layouts',
//     partials: 'src/markup/partials',
//   };