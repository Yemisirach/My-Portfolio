const button = document.getElementById('btn');
const list = document.getElementById('list');
const menuShow = document.getElementById('menu-show');

list.style.display = 'none';

// button.addEventListener('click', () => {
//   if (list.style.display === 'none') {
//     list.style.display = 'block';
//   } else {
//     list.style.display = 'none';
//   }
// });

const openMenu = () => {
  menuShow.classList.add('show-menu');
  // logo.classList.add('blur-filter');
  // menu.classList.add('blur-filter');
  // mainBody.classList.add('blur-filter');
};

button.addEventListener('click', openMenu);