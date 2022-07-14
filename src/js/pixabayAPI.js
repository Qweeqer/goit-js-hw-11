import axios from "axios";
// const searchParams = new URLSearchParams({
//   per_page: 40,
//   API_KEY: '28612573-96fa08825695f2b47097a163d',
// image_type: 'photo',
// safesearch: 'true',
//   orientation: 'portrait',
// });
axios.defaults.baseURL = 'https://pixabay.com/api';
// axios.defaults.BASE_URL = 'https://pixabay.com/api';
const PARAM = 'per_page=40&orientation=horizontal&image_type=photo&safesearch=true';

export class pixabayAPI {
  constructor(){
        this.searchQuery = '';
        this.page = 1;
    }
// BASE_URL = 'https://pixabay.com/api';
// #API_KEY = '28612573-96fa08825695f2b47097a163d';
// #page;
// #query;

//   #searchParams = new URLSearchParams({
//     per_page: 40,
//     client_id: this.#API_KEY,
//     image_type: 'photo',
// safesearch: 'true',
//   orientation: 'portrait',
//   });
//     constructor() {
//     this.#page = 1;
//     this.#query = '';
//     }
    
    async fetchImages () {
        try{
            const response = await axios.get(`/?key=${API_KEY}&q=${this.searchQuery}&page=${this.page}&${PARAM}`);
            this.incrementPage();
            return response;        
        } catch (error) {
            console.log(error);
        }
  }
  incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
    
  //   get page() {
  //   return this.#page;
  // }

  // set page(newPage) {
  //   this.#page = newPage;
  // }

  // updadePage() {
  //   this.#page += 1;
  // }

  // set query(newQuery) {
  //   this.#query = newQuery;
  // }
// -----------------------------------------------------------------    
//     async fetchImages () {
//         try{
//             const response = await axios.get(`/?key=${API_KEY}&q=${this.#query}&page=${this.page}&${this.#searchParams}`);
//             this.incrementPage();
//             return response;        
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     incrementPage() {
//         this.page += 1;
//     }
//     resetPage() {
//         this.page = 1;
//     }
}


// ----------------Чернетка ---------------------------
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