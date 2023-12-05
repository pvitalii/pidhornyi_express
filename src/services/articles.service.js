class ArticlesService {
  #articles = [
    {
      id: 1,
      name: 'Express - introduction',
      description: 'Express - text',
      type: 'a',
      tags: ['Sales', 'Marketing']
    },
    {
      id: 2,
      name: 'Second article',
      description: 'Nothing',
      type: 'b',
      tags: ['Marketing']
    },
    {
      id: 3,
      name: 'Third article',
      description: 'Server is working',
      type: 'c',
      tags: ['Sales']
    }
  ];

  getArticles() {
    return this.#articles;
  }

  getArticleById(id) {
    return this.#articles.find((article) => article.id === +id);
  }

  addArticle(dto) {
    const newLength = this.#articles.push(
      {
        id: new Date().getTime(),
        ...dto
      }
    );
    return this.#articles[newLength - 1];
  }

  updateArticleTags(id, tags) {
    const articleIndex = this.#articles.findIndex((article) => article.id === +id);
    this.#articles[articleIndex] = {
      ...this.#articles[articleIndex],
      tags
    }
    return this.#articles[articleIndex];
  }
}

export const articlesService = new ArticlesService();
