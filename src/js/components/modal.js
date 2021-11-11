export function openModalWindow() {
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const backdrop = document.querySelector('[data-modal]');
  window.addEventListener('keydown', onEscKeyPress);
  closeModalBtn.addEventListener('click', closeModalWindow);
  backdrop.addEventListener('click', closeToBackdrop);
}

function closeToBackdrop(e) {
  if (e.target.className === 'backdrop') {
    closeModalWindow();
  }
}

function closeModalWindow(e) {
  const modal = document.querySelector('[data-modal]');
  modal.classList.add('visually-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModalWindow();
  }
}
