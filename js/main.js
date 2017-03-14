// Var for Shopping cart button



// var subtotal = 0; 
// var isBlueInCart=false;
// var isPinkInCart = false;
// var isOrangeInCart = false;


// function calctotal(subtotal){
//   return subtotal * 1.065;
// }

// blueShirt.addEventListener('click', function(){
//   if(isBlueInCart === false)
//   {
//     subtotal = subtotal + 29;
//     total = calctotal(subtotal);
//     isBlueInCart = true;
//   }
//   else
//   {
//     subtotal = subtotal - 29;
//     total = calctotal(subtotal);
//     isBlueInCart = false;
//   }

//   subtotalbox.innerHTML=subtotal;
//   totalbox.innerHTML=total.toFixed(2);
// })


// pinkShirt.addEventListener('click', function(){
//   if(isPinkInCart === false)
//   {
//     subtotal = subtotal + 19;
//     total = calctotal(subtotal);
//     isPinkInCart = true;
//   }
//   else
//   {
//     subtotal = subtotal - 19;
//     total = calctotal(subtotal);
//     isPinkInCart = false;
//   }

//   subtotalbox.innerHTML=subtotal;
//   totalbox.innerHTML=total.toFixed(2);
// })

// orangeShirt.addEventListener('click', function(){
//   if(isOrangeInCart === false)
//   {
//     subtotal = subtotal + 39;
//     total = calctotal(subtotal);
//     isOrangeInCart = true;
//   }
//   else
//   {
//     subtotal = subtotal - 39;
//     total = calctotal(subtotal);
//     isOrangeInCart = false;
//   }

//   subtotalbox.innerHTML=subtotal;
//   totalbox.innerHTML=total.toFixed(2);
// })

// 


var blueShirt = document.getElementById('shoppingCartBlue');
var pinkShirt = document.getElementById('shoppingCartPink');
var orangeShirt = document.getElementById('shoppingCartOrange');

var subtotalbox = document.getElementById('subtotal');
var totalbox = document.getElementById('total');
var htmlbox = document.getElementById('itemsincart');

var prices = document.querySelector('.subtotal')

var blueShirtCart = {
  name: 'Save my Trees',
  price: 29,
}
var orangeShirtCart = {
  name: 'Nature Lover',
  price: 39,
}
var pinkShirtCart = {
  name: 'Homeless',
  price: 19,
}

// the function (shirt) is being replaced by the variables we created when the button is 'clicked'
// function(shirt) becomes function(orangeShirtCart) when orangeShirtCart is pushed and put into the empty array
// then the event listener will updateCart() and run the function with the new variable that is being pushed into the array

function updateCart(){
  var subtotal = 0;
  var html = ""

  whatsInMyCart.forEach(function(shirt){
    subtotal+=shirt.price;

    // This adds the clicked items into the HTML

    html+=`

    <div class= "inmycart"><h5>${shirt.name} is <span>$${shirt.price}</span></h5></div>
    `
  })


  subtotalbox.innerHTML=subtotal;
  var total = subtotal*1.065;

  totalbox.innerHTML=total.toFixed(2);

  htmlbox.innerHTML = html;
}


var whatsInMyCart = [];

blueShirt.addEventListener('click', function(){
  whatsInMyCart.push(blueShirtCart);
  updateCart();
})

pinkShirt.addEventListener('click', function(){
  whatsInMyCart.push(pinkShirtCart);
  updateCart();
})

orangeShirt.addEventListener('click', function(){
  whatsInMyCart.push(orangeShirtCart);
  updateCart();
})

// Add event listener for the cart button

showButton.addEventListener('click', function(){
  if(isCartShowing === flase)
    prices.style.display = 'block'

}
  )
}



