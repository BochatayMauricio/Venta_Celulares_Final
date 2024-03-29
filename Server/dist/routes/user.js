"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const customers_1 = require("../controllers/customers");
const router = (0, express_1.Router)();
router.post('/login', user_1.loginUser);
router.get('/login/:email', customers_1.getCustomer);
router.post('/', user_1.newUser);
router.post('/user_token', user_1.getUser);
exports.default = router;
