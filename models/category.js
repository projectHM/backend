const db = require('../db/config');
const category = {};


category.getAll = (req, res, next) => {
    db.manyOrNone('SELECT * FROM category;')
      .then((data) => {
        res.locals.category = data;
        next();
      })
      .catch((error) => {
        console.log(error)
        next();
      })
}

module.exports = category;