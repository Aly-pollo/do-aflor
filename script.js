document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('abrirCarrito');
    const closeModalBtn = document.getElementById('cerrarCarrito');
    const modal = document.getElementById('carritoModal');
    const cartItems = document.getElementById('carritoItems');
    const cartTotal = document.getElementById('carritoTotal');
    
    let cart = [];

    // Función para abrir el modal
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        renderCart();
    });

    // Función para cerrar el modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Función para agregar productos al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.getAttribute('data-product');
            const price = parseFloat(event.target.getAttribute('data-price'));

            const existingProduct = cart.find(item => item.product === product);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ product, price, quantity: 1 });
            }

            renderCart();
        });
    });

    // Función para renderizar el carrito en el modal
    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.price} x ${item.quantity}`;
            total += item.price * item.quantity;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Eliminar';
            removeBtn.addEventListener('click', () => {
                removeFromCart(index);
            });

            li.appendChild(removeBtn);
            cartItems.appendChild(li);
        });

        cartTotal.textContent = total.toFixed(2);
    }

    // Función para eliminar productos del carrito
    function removeFromCart(index) {
        cart.splice(index, 1);
        renderCart();
    }
});
