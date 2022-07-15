'use strict';
// import './css/styles.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import { createGalleryCards } from './createGalleryCards';


// import { pixabayAPI } from './pixabayAPI';
// import { LoadMoreBtn } from './loadMoreBtn';
// import { makeImageMarkup } from './markupService';

// import { getRefs } from './getRefs';
// const refs = getRefs();


// const pixabayAPI = new PixabayAPI();

// const handleSubmit = event => {
//   event.preventDefault();

//   const { query } = event.currentTarget.elements;
//   searchValue = query.value.trim();

//   if (!searchValue) {
//     Notify.failure('enter text!');
//     return;
//   }

//   pixabayAPI.page = 1;
//   refs.list.innerHTML = '';
//   refs.loadMoreBtn.classList.add('is-hidden');

//   pixabayAPI = searchValue;

//   pixabayAPI
//     .getImages()
//     .then(({ total, total_pages: totalPages, results: images }) => {
//       if (images.length === 0) {
//         Notify.failure(`Images by ${searchValue} not found!`);
//         query.value = '';
//         return;
//       }

//       const markup = createGalleryCards(images);
//       refs.list.insertAdjacentHTML('beforeend', markup);

//       if (pixabayAPI.page === 1 && totalPages !== 1) {
//         refs.loadMoreBtn.classList.remove('is-hidden');
//       }
//     });
// };

// const handleClickLoadMore = () => {
//   pixabayAPI.updadePage();

//   pixabayAPI
//     .getImages()
//     .then(({ total, total_pages: totalPages, results: images }) => {
//       if (pixabayAPI.page >= totalPages) {
//         refs.loadMoreBtn.classList.add('is-hidden');
//         Notify.info('The end this collection!');
//       }

//       const markup = createGalleryCards(images);
//       refs.list.insertAdjacentHTML('beforeend', markup);
//     });
// };
// refs.loadMoreBtn.addEventListener('click', handleClickLoadMore);
// refs.form.addEventListener('submit', handleSubmit);
