import axios from 'axios';

axios.defaults.baseURL = 'https://azsoft-code-server.herokuapp.com/books';

export function getBooks() {
  return axios.get().then(({ data }) => data);
}

// export function getBookById(bookId) {
//   return axios.get(`/${bookId}`).then(() => bookId);
// }

////////////////////////////////////////////

// const BASE_URL = 'https://azsoft-code-server.herokuapp.com/books';

// async function apiService(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(
//         new Error('404 The resource you requested could not be found'),
//       );
// }

// export function getBooks() {
//   return apiService(`${BASE_URL}`);
// }

// export function getBookById(bookId) {
//   return apiService(`${BASE_URL}/${bookId}`);
// }
