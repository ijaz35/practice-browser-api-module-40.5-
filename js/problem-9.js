//৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 
//১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে।
document.getElementById('save-button').addEventListener('click', () => {
    const productNameField = document.getElementById('product-name');
    const productName = productNameField.value;
    const productPriceField = document.getElementById('product-price');
    const productPrice = parseFloat(productPriceField.value);
    localStorage.setItem(productName, productPrice);
    productNameField.value = '';
    productPriceField.value = '';

    const productsContainer = document.getElementById('products');
    const product = document.createElement('li');
    product.innerHTML = `
    ${productName}: ${productPrice};
    `;
    productsContainer.appendChild(product);

});
const getLocalStorage = () => {
    const localStorageInfo = localStorage;

    for (const prop in localStorageInfo) {
        const productsContainer = document.getElementById('products');
        const product = document.createElement('li');
        if (typeof prop === 'string') {
            product.innerHTML = `
            ${prop}: ${localStorageInfo[prop]};
            `;
            productsContainer.appendChild(product);
        }

    }
}
window.onload = getLocalStorage;

