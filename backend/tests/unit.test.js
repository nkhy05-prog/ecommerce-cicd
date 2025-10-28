const { calculateTaxedPrice } = require('../src/services/product');

// 🧪 Unit Test cho logic riêng lẻ
describe('Product Utils: calculateTaxedPrice', () => {
    test('should return 110 for a base price of 100', () => {
        expect(calculateTaxedPrice(100)).toBe(110);
    });

    test('should return 0 for negative input', () => {
        expect(calculateTaxedPrice(-50)).toBe(0);
    });
});
