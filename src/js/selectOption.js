import { refs } from './refs.js';
import { fetchBreed, fetchCatByBreed } from './cat-api.js';
import { populateCatInfo } from './populate.js';
import { loadError, loaded } from './loading.js';

export function selectOption(e) {
  const selectValue = e.currentTarget.value;

  if (selectValue === '') {
    loadError();
    refs.infoConteiner.classList.add('is-hidden')
    return;
  }

  const urlImg = fetchCatByBreed(selectValue);
  const breed = fetchBreed(selectValue);
  Promise.all([urlImg, breed])
    .then(res => {
      if (Object.keys(res[1]).length === 0) {
        throw new Error();
      }
      populateCatInfo({ url: res[0][0].url, breed: res[1] });
      loaded();
    })
    .catch(loadError);
}
