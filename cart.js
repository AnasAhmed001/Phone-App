console.log('cart items');

const cartItems = JSON.parse(localStorage.getItem('cartItems'));


const div = document.querySelector('div');

function renderItems (){
    if(cartItems != null && cartItems.length > 0){
        for(let i = 0; i < cartItems.length; i++){
            console.log(cartItems[i]);
            div.innerHTML += `
            <div class="border border-light rounded m-5 p-3">
            <h1>Model: ${cartItems[i].brand + ' ' + cartItems[i].model}</h1>
            <h1>Price: ${cartItems[i].price}</h1>
            </div>
            `
        }
    }else{
        console.log('cart item empty ha maalik')
        div.innerHTML = `
        <h3 class="text-center">No Item Found...</h3>
        `
    }
}

renderItems()



