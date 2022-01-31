import express from 'express';
import controller from '../controllers/products';

const router = express.Router();

router.post('/create/product', controller.createProducts);
router.get('/get/products', controller.getAllProducts);
router.get('/get/product/:id', controller.getProduct);
router.get('/get/qtdProducts', controller.getQtdProducts);
router.get('/get/getMaxStock', controller.getMaxStock);
router.get('/get/getMinStock', controller.getMinStock);
router.get('/get/getNoStock', controller.getNoStock);
router.patch('/update/product/:id', controller.updateProduct);
router.delete('/delete/product/:id', controller.deleteProduct);

export = router;