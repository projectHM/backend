const db = require('../db/config');
const reqProduct = {};


//get
reqProduct.create = (req, res, next) => {
    db.one(`INSERT INTO reqProduct(request_id , product_id, , price) 
    VALUES($1, $2 , $3), ($1, $4 , $5),($1, $6 , $7),($1, $8 , $9),($1, $10 , $11), ($1, $12 , $13) `
    ,[req.body.request_id , req.body.processType ,  req.body.processTypePrice ,
        req.body.Ram ,req.body.RamPrice ,  req.body.space , req.body.spacePrice, req.body.Bandwdith, req.body.BandwdithPrice, 
        req.body.router, req.body.routerPrice, req.body.switch, req.body.switchPrice
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