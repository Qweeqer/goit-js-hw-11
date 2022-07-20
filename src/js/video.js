// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// const onPlay = function (time) {
//   localStorage.setItem('videoplayer-current-time', `${time.seconds}`);
//   console.log(localStorage);
// };
// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// player.on('timeupdate', throttle(onPlay, 1000));

// const videoPlayerTime = localStorage.getItem('videoplayer-current-time');
// if (videoPlayerTime) {
//   player.setCurrentTime(videoPlayerTime);
// }
// return;
