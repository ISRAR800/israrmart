// Product Data
const products = [
    { name: "Organic Apples", price: 3.5, image: "https://i.pinimg.com/1200x/95/59/60/955960841293985ca85e20d08ac6ef83.jpg", desc: "Crisp, sweet, and pesticide-free apples." },
    { name: "Bananas", price: 1.5, image: "https://i.pinimg.com/736x/81/6e/04/816e04320c5a1f4ddb2ddfa3895d8cf1.jpg", desc: "Fresh and ripe bananas, perfect for smoothies." },
    { name: "Tomatoes", price: 2.0, image: "https://i.pinimg.com/736x/b8/ca/6a/b8ca6ad5fcb00c5379592a95f9fbf969.jpg", desc: "Juicy, farm-fresh tomatoes for your salads." },
    { name: "Milk (1L)", price: 2.5, image: "https://i.pinimg.com/1200x/29/48/da/2948da4f33f4966144b5f0fa1d842168.jpg", desc: "Fresh farm milk, pasteurized and chilled." },
    { name: "Bread Loaf", price: 1.8, image: "https://i.pinimg.com/736x/41/87/e8/4187e8d14ec6dc84dabb5ab8f3729e3d.jpg", desc: "Soft white sandwich bread, freshly baked." },
    { name: "Carrots", price: 1.2, image: "https://i.pinimg.com/736x/e7/e5/e7/e7e5e72dd497b91d75a69685bf325492.jpg", desc: "Crunchy and sweet organic carrots." }
    
];

// DOM Elements
const productList = document.getElementById("product-list");
const cart = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const cartToggle = document.getElementById("cart-toggle");
const closeCart = document.getElementById("close-cart");

let cartData = [];

// Render Products
function renderProducts() {
    productList.innerHTML = products.map(p => `
    <div class="product-card" data-name="${p.name}" data-price="${p.price}">
      <img src="${p.image}" alt="${p.name}" class="product-image" />
      <h3>${p.name}</h3>
      <p class="product-description">${p.desc}</p>
      <p>$${p.price.toFixed(2)}</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `).join('');

    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", addToCart);
    });
}

// Add to Cart
function addToCart(e) {
    const card = e.target.closest(".product-card");
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);

    const existing = cartData.find(item => item.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cartData.push({ name, price, qty: 1 });
    }
    updateCart();
}

// Update Cart
function updateCart() {
    cartItems.innerHTML = cartData.map(item => `
    <li>
      ${item.name} x${item.qty} 
      <span>$${(item.price * item.qty).toFixed(2)}</span>
    </li>
  `).join('');

    const total = cartData.reduce((sum, i) => sum + i.price * i.qty, 0);
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cartData.reduce((sum, i) => sum + i.qty, 0);
}

// Toggle Cart
cartToggle.addEventListener("click", (e) => {
    e.preventDefault();
    cart.classList.toggle("hidden");
});

closeCart.addEventListener("click", () => cart.classList.add("hidden"));

// Mobile Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  });
});

// Monthly Deals Section
const monthlyDeals = [
    {
        id: 1,
        name: "Organic Avocado Pack",
        description: "Fresh organic avocados, perfect for healthy meals",
        originalPrice: 12.99,
        discountedPrice: 9.99,
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        timeLeft: "2 days"
    },
    {
        id: 2,
        name: "Premium Honey Jar",
        description: "Pure natural honey from mountain flowers",
        originalPrice: 15.99,
        discountedPrice: 11.99,
        discount: "30% OFF",
        image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        timeLeft: "3 days"
    },
    {
        id: 3,
        name: "Fresh Berry Mix",
        description: "Assorted fresh berries, locally sourced",
        originalPrice: 9.99,
        discountedPrice: 6.99,
        discount: "35% OFF",
        image: "https://images.unsplash.com/photo-1467825487722-2a7c4cd84ddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        timeLeft: "1 day"
    },
    {
        id: 4,
        name: "Organic Olive Oil",
        description: "Extra virgin olive oil from Mediterranean olives",
        originalPrice: 18.99,
        discountedPrice: 14.99,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        timeLeft: "4 days"
    },
    {
        id: 5,
        name: "Artisan Cheese Selection",
        description: "Premium selection of handcrafted cheeses",
        originalPrice: 24.99,
        discountedPrice: 19.99,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        timeLeft: "2 days"
    },
    {
        id: 6,
        name: "Fresh Bread Basket",
        description: "Assortment of freshly baked artisan breads",
        originalPrice: 14.99,
        discountedPrice: 10.99,
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        timeLeft: "1 day"
    },
    {
        id: 7,
        name: "Organic Vegetable Box",
        description: "Seasonal organic vegetables from local farms",
        originalPrice: 19.99,
        discountedPrice: 15.99,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        timeLeft: "3 days"
    },
    {
        id: 8,
        name: "Premium Coffee Beans",
        description: "Specialty coffee beans, freshly roasted",
        originalPrice: 16.99,
        discountedPrice: 12.99,
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        timeLeft: "2 days"
    }
];

