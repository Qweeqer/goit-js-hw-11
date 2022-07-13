import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '28612573-96fa08825695f2b47097a163d';
const PARAM = 'per_page=40&orientation=horizontal&image_type=photo&safesearch=true';
