const db = require('../db/config');
const reqProduct = {};

reqProduct.create = (req, res, next) => {
    db.one(`INSERT INTO reqProduct(request_id , product_id, , price) 
    VALUES($1, $2 , $3), ($1, $4 , $5),($1, $6 , $7),($1, $2 , $3),($1, $2 , $3), ($1, $2 , $3) `
    ,[req.body.request_id , req.body.processType ,  req.body.processTypePrice ,
        req.body.Ram ,req.body.RamPrice ,  req.body.space , re
      ]
    [req.body.product_id, req.body.request_id])
    .then((data) => {
      res.locals.request = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = reqProduct;