// Function to render monthly deals
function renderMonthlyDeals() {
    const dealsContainer = document.querySelector('.deals-container');
    if (!dealsContainer) return;
    
    dealsContainer.innerHTML = '';
    
    monthlyDeals.forEach(deal => {
        const dealCard = document.createElement('div');
        dealCard.classList.add('deal-card');
        
        dealCard.innerHTML = `
            <div class="discount-badge">${deal.discount}</div>
            <div class="deal-image">
                <img src="${deal.image}" alt="${deal.name}">
            </div>
            <div class="deal-content">
                <h3>${deal.name}</h3>
                <div class="deal-price">
                    <span class="original-price">$${deal.originalPrice}</span>
                    <span class="discounted-price">$${deal.discountedPrice}</span>
                </div>
                <p class="deal-description">${deal.description}</p>
                <div class="deal-timer">
                    <span class="timer-icon">⏱️</span>
                    <span>Ends in: ${deal.timeLeft}</span>
                </div>
                <button class="add-to-cart-btn" data-id="${deal.id}">Add to Cart</button>
            </div>
        `;
        
        dealsContainer.appendChild(dealCard);
    });
    
    // Add event listeners to the Add to Cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const dealId = parseInt(this.getAttribute('data-id'));
            const selectedDeal = monthlyDeals.find(deal => deal.id === dealId);
            
            if (selectedDeal) {
                // Create a product object compatible with the existing cart functionality
                const product = {
                    id: selectedDeal.id,
                    name: selectedDeal.name,
                    price: selectedDeal.discountedPrice,
                    image: selectedDeal.image
                };
                
                // Add to cart using the existing cart functionality
                const cartItems = document.getElementById('cart-items');
                const cartTotal = document.getElementById('cart-total');
                
                // Create new item
                const li = document.createElement('li');
                li.innerHTML = `
                    ${product.name} - $${product.price}
                    <button class="remove-item" data-id="${product.id}">Remove</button>
                `;
                cartItems.appendChild(li);
                
                // Update total if it exists
                if (cartTotal) {
                    const currentTotal = parseFloat(cartTotal.textContent);
                    cartTotal.textContent = (currentTotal + product.price).toFixed(2);
                }
                
                // Show cart
                document.querySelector('.cart').classList.remove('hidden');
                
                // Show notification
                showNotification(`${selectedDeal.name} added to cart!`);
            }
        });
    });
}

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Add styles for the notification
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#27ae60';
    notification.style.color = 'white';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'all 0.3s ease';
    
    // Show notification with animation
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Hide and remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize countdown timers for deals
function initializeCountdownTimers() {
    // Get all deal timer elements
    const dealTimers = document.querySelectorAll('.deal-timer');
    
    // Update the countdown every minute
    setInterval(() => {
        dealTimers.forEach((timerElement, index) => {
            const timeLeft = monthlyDeals[index].timeLeft;
            const timerText = timerElement.querySelector('span:last-child');
            
            // Simple simulation of countdown (in a real app, you'd use actual dates)
            if (timeLeft.includes('1 day')) {
                timerText.textContent = 'Ends in: 23 hours';
                monthlyDeals[index].timeLeft = '23 hours';
            } else if (timeLeft.includes('hours')) {
                const hours = parseInt(timeLeft.split(' ')[2]);
                if (hours > 1) {
                    timerText.textContent = `Ends in: ${hours - 1} hours`;
                    monthlyDeals[index].timeLeft = `${hours - 1} hours`;
                } else {
                    timerText.textContent = 'Ends in: 59 minutes';
                    monthlyDeals[index].timeLeft = '59 minutes';
                }
            }
        });
    }, 60000); // Update every minute
}

// Initialize the monthly deals section
document.addEventListener('DOMContentLoaded', function() {
    renderMonthlyDeals();
    initializeCountdownTimers();
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      this.reset();
    }
  });
}

// Init
renderProducts();

// Eid Sale Products
const eidProducts = [
  { name: "Dates Pack (500g)", price: 3.0, image: "https://i.pinimg.com/736x/a8/fb/87/a8fb87cb2d59c2bacd179b544aa819ed.jpg", desc: "Premium quality Ajwa dates, perfect for Eid celebrations." },
  { name: "Mutton (1kg)", price: 12.0, image: "https://i.pinimg.com/736x/34/d5/a1/34d5a1f79c018b74e466124552f55b59.jpg", desc: "Fresh, tender mutton with Eid special 15% discount." },
  { name: "Sweet Box", price: 5.0, image: "https://i.pinimg.com/736x/55/3a/14/553a144a9758bd2bba70447874cacba8.jpg", desc: "Assorted Eid sweets to make your celebration special." },
  { name: "Basmati Rice (5kg)", price: 8.5, image: "https://i.pinimg.com/1200x/f6/16/59/f616592a533e5af12ca83854f530800e.jpg", desc: "Long-grain basmati rice for your Eid feast." },
  { name: "Cooking Oil (2L)", price: 4.0, image: "https://i.pinimg.com/736x/ae/91/e6/ae91e65bae64450c482dc382559a3093.jpg", desc: "Pure sunflower oil with special Eid discount." },
];

// DOM for Eid section
const eidProductList = document.getElementById("eid-product-list");

// Render Eid Products
function renderEidProducts() {
  eidProductList.innerHTML = eidProducts.map(p => `
    <div class="product-card" data-name="${p.name}" data-price="${p.price}">
      <img src="${p.image}" alt="${p.name}" class="product-image" />
      <h3>${p.name}</h3>
      <p class="product-description">${p.desc}</p>
      <p>$${p.price.toFixed(2)}</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `).join('');

  eidProductList.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", addToCart);
  });
}

// Initialize Eid Sale Section
renderEidProducts();
// =============================
// 💥 Discount Offer Products
// =============================