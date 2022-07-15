// import './css/styles.css';
import { PixabayAPI } from './js/pixabayAPI';
import { LoadMoreBtn } from './js/loadMoreBtn';
import { makeImageMarkup } from './js/markupService';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getRefs } from './js/getRefs';

const refs = getRefs();
const pixabayAPI = new PixabayAPI();
const loadMoreBtn = new LoadMoreBtn({ rootSelektor: '.load-more', hidden: true });
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 
});
function onSearch(e) {
    e.preventDefault();
    const currentWord = e.currentTarget.elements.searchQuery.value.trim();
    pixabayAPI.searchQuery  = currentWord;
    if (currentWord === '') {
        return Notify.info(`Enter a word to search for images.`);
    }
    loadMoreBtn.show();
    pixabayAPI.resetPage();
    clearImageContainer();
    fetchImages();
}
function clearImageContainer() {
    refs.list.innerHTML = '';
}
function fetchImages() {
    loadMoreBtn.disabled();
    pixabayAPI.fetchImages().then(({data}) => {
        if (data.total === 0) {
            console.log(pixabayAPI.searchQuery);
            Notify.info(`Sorry, there are no images matching your search query: ${pixabayAPI.searchQuery}. Please try again.`);
            loadMoreBtn.hide();
            return;
        }
        appendImagesMarkup(data);
        onPageScrolling()
        lightbox.refresh();
        const { totalHits } = data;
        if (refs.list.children.length === totalHits ) {
            Notify.info(`We're sorry, but you've reached the end of search results.`);
            loadMoreBtn.hide();
        } if (pixabayAPI.page === 2) {
            loadMoreBtn.enable();
            Notify.success(`Hooray! We found ${totalHits} images.`);
        } else {
            console.log(pixabayAPI.page);
            loadMoreBtn.enable();
        }
    }).catch(handleError);
}

function handleError() {
    console.log('Error!');
}
function appendImagesMarkup(data) {
    refs.list.insertAdjacentHTML('beforeend', makeImageMarkup(data));
}
refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', fetchImages);
// -------------------------------------------------------------
// //  З интернета спробувати прокрутка сторінки після запиту та малювання кожної наступної групи зображень//
function onPageScrolling(){ 
    const { height: cardHeight } = refs.list
        .firstElementChild.getBoundingClientRect();
        window.scrollBy({
        top: 0 ,
        behavior: "smooth",
        });
}

