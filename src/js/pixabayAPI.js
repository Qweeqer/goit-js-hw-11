import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
// -------------------video------
// axios.defaults.baseURL = 'https://pixabay.com/api/videos';
// ---------------------------------------------------------------
export class PixabayAPI {
  #BASE_URL = axios.defaults.baseURL;
  #API_KEY = '28612573-96fa08825695f2b47097a163d';
  #page;
  #searchQuery;
  #searchParams = new URLSearchParams({
    per_page: 40,
    client_id: this.#API_KEY,
    image_type: 'photo',
    safesearch: 'true',
    orientation: 'portrait',
  });
  // -------------Відео----------------------
  // #searchParams = new URLSearchParams({
  //   per_page: 8,
  //   client_id: this.#API_KEY,
  //   video_type: 'all',
  //   safesearch: 'true',
  //   videos: 'tiny',
  // });
  // ------------------------------------------------
  constructor() {
    this.#page = 1;
    this.#searchQuery = '';
  }

  async fetchImages() {
    try {
      // console.log('page', this.#page);
      const response = await axios.get(
        `/?key=${this.#API_KEY}&q=${this.#searchQuery}&page=${this.#page}&${
          this.#searchParams
        }`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  incrementPage() {
    this.#page += 1;
  }
  resetPage() {
    this.#page = 0;
  }
  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }
  get searchQuery() {
    return this.#searchQuery;
  }
  set searchQuery(newQuery) {
    this.#searchQuery = newQuery;
  }
}

// ----------------Чернетка ---------10-2------------------
// const searchParams = new URLSearchParams({
//   per_page: 30,
//   client_id: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc',
//   color: 'black',
//   orientation: 'portrait',
// });

// export class UnsplashAPI {
//   #BASE_URL = 'https://api.unsplash.com/search/photos';
//   #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

//   #page;
//   #query;

//   #searchParams = new URLSearchParams({
//     per_page: 30,
//     client_id: this.#API_KEY,
//     color: 'black',
//     orientation: 'portrait',
//   });

//   constructor() {
//     this.#page = 1;
//     this.#query = '';
//   }

//   getImages(query) {
//     return fetch(
//       `${this.#BASE_URL}?page=${this.#page}&query=${this.#query}&${
//         this.#searchParams
//       }`
//     ).then(response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     });
//   }

//   get page() {
//     return this.#page;
//   }

//   set page(newPage) {
//     this.#page = newPage;
//   }

//   updadePage() {
//     this.#page += 1;
//   }

//   set query(newQuery) {
//     this.#query = newQuery;
//   }
// }
