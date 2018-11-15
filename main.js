//for changing image on product details page
function changeItem(selectId, imageId) {
     var dropdown = document.getElementById(selectId);
     var image = document.getElementById(imageId);
     image.src = dropdown.options[dropdown.selectedIndex].value;
}

//for changing price on product details page
function changePrice(qtySelectId) {
    var dropdownQty = document.getElementById(qtySelectId);
    var totalPrice = dropdownQty.options[dropdownQty.selectedIndex].text * document.getElementById("price").getAttribute("data-price");
    document.getElementById("price").innerHTML="$"+totalPrice;
}

//organizing data to store and get in localStorage
function addItem(type, colorSelectId, fillSelectId, qtySelectId, priceId) {
    var cartList = loadCartFromStorage();
    var dropdownColor = document.getElementById(colorSelectId);
    var dropdownFill = document.getElementById(fillSelectId);
    var dropdownQty = document.getElementById(qtySelectId);
    var cartItem = {
        "type": type,
        "img": dropdownColor.options[dropdownColor.selectedIndex].value,
        "color": dropdownColor.options[dropdownColor.selectedIndex].text,
        "fill": dropdownFill.options[dropdownFill.selectedIndex].value,
        "qty": dropdownQty.options[dropdownQty.selectedIndex].text,
        "price": document.getElementById("price").innerHTML,
    };
    cartList.push(cartItem);
    localStorage.setItem('items', JSON.stringify(cartList));
    console.log(localStorage.getItem('items'));
};

function updateCartCount(cartCountId) {
    var currentCart= loadCartFromStorage();
    var count = 0;
    for (var i = 0; i < currentCart.length; i++) {
        count += parseInt(currentCart[i].qty);
    }
    document.getElementById(cartCountId).innerHTML=count;
}

//pulls cart objects out to render on cart page
function loadCartFromStorage() {
  var cartStorage = localStorage.getItem('items');
  console.log("cart storage:", cartStorage);
  if (cartStorage) {
    return JSON.parse(cartStorage); // list of objects
  } else {
    return [];
  }
}

//renders cart page with all the items and gives subtotal
function openCart() {
   var currentCart = loadCartFromStorage();
   console.log("current cart:", currentCart);
   var subtotal = 0;
   for (var i = 0; i < currentCart.length; i++) {
       addItemToCartPage(currentCart[i], i);
       subtotal += parseInt(currentCart[i].price.replace("$", ""));
   }
   document.getElementById("subtotal").innerHTML='Subtotal $'+subtotal;
}

//injects html as a div
function addItemToCartPage(item, index) {
    console.log("adding item:", item);
    var template = `
    <div class="cart-item">
        <div class="cart-image">
            <img src="${item.img}">
        </div>
        <div class="cart-description">
          <p>${item.type}, ${item.color}<br>
          Fill: ${item.fill}</p>
        </div>
        <div class="cart-qty">${item.qty}</div>
        <div class="cart-price">${item.price}</div>
        <button onclick="removeFromCart(${index})">X</button>
    </div>
    `;
    var holder = document.getElementById('cartItemHolder');
    if (holder) {
        var element = document.createElement('div');
        element.innerHTML = template;
        holder.appendChild(element);
    }
}

//delete function
function removeFromCart(index) {
    // loads the cart, updates it, and then reloads the page.
    var currentCart = loadCartFromStorage();
    currentCart.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(currentCart));
    location.reload();
}

//pop-up code from here: https://html-online.com/articles/simple-popup-box/
function setupAddedToCartPopup() {
   $(".trigger_popup").click(function(){
      $('.hover_bkgr').show();
   });
   $('.hover_bkgr').click(function(){
       $('.hover_bkgr').hide();
   });
   $('.popupCloseButton').click(function(){
       $('.hover_bkgr').hide();
   });
}