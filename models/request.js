const db = require('../db/config');
const request = {};

request.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM request;')
    .then((data) => {
      res.locals.requests = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

request.create = (req, res, next) => {
  db.one('INSERT INTO request (name,location, client_id ) VALUES($1, $2, $3) RETURNING *;',
    [req.body.name, req.body.location, req.body.client_id])
    .then((data) => {
      res.locals.request = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

request.update = (req, res, next) => {
  db.one('UPDATE request SET date=$1, client_id=$2 location=$3 WHERE id=$4 RETURNING *;',
  [req.body.date, req.body.client_id, req.body.location, req.params.id])
    .then((data) => {
      res.locals.request = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

request.delete = (req, res, next) => {
  db.none('DELETE FROM request WHERE id=$1;', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = request;
