function inputHandler(id, value) {
    const memoryCost = document.getElementById(id);
    memoryCost.innerText = value;

}
function totalPrice() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCharge = parseInt(document.getElementById('delivery-charge').innerText);
    const totalPrice = document.getElementById('total-price');
    const totalnumber = bestPrice + memoryCost + storageCost + deliveryCharge;
    totalPrice.innerText = totalnumber;
}

document.getElementById('memory-1st-button').addEventListener('click', function () {
    inputHandler('memory-cost', 0);
    totalPrice();
});
document.getElementById('memory-2nd-button').addEventListener('click', function () {
    inputHandler('memory-cost', 180);
    totalPrice();
});
document.getElementById('storage-1st-button').addEventListener('click', function () {
    inputHandler('storage-cost', 0);
    totalPrice();
});
document.getElementById('storage-2nd-button').addEventListener('click', function () {
    inputHandler('storage-cost', 100);
    totalPrice();
});
document.getElementById('storage-3rd-button').addEventListener('click', function () {
    inputHandler('storage-cost', 180);
    totalPrice();
});
document.getElementById('delivery-1st-button').addEventListener('click', function () {
    inputHandler('delivery-charge', 0);
    totalPrice();
});
document.getElementById('delivery-2nd-button').addEventListener('click', function () {
    inputHandler('delivery-charge', 20);
    totalPrice();
});