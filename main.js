// task 1

// solution structure
function reverseString(str) {
    // write your code here
    var reverseString = str.split("").reverse().join("");
    return reverseString;

}

console.log(reverseString("CAT"));







//task 2

// 

// solution structure
function notGate(str) {
    // write your code here
    for (var i = 0; i < str.length; i++) {

        if (str[i] === "0") {
            return str.replace(str[i], "1")
        }
        if (str[i] === "1") {
            return str.replace(str[i], "0");
        }
    }


}

console.log(notGate("01010x"));


// task 3


var products = [
    { type: 'A', price: 5, name: 'type A 1' },
    { type: 'B', price: 7.5, name: 'type B 1' },
    { type: 'C', price: 10, name: 'type C 1' },
    { type: 'A', price: 15, name: 'type A 2' },
    { type: 'A', price: 2, name: 'type A 3' },
];
// solution structure
function getTotalPrice(products, type) {
    // write your code here



    let pricesSameType =
        products
        .filter(product => product.type === type)
        .map(product => product.price)
        .reduce((total, price) => total + price, 0);
    return pricesSameType;







}
getTotalPrice(products, "A")
getTotalPrice(products, "B")
getTotalPrice(products, "C")