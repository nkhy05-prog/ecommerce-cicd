// Dữ liệu giả định (thay thế cho DB thật)
const MOCK_PRODUCTS = [{ id: 1, name: 'Laptop', price: 1000, stock: 5 }];

/**
 * Unit Test: Hàm tính giá sau thuế (10% VAT)
 * @param {number} price
 * @returns {number}
 */
function calculateTaxedPrice(price) {
    if (typeof price !== 'number' || price < 0) return 0;
    return Math.round(price * 1.10); // Thêm 10% thuế và làm tròn
}

/**
 * 🔗 Integration Test: Hàm lấy sản phẩm (giả lập tương tác DB)
 * @returns {Array}
 */
async function getProducts() {
    // Giả lập độ trễ DB
    await new Promise(resolve => setTimeout(resolve, 50));
    return MOCK_PRODUCTS.filter(p => p.stock > 0);
}

module.exports = {
    calculateTaxedPrice,
    getProducts,
    MOCK_PRODUCTS // Xuất ra để dễ dàng testing
};
