document.addEventListener('DOMContentLoaded', function() {
  // ----- Модальное окно выбора города -----
  const cityModal = document.getElementById('cityModal');
  const currentCity = document.getElementById('currentCity');
  const closeModal = document.getElementById('closeModal');

  currentCity.addEventListener('click', () => {
    cityModal.style.display = 'flex';
  });

  closeModal.addEventListener('click', () => {
    cityModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === cityModal) {
      cityModal.style.display = 'none';
    }
  });

  // ----- Бургер-меню -----
  const iconMenu = document.querySelector('.icon-menu');
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerClose = document.querySelector('.burger-close');
  const body = document.body;

  // Создаем оверлей
  const overlay = document.createElement('div');
  overlay.classList.add('burger-overlay');
  document.body.appendChild(overlay);

  // Клонируем навигацию в бургер-меню между кнопками
  const mainNav = document.querySelector('.main-nav .container ul');
  const burgerButtons = burgerMenu.querySelector('.burger-buttons');

  if (mainNav && burgerButtons) {
    const navClone = document.createElement('ul');
    navClone.className = 'burger-nav';
    navClone.innerHTML = mainNav.innerHTML;

    const secondButton = burgerButtons.querySelector('.btn-calc');
    burgerButtons.insertBefore(navClone, secondButton); // вставляем перед второй кнопкой
  }

  // Открытие меню
  iconMenu.addEventListener('click', () => {
    burgerMenu.classList.add('active');
    overlay.classList.add('active');
    body.style.overflow = 'hidden';
  });

  // Закрытие через крестик
  burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = 'auto';
  });

  // Закрытие при клике на оверлей
  overlay.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    overlay.classList.remove('active');
    body.style.overflow = 'auto';
  });
});
