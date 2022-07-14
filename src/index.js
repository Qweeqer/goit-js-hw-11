import './css/styles.css';
import { FetchImagesService } from './js/fetchImagesService';
import { LoadMoreBtn } from './js/loadMoreBtn';
import { makeImageMarkup } from './js/markupService';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getRefs } from './js/getRefs';
const refs = getRefs();
