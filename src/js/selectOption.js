import { fetchBreed, fetchCatByBreed } from './cat-api.js';
import { populateCatInfo } from './populate.js';
import { loadError } from './loading.js';

export function selectOption(e) {
  const selectValue = e.currentTarget.value;

  const urlImg = fetchCatByBreed(selectValue);
  const breed = fetchBreed(selectValue);

  Promise.all([urlImg, breed]).then(res => {
    populateCatInfo({ url: res[0][0].url, breed: res[1] });
  }).catch(loadError);
}
