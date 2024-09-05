document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('productos');

    const products = [
        {
            name: "Empanada tradicional",
            description: "Carne picada, cebolla, aceituna y huevo.",
            price: 2500,
            image: "assets/empanada 1.jpeg"
        },
        {
            name: "Empanada de queso",
            description: "Queso de vacas felices del sur de Chile.",
            price: 3000,
            image: "assets/empanada 2.jpeg"
        },
        {
            name: "Empanada internacional",
            description: "Napolitana: Queso, albahaca, oregano, salame y salsa de tomate.",
            price: 2999,
            image: "assets/empanada 3.jpeg"
        },
        {
            name: "Empanada de mariscos",
            description: "Queso curado, cebolla caramelizada, camarones del sur de Chile extraídos por pescadores artesanales.",
            price: 3500,
            image: "assets/empanada 4.jpeg"
        },
        {
            name: "Alfajores de maicena",
            description: "Relleno de manjar o crema y cubiertos de azúcar flor o chocolate. Caja contiene 12 unidades.",
            price: 7500,
            image: "assets/dulces 1.jpeg"
        },
        {
            name: "Berlines",
            description: "Rellenos de Manjar, Crema pastelera o Crema especial de la casa. Caja contiene 6 unidades.",
            price: 6000,
            image: "assets/dulces 2.jpeg"
        },
        {
            name: "Galletitas delicias",
            description: "Galletitas especiales para cocktel y ocasiones especiales. Caja contiene 24 unidades.",
            price: 8999,
            image: "assets/dulces 3.jpeg"
        },
        {
            name: "Bombones y Malvas",
            description: "Dulces variados rellenos y blandos como malvaviscos de anís. Caja contiene 12 unidades.",
            price: 4500,
            image: "assets/dulces 4.jpeg"
        }
    ];

    // Renderizar productos dinámicamente
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('producto-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="precio">$${product.price.toLocaleString()}</p>
            <button class="add-to-cart" data-product="${product.name}" data-price="${product.price}">Comprar</button>
        `;

        productContainer.appendChild(productCard);
    });

    const openCartBtn = document.getElementById('abrirCarrito');
    const closeCartBtn = document.getElementById('cerrarCarrito');
    const cartSidebar = document.getElementById('carritoSidebar');
    const cartItems = document.getElementById('carritoItems');
    const cartTotal = document.getElementById('carritoTotal');
    const cartDetailBtn = document.getElementById('verCarritoDetalle');
    const checkoutBtn = document.getElementById('finalizarCompra');
    const overlay = document.getElementById('overlay');
    const carritoCantidad = document.getElementById('carritoCantidad');


    
    let cart = [];


    openCartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        document.body.classList.add('overlay-active');
        console.log('carrito abierto');
    });


    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        document.body.classList.remove('overlay-active');
        console.log('carrito cerrado');
    });

    overlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        document.body.classList.remove('overlay-active');
        console.log('carrito cerrado al hacer clic fuera');
    });

    function updateItemCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        carritoCantidad.textContent = totalItems;
    }

    // añade productos al carrito 
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
            updateItemCount();
        });
    });

    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.innerHTML = `
                <div>
                    <span class="item-title">${item.product}</span> 
                    <span class="item-price">$${item.price} x ${item.quantity}</span>  
                </div>
                <i class="fas fa-trash-alt remove-btn" data-index="${index}"></i>
            `;
            total += item.price * item.quantity;
            cartItems.appendChild(li);
        });

        // Agregar event listeners a los íconos de eliminar
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                removeFromCart(index);
            });
        });

        cartTotal.textContent = total.toFixed(2);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        renderCart();
        updateItemCount();
    }

    cartDetailBtn.addEventListener('click', () => {
        alert('Mostrando detalles del carrito.');
    });

    checkoutBtn.addEventListener('click', () => {
        alert('Finalizando compra.');
    });
});
