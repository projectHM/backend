const db = require('../db/config');
const clients = {};

clients.getByemail= (req, res, next) => {
  db.manyOrNone('SELECT * from clients where email=$1 ORDER BY id;', [req.query.email]) //by email
    .then((data) => {
      console.log(data);
      res.locals.clients = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

clients.create = (req, res, next) => {
  db.one('INSERT INTO clients (name, email, phone) VALUES($1, $2, $3) RETURNING *;',
    [req.body.name, req.body.email, req.body.phone])
    .then((data) => {
      res.locals.clients = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

clients.update = (req, res, next) => {
  db.one('UPDATE clients SET name=$1, email=$2, phone=$3 WHERE id=$4 RETURNING *;',
  [req.body.name, req.body.email, req.body.phone, req.params.id])
    .then((data) => {
      res.locals.client = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

clients.delete = (req, res, next) => {
  db.none('DELETE FROM clients WHERE id=$1', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = clients;