function makeImageMarkup({ hits }) {
  const markup = hits.map(
    ({
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => `<div class="photo-card">
    <a class="gallery-item" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
    <div class="info">
    <p class="info-item">
        <b>Likes: </b></br>${likes}
    </p>
    <p class="info-item">
        <b>Views: </b></br>${views}
    </p>
    <p class="info-item">
        <b>Comments: </b></br>${comments}
    </p>
    <p class="info-item">
        <b>Downloads: </b></br>${downloads}
    </p>
    </div></div>`
  );

  return markup.join('');
}

export { makeImageMarkup };

// -------------------VIDEO---------------------------------------
// function makeImageMarkup({ hits }) {
//   const markup = hits.map(
//     ({
//       pageURL,
//       type,
//       picture_id,
//       videos,
//       tags,
//       likes,
//       views,
//       comments,
//       downloads,
//     }) => `<div class="photo-card video-card">
//     <a class="gallery-item" href="https://i.vimeocdn.com/video/${picture_id}" data-type="${type}">
//     <iframe
//   id="vimeo-player"
//   src="${videos.medium.url}"
//   frameborder="0"
//   muted = false
//   allowfullscreen
//   allow="autoplay; encrypted-media"
// ></iframe></a>
//     <div class="info">
//     <p class="info-item">
//         <b>Likes: </b></br>${likes}
//     </p>
//     <p class="info-item">
//         <b>Views: </b></br>${views}
//     </p>
//     <p class="info-item">
//         <b>Comments: </b></br>${comments}
//     </p>
//     <p class="info-item">
//         <b>Downloads: </b></br>${downloads}
//     </p>
//     </div>
//     </div>`
//   );
//   return markup.join('');
// }

// export { makeImageMarkup };

// -------------------------Чернетка-------------
// --------------------1-----------------
// `<div class="photo-card video-card">
//     <a class="lightBoxVideoLink gallery-item" href="${videos.tiny.url}" data-type="${type}">
//     <img class="video-preview" src="https://i.vimeocdn.com/video/${picture_id}" alt="${tags}"><i></i></a>
//     <div class="info">
//     <p class="info-item">
//         <b>Likes: </b></br>${likes}
//     </p>
//     <p class="info-item">
//         <b>Views: </b></br>${views}
//     </p>
//     <p class="info-item">
//         <b>Comments: </b></br>${comments}
//     </p>
//     <p class="info-item">
//         <b>Downloads: </b></br>${downloads}
//     </p>
//     </div>
//     </div>`
// ------------------------------------

// {
/* <div uk-lightbox>
  <a class="uk-button" href="video.mp4" data-poster="image.jpg"></a>
  <a class="uk-button" href="https://www.youtube.com/watch?v=WhWc3b3KhnY"></a>
  <a class="uk-button" href="https://vimeo.com/1084537"></a>
  <a class="uk-button" href="https://www.google.com/maps"></a>
</div>; */
// }

/* <a class="gallery-item lightBoxVideoLink" href="${videos.tiny.url}" data-type="${type}" data-poster="https://i.vimeocdn.com/video/${picture_id}_640x360.jpg">
    // <img class="video-preview" src="https://i.vimeocdn.com/video/${picture_id}" alt="${tags}"></a> */

// {/* <a href="/videos/woman-flowers-plants-field-garden-58142/">
// <div class="media" data-mp4="//player.vimeo.com/external/487508532.sd.mp4?s=dfb8c469317bd740e8beec7b0b0db0675cef880e&amp;profile_id=164">
// <img class="video-preview" src="https://i.vimeocdn.com/video/1008844994-6476435f2dcb0ec69f4dd8fa355fb3eb11d86420d0b985ebf6b26e7916172ba7-d_640x360.jpg" alt="Woman, Flowers, Plants, Field, Garden">
// <i></i>
// </div>
// </a> */}

// <div class="media" data-mp4="${videos.tiny.url}">
// <iframe
//   id="vimeo-player"
//   src="${videos.tiny.url}"
//   frameborder="0"
//   muted=false
//   allowfullscreen
//   allow="autoplay; encrypted-media"
// ></iframe>
