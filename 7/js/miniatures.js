const similarUsersPosts = document.querySelector('.pictures');

const templatePicture = document.querySelector('#picture').content;
const template = templatePicture.querySelector('.picture');

const fragment = document.createDocumentFragment();

const createSimilarPost = (posts) => {
  posts.forEach(({url, likes, comments}) => {
    const userPost = template.cloneNode(true);
    userPost.querySelector('.picture__img').src = url;
    userPost.querySelector('.picture__comments').textContent = comments;
    userPost.querySelector('.picture__likes').textContent = likes;
    fragment.appendChild(userPost);
  });
  similarUsersPosts.appendChild(fragment);
};

export {createSimilarPost};
