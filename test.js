
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("Un Euro debería ser 1.07 Dólares", () => {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745); // 3.5 * 1.07

});

test("1.07 Dólares deberían ser 156.5 Yenes", () => {
    const yen = fromDollarToYen(1.07);
    // Si 1.07 USD es 1 Euro, y 1 Euro son 156.5 JPY...
    expect(yen).toBeCloseTo(156.5);
});

test("156.5 Yenes deberían ser 0.87 Libras", () => {
    const pounds = fromYenToPound(156.5);
    // Si 156.5 JPY es 1 Euro, y 1 Euro son 0.87 GBP...
    expect(pounds).toBeCloseTo(0.87);
});