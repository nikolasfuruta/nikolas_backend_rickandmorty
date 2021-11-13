const personagensRoutes = require('./personagensRoutes.js');

module.exports = (app) => {
    app.use('/personagens', personagensRoutes)
}