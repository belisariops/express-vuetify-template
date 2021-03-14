const bodyParser = require('body-parser');
const middleware = require('./middleware');
const api = require('./api');

module.exports = app => {
  app.use(bodyParser.json());
    // Webpack for vue or dist loading
  middleware(app);
  app.use('/api', api)
}
