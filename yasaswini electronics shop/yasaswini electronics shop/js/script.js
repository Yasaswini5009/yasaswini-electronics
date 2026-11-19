/* =========================================
   YASASWINI ELECTRONICS
   SHOPPING CART
========================================= */


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productName, productPrice, productImage) {

    let cart =
        JSON.parse(
            localStorage.getItem("yasaswiniCart")
        ) || [];


    let existingProduct =
        cart.find(function(product) {

            return product.name === productName;

        });


    if (existingProduct) {

        existingProduct.quantity++;

    }

    else {

        cart.push({

            name: productName,

            price: productPrice,

            image: productImage,

            quantity: 1

        });

    }


    localStorage.setItem(
        "yasaswiniCart",
        JSON.stringify(cart)
    );


    alert(
        productName +
        " added to cart successfully!"
    );


    window.location.href = "cart.html";

}


/* =========================================
   DISPLAY CART
========================================= */

function displayCart() {

    let cart =
        JSON.parse(
            localStorage.getItem("yasaswiniCart")
        ) || [];


    let cartItems =
        document.getElementById("cart-items");


    let cartTotal =
        document.getElementById("cart-total");


    if (!cartItems || !cartTotal) {

        return;

    }


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <h2>Your Cart is Empty</h2>

                <p>
                    Please add products from our
                    Products page.
                </p>

                <a href="products.html"
                   class="btn">

                    Continue Shopping

                </a>

            </div>

        `;

        cartTotal.innerText = "0";

        return;

    }


    let total = 0;


    cart.forEach(function(product, index) {

        let subtotal =
            product.price *
            product.quantity;


        total += subtotal;


        let cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-product">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="cart-product-image"
                >

                <div>

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        Price:
                        ₹${product.price.toLocaleString("en-IN")}
                    </p>

                    <p>
                        Quantity:
                        ${product.quantity}
                    </p>

                    <p>
                        Subtotal:
                        ₹${subtotal.toLocaleString("en-IN")}
                    </p>

                </div>

            </div>


            <div class="cart-buttons">

                <button
                    onclick="increaseQuantity(${index})">
                    +
                </button>


                <button
                    onclick="decreaseQuantity(${index})">
                    -
                </button>


                <button
                    onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.innerText =
        total.toLocaleString("en-IN");

}


/* =========================================
   INCREASE QUANTITY
========================================= */

function increaseQuantity(index) {

    let cart =
        JSON.parse(
            localStorage.getItem("yasaswiniCart")
        ) || [];


    cart[index].quantity++;


    localStorage.setItem(
        "yasaswiniCart",
        JSON.stringify(cart)
    );


    displayCart();

}


/* =========================================
   DECREASE QUANTITY
========================================= */

function decreaseQuantity(index) {

    let cart =
        JSON.parse(
            localStorage.getItem("yasaswiniCart")
        ) || [];


    cart[index].quantity--;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    localStorage.setItem(
        "yasaswiniCart",
        JSON.stringify(cart)
    );


    displayCart();

}


/* =========================================
   REMOVE PRODUCT
========================================= */

function removeFromCart(index) {

    let cart =
        JSON.parse(
            localStorage.getItem("yasaswiniCart")
        ) || [];


    cart.splice(index, 1);


    localStorage.setItem(
        "yasaswiniCart",
        JSON.stringify(cart)
    );


    displayCart();

}


/* =========================================
   CHECKOUT
========================================= */

function checkout() {

    let cart =
        JSON.parse(
            localStorage.getItem("yasaswiniCart")
        ) || [];


    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    alert(
        "Thank you for shopping with Yasaswini Electronics!"
    );


    localStorage.removeItem(
        "yasaswiniCart"
    );


    displayCart();

}


/* =========================================
   CONTACT FORM
========================================= */

function submitForm() {

    let name =
        document.getElementById("name").value;


    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted successfully."
    );


    document.querySelector("form").reset();


    return false;

}


/* =========================================
   LOAD CART
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayCart();

    }
);