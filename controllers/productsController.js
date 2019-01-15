
const express = require('express');
const router = express.Router();

const product = require('../models/product');
const clients = require('../models/clients');
const request = require('../models/request');
const reqProduct = require('../models/reqProduct');



const sendProducts = (req, res) => res.json({products : res.locals.products, clinets: res.locals.clients ,  request: res.locals.requests});
const sendProduct = (req, res) => res.json({products : res.locals.products, clinets: res.locals.clients ,  request: res.locals.request});
const sendSuccess = (req, res) => res.json({ message: 'success' });

router.get('/products', product.getAll, sendProducts );

// router.post('/', product.create, clients.create, sendProduct);
// router.get('/track',  clients.find, request.find,  sendProducts ); // find a clinet by email then find a request by client id 


router.put('/', clients.update, request.update, sendProduct);
router.delete('/',  request.delete, sendSuccess); /// futuer work becuase I'm lazy 


// move this to request controller 
// router.post('/new',  clients.create, reproductReqquest.create, productReq.create,  sendProduct);
// router.get('/new', clients.create ,sendProducts ); // old new 

module.exports = router;