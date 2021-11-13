const personagensRoutes = require('./personagensRoutes');

module.exports = (app) => {
    app.use('/personagens', personagensRoutes)
}