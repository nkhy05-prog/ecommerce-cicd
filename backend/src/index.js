// backend/src/index.js

const express = require('express'); // 🛑 Kiểm tra xem express đã được cài đặt chưa
const productRouter = require('./routers/product'); // fixed path to routers/product.js

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

app.use('/api/v1/products', productRouter);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', service: 'E-commerce API' });
});

// Đây là phần quan trọng nhất để giữ server chạy:
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;