import './styles.css';
import menu from './menu.json';
import menuItem from './menu.hbs';

const menuUl = document.querySelector('.js-menu');

function createMenuList(menu) {
  const items = menu.map(menu => menuItem(menu)).join('');
  menuUl.insertAdjacentHTML('beforeend', items);
}

createMenuList(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const inputTheme = document.querySelector('.js-switch-input');
const sideDarkTheme = localStorage.getItem('themeBl');
const sideLightTheme = localStorage.getItem('themeWh');

inputTheme.addEventListener('change', modifiedTheme);

function modifiedTheme() {
  if (inputTheme.checked) {
    modifiedDarkTheme();
  } else {
    modifiedLightTheme();
  }
}

if (sideDarkTheme) {
  modifiedDarkTheme();
  inputTheme.checked = true;
} else if (sideLightTheme) {
  modifiedLightTheme();
}

function modifiedDarkTheme() {
  localStorage.setItem('themeBl', JSON.stringify(Theme.DARK));
  localStorage.removeItem('themeWh');
  if (document.body.classList.contains('light-theme') === true) {
    document.body.classList.replace('light-theme', 'dark-theme');
  } else if (document.body.classList.contains('dark-theme') === false) {
    document.body.classList.add('dark-theme');
  }
}

function modifiedLightTheme() {
  localStorage.setItem('themeWh', JSON.stringify(Theme.LIGHT));
  localStorage.removeItem('themeBl');
  if (document.body.classList.contains('dark-theme') === true) {
    document.body.classList.replace('dark-theme', 'light-theme');
  } else if (document.body.classList.contains('light-theme') === false) {
    document.body.classList.add('light-theme');
  }
}
