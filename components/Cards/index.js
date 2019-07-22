// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articlePromise = axios.get(
  `https://lambda-times-backend.herokuapp.com/articles`
);
articlePromise
  .then(axiosData => {
    console.log(articlePromise);
    console.log(Object.entries(axiosData.data.articles));
    Object.entries(axiosData.data.articles).forEach(articleElement => {
      console.log(articleElement);
      new ArticleCard(articleElement);
    });
    //   new GithubCards(axiosData);
  })
  .catch(err => {
    console.log("error: " + err);
  });

class ArticleCard {
  constructor(article) {
    this.articleArray = article;
    this.articleTitle = article[0];
    this.articleProperties = article[1];
    const cardsContainer = document.querySelector(".cards-container");

    this.articleProperties.forEach(articleData => {
      cardsContainer.appendChild(this.createArticle(articleData));
    });
  }

  createArticle(articleData) {
    const card = document.createElement("div");
    card.classList.add("card");

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = articleData.headline;
    card.appendChild(headline);

    const author = document.createElement("div");
    author.classList.add("author");
    card.appendChild(author);

    const authorImageContainer = document.createElement("div");
    authorImageContainer.classList.add("img-container");
    author.appendChild(authorImageContainer);

    const authorImage = document.createElement("img");
    authorImage.src = articleData.authorPhoto;
    authorImageContainer.appendChild(authorImage);

    const authorsName = document.createElement("span");
    authorsName.textContent = `By ${articleData.authorName}`;
    author.appendChild(authorsName);

    return card;
  }
}
