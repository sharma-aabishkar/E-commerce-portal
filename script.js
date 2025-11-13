/* ============================================
   E-Commerce Website - JavaScript
   Features: Form validation, interactivity, local storage
   ============================================ */

// ============================================
// LOCAL STORAGE & DATA MANAGEMENT
// ============================================

// Initialize local storage with default data
function initializeStorage() {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify({}));
  }
  if (!localStorage.getItem('currentUser')) {
    localStorage.setItem('currentUser', JSON.stringify(null));
  }
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  if (!localStorage.getItem('wishlist')) {
    localStorage.setItem('wishlist', JSON.stringify([]));
  }
  if (!localStorage.getItem('orders')) {
    localStorage.setItem('orders', JSON.stringify([]));
  }
  if (!localStorage.getItem('reviews')) {
    localStorage.setItem('reviews', JSON.stringify([]));
  }
}

// Sample products data
const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2999,
    description: 'Premium sound quality with noise cancellation',
    category: 'Electronics',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Smartwatch',
    price: 4999,
    description: 'Latest model with fitness tracking',
    category: 'Electronics',
    rating: 4.3,
  },
  {
    id: 3,
    name: 'USB-C Cable',
    price: 499,
    description: 'Fast charging, durable cable',
    category: 'Accessories',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Portable Charger',
    price: 1999,
    description: '20000mAh capacity, multiple ports',
    category: 'Accessories',
    rating: 4.4,
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    price: 999,
    description: 'Ergonomic design with long battery life',
    category: 'Peripherals',
    rating: 4.2,
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    price: 3499,
    description: 'RGB backlit with cherry switches',
    category: 'Peripherals',
    rating: 4.6,
  },
  {
    id: 7,
    name: 'Phone Stand',
    price: 299,
    description: 'Adjustable, holds any phone size',
    category: 'Accessories',
    rating: 4.1,
  },
  {
    id: 8,
    name: 'Screen Protector',
    price: 199,
    description: 'Tempered glass, easy installation',
    category: 'Accessories',
    rating: 4.5,
  },
];

// ============================================
// FORM VALIDATION FUNCTIONS
// ============================================

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate password strength
function isValidPassword(password) {
  return password.length >= 6;
}

// Validate phone number
function isValidPhone(phone) {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/[-\s]/g, ''));
}

// Check if field is empty
function isEmpty(value) {
  return value.trim() === '';
}

// Show error message
function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('show');
      formGroup.classList.add('error');
    }
  }
}

// Clear error message
function clearFieldError(fieldId) {
  const field = document.getElementById(fieldId);
  if (field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');
    if (errorElement) {
      errorElement.classList.remove('show');
      formGroup.classList.remove('error');
    }
  }
}

