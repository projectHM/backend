
const express = require('express');
const router = express.Router();


const products = require('../models/product');
const clients = require('../models/clients');
const requests = require('../models/request');
const reqProduct = require('../models/reqProduct');


const sendClients =  (req, res) => res.json ({ clinets: res.locals.clients});
const sendClient =  (req, res) => res.json ({ clinets: res.locals.clients});
const sendProducts = (req, res) => res.json ({products : res.locals.products});
const sendProduct = (req, res) => res.json ({products : res.locals.products});
const sendrequests =(req, res) => res.json({request: res.locals.requests});
const sendrequest =(req, res) => res.json({request: res.locals.request});
const sendSuccess = (req, res) => res.json({ message: 'success' });

const sendreqProducts = (req, res) => res.json({reqProducts: res.locals.reqProducts});
const sendreqProduct = (req, res) => res.json({reqProduct: res.locals.reqProduct});

router.get('/clients', clients.getAll, sendClient);
router.post('/clients',  clients.create, sendClients);
router.put('/clients/:id', clients.update, sendClient);

router.get('/products', products.getAll, sendProducts);
router.post('/products', products.create, sendProduct);


// router.get('/requests', requests.getByuser, sendrequests); test
router.get('/requests', requests.getByuser, sendrequests);
router.post('/requests', requests.create, sendrequest);
router.put('/requests/:id', requests.update, sendrequest);
router.delete('/requests/:id', requests.delete, sendSuccess);

router.get('/reqProduct', reqProduct.getByReqId, sendreqProducts);
router.post('/reqProduct', reqProduct.create, sendreqProduct);
router.delete('/reqProduct/:id', reqProduct.delete, sendSuccess);

module.exports = router;