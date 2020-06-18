import "./news-item";
class NewsList extends HTMLElement {
    set news(news) {
        this._news = news;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this.setAttribute("class", "row");
        this._news.forEach((neww) => {
            const newsItemElement = document.createElement("news-item");
            newsItemElement.neww = neww;
            this.appendChild(newsItemElement);
        });
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("news-list", NewsList);