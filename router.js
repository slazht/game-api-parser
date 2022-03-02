import express from "express";

import { orders } from './controller.js'

const router = express.Router();

router.post('/v1/order', orders);
 
export default router;