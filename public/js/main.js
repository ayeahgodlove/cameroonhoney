// contains js for the application funtionality

// DOM selector
// querySelector
const _$ = (el) => {
    return document.querySelector(el);
}

// querySelectorALl
const _$all = (el) => {
    return document.querySelectorAll(el);
}

// define global variables
const cartBtn = _$(".cart-btn");
const closeCartBtn = _$(".close-cart");
const clearCart = _$("clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
let cart = [];


// product class
class products {

    //asynchronous function
    async getProducts() {
        
    }
}