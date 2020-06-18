// import css from "bootstrap/dist/css/bootstrap.min.css";

class NewsItem extends HTMLElement {
  set neww(neww) {
    this._neww = neww;
    this.render();
  }

  render() {
    this.setAttribute("class", "col-md-4 col-sm-12");
    this.innerHTML = `
      <div style="margin-top: 12px;">
        <div class="zoom">
          <img src="${this._neww.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <span>${this._neww.author}</span>
              <h5>${this._neww.title}</h5>
              <p>${this._neww.description}</p>
              <a class="btn btn-info" href="${this._neww.url}" role="button" target="_blank">Read More ...</a>
            </div>
        </div>
      </div>`;
  }
}

customElements.define("news-item", NewsItem);