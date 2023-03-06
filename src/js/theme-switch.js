const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};

// функция установки темы
function setTheme(theme) {
  refs.body.classList.add(theme);
  refs.themeSwitch.checked = theme === Theme.DARK;
  localStorage.setItem('theme', theme);
}

// функция удаления темы
function removeTheme(theme) {
  refs.body.classList.remove(theme);
}

// проверяем, есть ли уже сохраненная тема в localStorage
const savedTheme = localStorage.getItem('theme');

// если есть, устанавливаем сохраненную тему
if (savedTheme) {
  setTheme(savedTheme);
}

// при изменении чекбокса меняем тему
refs.themeSwitch.addEventListener('change', (e) => {
  const theme = e.target.checked ? Theme.DARK : Theme.LIGHT;
  removeTheme(Theme.DARK);
  removeTheme(Theme.LIGHT);
  setTheme(theme);
});
