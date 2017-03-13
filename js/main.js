var blueShirt = document.getElementById('shoppingCartBlue');
var pinkShirt = document.getElementById('shoppingCartPink');
var orangeShirt = document.getElementById('shoppingCartOrange');

var subtotal = 0; 
var isBlueInCart=false;
var isPinkInCart = false;
var isOrangeInCart = false;
var subtotalbox = document.getElementById('subtotal');
var totalbox = document.getElementById('total');

function calctotal(subtotal){
	return subtotal * 1.065;
}

blueShirt.addEventListener('click', function(){
	if(isBlueInCart === false)
	{
		subtotal = subtotal + 29;
		total = calctotal(subtotal);
		isBlueInCart = true;
	}
	else
	{
		subtotal = subtotal - 29;
		total = calctotal(subtotal);
		isBlueInCart = false;
	}

	subtotalbox.innerHTML=subtotal;
	totalbox.innerHTML=total.toFixed(2);
})


pinkShirt.addEventListener('click', function(){
	if(isPinkInCart === false)
	{
		subtotal = subtotal + 19;
		total = calctotal(subtotal);
		isPinkInCart = true;
	}
	else
	{
		subtotal = subtotal - 19;
		total = calctotal(subtotal);
		isPinkInCart = false;
	}

	subtotalbox.innerHTML=subtotal;
	totalbox.innerHTML=total.toFixed(2);
})

orangeShirt.addEventListener('click', function(){
	if(isOrangeInCart === false)
	{
		subtotal = subtotal + 39;
		total = calctotal(subtotal);
		isOrangeInCart = true;
	}
	else
	{
		subtotal = subtotal - 39;
		total = calctotal(subtotal);
		isOrangeInCart = false;
	}

	subtotalbox.innerHTML=subtotal;
	totalbox.innerHTML=total.toFixed(2);
})



