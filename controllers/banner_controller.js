const NewsAPI = require('newsapi');
require('dotenv').config();

const newsapi = new NewsAPI(process.env.NEWSAPIKEY);

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but should include one
module.exports = (app) => {
  app.get('/api/topHeadlines/:country_cd/:category/', async (req, res) => {
    const data = await newsapi.v2.topHeadlines({
      country: req.params.country_cd,
      category: req.params.category,
      pageSize: 6,
      language: 'en'
    });
    res.json(data.articles);
  });
};
