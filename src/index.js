import fetchImages from './js/apiService';
import refs from './js/refs';
import updateImagesMarkup from './js/updateImagesMarkup';
import './styles.css';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  fetchImages.query = form.elements.query.value;

  refs.gallery.innerHTML = '';
  form.reset();

  fetchImages.resetPage();

  refs.button.classList.add('is-hidden');

  fetchImages.fetchImages().then(hits => {
    updateImagesMarkup(hits);
    refs.button.classList.remove('is-hidden');
  });
});

refs.button.addEventListener('click', () => {
  fetchImages.fetchImages().then(hits => {
    updateImagesMarkup(hits);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
});
