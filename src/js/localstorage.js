//import '../sass/feedback-form.scss';

// const settings = {
//     theme: 'dark',
//     fontSize: 14,
// }

// localStorage.setItem('settings', JSON.stringify(settings));

const savedSettings = localStorage. getItem ('settings');

const parsedSettings = JSON.parse(savedSettings) ;

console.log(parsedSettings);