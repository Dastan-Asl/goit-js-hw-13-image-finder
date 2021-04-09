import templateMarkup from '../../template/cardTemplate.hbs';
import refs from './refs';

const updateImagesMarkup = hits => {
  const markup = templateMarkup(hits);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
};

export default updateImagesMarkup;
