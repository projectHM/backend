const db = require('../db/config');
const request = {};

request.getByuser = (req, res, next) => {
  db.manyOrNone('SELECT * FROM request where client_email=$1;',[req.query.client_email])
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
  db.one('INSERT INTO request (date,location, total, client_id, client_email ) VALUES($1, $2, $3, $4,$5) RETURNING *;',
    [req.body.date, req.body.location, req.body.total,req.body.client_id, req.body.client_email])
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
  db.one('UPDATE request SET date=$1, location=$2, total=$3, client_id=$4, client_email=$5 WHERE id=$5 RETURNING *;',
  [req.body.date,  req.body.location, req.body.total,req.body.client_id, req.body.client_email, req.params.id])
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
