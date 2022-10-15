//২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
const getInput = () => {
    const userInput = prompt('Enter your number');
    const inputValue = parseFloat(userInput);
    // console.log(typeof inputValue);
    if (!inputValue) {
        alert('You have to enter a value');
    } else {
        const result = inputValue + 200;
        console.log(result);
    }
}

//৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 
const showLocation = () => {
    const confirmation = confirm('Do you want to show the location of this website');
    if (confirmation) {
        console.log(location.href);
    } else {
        return;
    }
}