// Show alert message
function showAlert(message, type = 'success') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} show`;
  alertDiv.textContent = message;
  
  const container = document.querySelector('.container');
  if (container) {
    container.insertBefore(alertDiv, container.firstChild);
    setTimeout(() => alertDiv.remove(), 3000);
  }
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

// Register user
function registerUser() {
  const email = document.getElementById('reg-email')?.value;
  const password = document.getElementById('reg-password')?.value;
  const confirmPassword = document.getElementById('reg-confirm-password')?.value;
  const fullName = document.getElementById('reg-name')?.value;
  const phone = document.getElementById('reg-phone')?.value;
  const agreeTerms = document.getElementById('agree-terms')?.checked;

  let isValid = true;

  // Validate full name
  if (isEmpty(fullName)) {
    showFieldError('reg-name', 'Full name is required');
    isValid = false;
  } else {
    clearFieldError('reg-name');
  }

  // Validate email
  if (isEmpty(email)) {
    showFieldError('reg-email', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showFieldError('reg-email', 'Please enter a valid email');
    isValid = false;
  } else {
    clearFieldError('reg-email');
  }

  // Validate phone
  if (!isEmpty(phone) && !isValidPhone(phone)) {
    showFieldError('reg-phone', 'Please enter a valid 10-digit phone number');
    isValid = false;
  } else {
    clearFieldError('reg-phone');
  }

  // Validate password
  if (isEmpty(password)) {
    showFieldError('reg-password', 'Password is required');
    isValid = false;
  } else if (!isValidPassword(password)) {
    showFieldError('reg-password', 'Password must be at least 6 characters');
    isValid = false;
  } else {
    clearFieldError('reg-password');
  }

  // Validate confirm password
  if (isEmpty(confirmPassword)) {
    showFieldError('reg-confirm-password', 'Please confirm your password');
    isValid = false;
  } else if (password !== confirmPassword) {
    showFieldError('reg-confirm-password', 'Passwords do not match');
    isValid = false;
  } else {
    clearFieldError('reg-confirm-password');
  }

  // Check terms
  if (!agreeTerms) {
    showAlert('You must agree to terms and conditions', 'error');
    isValid = false;
  }

  if (!isValid) return false;

  // Check if user already exists
  const users = JSON.parse(localStorage.getItem('users'));
  if (users[email]) {
    showAlert('Email already registered. Please login.', 'error');
    return false;
  }

  // Register user
  users[email] = {
    email,
    password,
    fullName,
    phone,
    registeredDate: new Date().toISOString(),
  };
  localStorage.setItem('users', JSON.stringify(users));
  showAlert('Registration successful! Please login.', 'success');
  
  // Redirect to login
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1500);

  return false;
}

// Live validation helpers for registration fields
function validateRegistrationField(id) {
  const value = document.getElementById(id)?.value || '';
  switch(id) {
    case 'reg-name':
      if (isEmpty(value)) return 'Full name is required';
      return '';
    case 'reg-email':
      if (isEmpty(value)) return 'Email is required';
      if (!isValidEmail(value)) return 'Please enter a valid email';
      return '';
    case 'reg-phone':
      if (!isEmpty(value) && !isValidPhone(value)) return 'Please enter a valid 10-digit phone number';
      return '';
    case 'reg-password':
      if (isEmpty(value)) return 'Password is required';
      if (!isValidPassword(value)) return 'Password must be at least 6 characters';
      return '';
    case 'reg-confirm-password':
      const pw = document.getElementById('reg-password')?.value || '';
      if (isEmpty(value)) return 'Please confirm your password';
      if (pw !== value) return 'Passwords do not match';
      return '';
    default:
      return '';
  }
}

// Attach live validation to registration inputs
function attachRegistrationLiveValidation() {
  const fields = ['reg-name','reg-email','reg-phone','reg-password','reg-confirm-password'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      const msg = validateRegistrationField(id);
      if (msg) {
        showFieldError(id, msg);
      } else {
        clearFieldError(id);
      }
    });
  });
}

// Login user
function loginUser() {
  const email = document.getElementById('login-email')?.value;
  const password = document.getElementById('login-password')?.value;
  const rememberMe = document.getElementById('remember-me')?.checked;

  let isValid = true;

  // Validate email
  if (isEmpty(email)) {
    showFieldError('login-email', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showFieldError('login-email', 'Please enter a valid email');
    isValid = false;
  } else {
    clearFieldError('login-email');
  }

  // Validate password
  if (isEmpty(password)) {
    showFieldError('login-password', 'Password is required');
    isValid = false;
  } else {
    clearFieldError('login-password');
  }

  if (!isValid) return false;

  // Check credentials
  const users = JSON.parse(localStorage.getItem('users'));
  if (!users[email]) {
    showAlert('Email not registered. Please register first.', 'error');
    return false;
  }

  if (users[email].password !== password) {
    showAlert('Incorrect password. Please try again.', 'error');
    return false;
  }

  // Login successful
  const currentUser = {
    email,
    fullName: users[email].fullName,
    phone: users[email].phone,
    loginTime: new Date().toISOString(),
  };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
  if (rememberMe) {
    localStorage.setItem('rememberMe', 'true');
  }

  showAlert('Login successful!', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);

  return false;
}

// Logout user
function logoutUser() {
  localStorage.setItem('currentUser', JSON.stringify(null));
  localStorage.removeItem('rememberMe');
  showAlert('Logged out successfully', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
}

// ============================================
// CART & WISHLIST FUNCTIONS
// ============================================

// Add to cart
function addToCart(productId) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    showAlert('Please login to add items to cart', 'warning');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1000);
    return;
  }

  const product = sampleProducts.find(p => p.id === productId);
  const cart = JSON.parse(localStorage.getItem('cart'));
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
      addedDate: new Date().toISOString(),
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  showAlert(`${product.name} added to cart!`, 'success');
  updateCartCount();
}

// Add to wishlist
function addToWishlist(productId) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    showAlert('Please login to add items to wishlist', 'warning');
    return;
  }

  const product = sampleProducts.find(p => p.id === productId);
  const wishlist = JSON.parse(localStorage.getItem('wishlist'));
  
  const existingItem = wishlist.find(item => item.id === productId);
  if (existingItem) {
    wishlist.splice(wishlist.indexOf(existingItem), 1);
    showAlert(`${product.name} removed from wishlist`, 'success');
  } else {
    wishlist.push({
      ...product,
      addedDate: new Date().toISOString(),
    });
    showAlert(`${product.name} added to wishlist!`, 'success');
  }

  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistCount();
  updateWishlistButtons();
}

// Update cart count display
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// Update wishlist count display
function updateWishlistCount() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist'));
  const wishlistCount = document.querySelector('.wishlist-count');
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
  }
}

// Update wishlist button states
function updateWishlistButtons() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist'));
  document.querySelectorAll('.btn-wishlist').forEach(btn => {
    const productId = parseInt(btn.dataset.productId);
    if (wishlist.find(item => item.id === productId)) {
      btn.classList.add('active');
      btn.textContent = '❤️ Wishlisted';
    } else {
      btn.classList.remove('active');
      btn.textContent = '🤍 Add to Wishlist';
    }
  });
}

// ============================================
// PRODUCT DISPLAY FUNCTIONS
// ============================================

// Display products grid
function displayProducts(products = sampleProducts) {
  const grid = document.querySelector('.products-grid');
  if (!grid) return;

  grid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-image">
        <span>${['📱', '⌚', '🔌', '🔋', '🖱️', '⌨️', '📱', '📱'][product.id - 1]}</span>
      </div>
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-rating">
          ${'⭐'.repeat(Math.floor(product.rating))} ${product.rating}/5
        </div>
        <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
        <div class="product-buttons">
          <button class="btn-cart" onclick="addToCart(${product.id})">🛒 Add to Cart</button>
          <button class="btn-wishlist" data-product-id="${product.id}" onclick="addToWishlist(${product.id})">🤍 Add to Wishlist</button>
        </div>
      </div>
    </div>
  `).join('');

  updateWishlistButtons();
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================

