function getArticleGenerator(articles) {
    let articlesCopy = articles.slice()

    function displayNextArticle() {
        if (articlesCopy.length > 0) {
            let divElement = document.getElementById('content');
            let articleElement = document.createElement('article');
            articleElement.textContent = articlesCopy.shift();
            divElement.appendChild(articleElement);
        }
    }
    return displayNextArticle;
}