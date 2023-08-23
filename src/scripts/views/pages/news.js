import "../../../components/news/news";
import "../../../components/news/cards-news";

const News = {
  async render() {
    return `
        <news-onefish></news-onefish>
        <cards-news></cards-news>
    `;
  },

  async afterRender() {},
};

export default News;
