
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87,  // British pound
};

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs["USD"];
};

const fromDollarToYen = (dollar) => {
    let euro = dollar / oneEuroIs["USD"];
    return euro * oneEuroIs["JPY"];
};

//misma lógica que en fromDollarToYen
const fromYenToPound = (yen) => {
    let euro = yen / oneEuroIs["JPY"];
    return euro * oneEuroIs["GBP"];
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