// Submit contact form
function submitContactForm() {
  const name = document.getElementById('contact-name')?.value;
  const email = document.getElementById('contact-email')?.value;
  const subject = document.getElementById('contact-subject')?.value;
  const message = document.getElementById('contact-message')?.value;

  let isValid = true;

  // Validate name
  if (isEmpty(name)) {
    showFieldError('contact-name', 'Name is required');
    isValid = false;
  } else {
    clearFieldError('contact-name');
  }

  // Validate email
  if (isEmpty(email)) {
    showFieldError('contact-email', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showFieldError('contact-email', 'Please enter a valid email');
    isValid = false;
  } else {
    clearFieldError('contact-email');
  }

  // Validate subject
  if (isEmpty(subject)) {
    showFieldError('contact-subject', 'Subject is required');
    isValid = false;
  } else {
    clearFieldError('contact-subject');
  }

  // Validate message
  if (isEmpty(message)) {
    showFieldError('contact-message', 'Message is required');
    isValid = false;
  } else if (message.length < 10) {
    showFieldError('contact-message', 'Message must be at least 10 characters');
    isValid = false;
  } else {
    clearFieldError('contact-message');
  }

  if (!isValid) return false;

  // Save message (in real app, send to server)
  const contactMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  contactMessages.push({
    name,
    email,
    subject,
    message,
    date: new Date().toISOString(),
  });
  localStorage.setItem('contactMessages', JSON.stringify(contactMessages));

  showAlert('Message sent successfully! We will get back to you soon.', 'success');
  document.querySelector('form').reset();
  
  return false;
}

// ============================================
// REVIEW & RATING FUNCTIONS
// ============================================

// Submit review
function submitReview() {
  const productId = document.getElementById('review-product-id')?.value;
  const rating = document.getElementById('review-rating')?.value;
  const comment = document.getElementById('review-comment')?.value;

  let isValid = true;

  if (isEmpty(comment)) {
    showFieldError('review-comment', 'Review comment is required');
    isValid = false;
  } else if (comment.length < 10) {
    showFieldError('review-comment', 'Review must be at least 10 characters');
    isValid = false;
  } else {
    clearFieldError('review-comment');
  }

  if (!isValid) return false;

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const reviews = JSON.parse(localStorage.getItem('reviews'));

  reviews.push({
    productId: parseInt(productId),
    rating: parseInt(rating),
    comment,
    userName: currentUser?.fullName || 'Anonymous',
    date: new Date().toISOString(),
  });

  localStorage.setItem('reviews', JSON.stringify(reviews));
  showAlert('Review submitted successfully!', 'success');
  document.querySelector('form')?.reset();
  
  return false;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Update user info display
function updateUserDisplay() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const userDisplay = document.querySelector('.user-display');
  const authButtons = document.querySelector('.auth-buttons');

  if (currentUser && authButtons) {
    authButtons.innerHTML = `
      <span style="color: var(--text-light); font-weight: 500;">Hi, ${currentUser.fullName}</span>
      <button class="btn-register" onclick="logoutUser()">Logout</button>
    `;
  }
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
  initializeStorage();
  updateUserDisplay();
  updateCartCount();
  updateWishlistCount();

  // Display products if on products page
  const grid = document.querySelector('.products-grid');
  if (grid) {
    displayProducts();
  }

  // Attach live validation on registration page
  if (document.getElementById('reg-email')) {
    attachRegistrationLiveValidation();
  }

  // Add real-time validation to forms
  document.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', function() {
      if (this.value.trim() !== '') {
        this.closest('.form-group')?.classList.remove('error');
        this.closest('.form-group')?.querySelector('.form-error')?.classList.remove('show');
      }
    });
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks?.classList.toggle('active');
    });
    // allow keyboard toggle
    hamburger.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') navLinks?.classList.toggle('active');
    });
  }
});

// Update nav counters whenever storage changes (useful when user opens multiple tabs)
window.addEventListener('storage', (e) => {
  if (e.key === 'wishlist' || e.key === 'cart') {
    updateWishlistCount();
    updateCartCount();
  }
});

// Prevent form submission
document.addEventListener('submit', (e) => {
  if (e.target.onsubmit === null) {
    e.preventDefault();
  }
});
