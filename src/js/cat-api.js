import { refs } from './refs.js';
import { loadingBreeds, loading } from './loading.js';

const API__KEY =
  'live_0BqV3j3YmIS3zNzXGY4KnJqUjulhNXeSpTzJ9z31SiMI8GIsyQBL40mygnjM6r1o';
const BASE__URL = 'https://api.thecatapi.com/v1';

const option = {
  headers: {
    'x-api-key': API__KEY,
  },
};

export function fetchBreeds() {
  loadingBreeds();
  return fetch(`${BASE__URL}/breeds`, option).then(res => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
}

export function fetchCatByBreed(breedId) {
  refs.infoConteiner.classList.add('is-hidden');
  loading();
  return fetch(`${BASE__URL}/images/search?breed_ids=${breedId}`, option).then(
    res => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    }
  );
}