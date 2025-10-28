const express = require('express');
const { getProducts } = require('../services/product');
const router = express.Router();

// 🌐 API Test: Endpoint GET
router.get('/', async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi server' });
    }
});

// Endpoint POST (Yêu cầu xác thực)
router.post('/', (req, res) => {
    if (!req.headers.authorization) {
        // 🔐 Security/API Test: Kiểm tra trả về 401 khi không có token
        return res.status(401).json({ message: 'Không có quyền truy cập' });
    }
    // Logic thêm sản phẩm
    res.status(201).json({ id: Date.now(), ...req.body });
});

module.exports = router;
