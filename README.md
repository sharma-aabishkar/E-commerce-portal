# TechMart - E-Commerce Website 🛍️

A fully functional e-commerce website built with HTML, CSS, and JavaScript for a college assignment. Features product listings, user authentication, shopping cart, wishlist, and customer reviews.

## 📋 Project Overview

TechMart is a responsive e-commerce platform that simulates a real-world tech retail store. The project demonstrates web development fundamentals including form validation, local storage management, responsive design, and interactive UI.

## ✨ Features Implemented

### 1. **Navigation & Pages**
- ✅ Home page with featured products and hero section
- ✅ Products page with full product catalog
- ✅ Login & Registration pages with form validation
- ✅ Contact Us page with contact form and FAQ
- ✅ About Us page with company information
- ✅ Responsive navigation bar with mobile hamburger menu

### 2. **User Authentication**
- ✅ User registration with validation (name, email, phone, password)
- ✅ User login with credentials verification
- ✅ Password confirmation matching
- ✅ Remember me functionality
- ✅ Logout feature
- ✅ Local storage-based user management

### 3. **Product Features**
- ✅ Display 8 sample tech products with details
- ✅ Product cards showing price, rating, and description
- ✅ Add to Cart functionality (requires login)
- ✅ Add to Wishlist functionality (requires login)
- ✅ Product filtering by category
- ✅ Product sorting (price, rating)

### 4. **Shopping Features**
- ✅ Shopping cart management
- ✅ Wishlist management
- ✅ Cart and wishlist item counters
- ✅ Add to cart/wishlist with visual feedback

### 5. **Reviews & Ratings**
- ✅ Customer review submission form
- ✅ Review display with product name and rating
- ✅ Timestamp for each review
- ✅ User attribution for reviews

### 6. **Forms & Validation**
- ✅ Registration form with comprehensive validation
- ✅ Login form with error handling
- ✅ Contact form with email validation
- ✅ Review form with rating selection
- ✅ Real-time error messages
- ✅ Empty field detection
- ✅ Email format validation
- ✅ Password strength validation (min 6 characters)
- ✅ Phone number validation (10 digits)

### 7. **UI/UX Features**
- ✅ Clean, modern responsive design
- ✅ Color-coded alerts (success, error, warning)
- ✅ Smooth animations and transitions
- ✅ Mobile-first responsive layout
- ✅ Professional typography and spacing
- ✅ Hover effects and interactive elements
- ✅ Accessibility considerations

### 8. **Data Persistence**
- ✅ Local Storage for user data
- ✅ Local Storage for cart items
- ✅ Local Storage for wishlist
- ✅ Local Storage for reviews
- ✅ Session management

## 📁 Project Structure

```
E-commerce-portal/
├── index.html           # Home page with featured products
├── products.html        # Full product listing page
├── login.html           # User login page
├── register.html        # User registration page
├── contact.html         # Contact and FAQ page
├── about.html           # About company and team
├── style.css            # Main stylesheet (responsive design)
├── script.js            # JavaScript for validation and interactivity
└── README.md            # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary Color**: #ff6b35 (Orange)
- **Secondary Color**: #004e89 (Dark Blue)
- **Accent Color**: #1ac8eb (Cyan)
- **Text Dark**: #2c3e50
- **Background Light**: #f8f9fa

### Responsive Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build tools required

### How to Run

1. **Clone or Download the Repository**
   ```bash
   # If using git
   git clone https://github.com/sharma-aabishkar/E-commerce-portal.git
   cd E-commerce-portal
   
   # Or simply download and extract the files
   ```

2. **Open in Browser**
   - Double-click `index.html` to open in your default browser
   - Or right-click and select "Open with" → Choose your browser
   - Or use a local server (recommended for best results):

3. **Using a Local Server (Optional but Recommended)**
   
   **Python 3:**
   ```bash
   cd E-commerce-portal
   python -m http.server 8000
   # Open browser and go to http://localhost:8000
   ```

   **Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

   **Node.js (if installed):**
   ```bash
   npx http-server
   ```

## 📖 Usage Guide

### For Users

#### 1. **Registration**
- Click "Sign Up" in navigation
- Fill in all required fields (marked with *)
- Validate: email format, password (min 6 chars), phone (10 digits)
- Agree to terms and conditions
- Account is saved to browser's local storage

#### 2. **Login**
- Click "Login" in navigation
- Use your registered email and password
- Check "Remember me" to stay logged in
- Successful login redirects to home page

#### 3. **Shopping**
- Browse products on Products page
- Click "Add to Cart" to purchase items
- Click "Add to Wishlist" to save items for later
- Filter by category or sort by price/rating

#### 4. **Reviews**
- Visit Products page
- Scroll to "Customer Reviews" section
- Select product and rating
- Write your review and submit
- Reviews appear immediately below form

#### 5. **Contact**
- Click "Contact Us" in navigation
- Fill contact form with your inquiry
- View FAQs for common questions
- Message stored in local storage

### For Developers

#### Key JavaScript Functions

**Authentication:**
```javascript
registerUser()      // Handle user registration
loginUser()         // Handle user login
logoutUser()        // Handle user logout
```

**Shopping:**
```javascript
addToCart(productId)        // Add product to cart
addToWishlist(productId)    // Add product to wishlist
updateCartCount()           // Update cart counter
updateWishlistCount()       // Update wishlist counter
```

**Validation:**
```javascript
isValidEmail(email)         // Email format validation
isValidPassword(password)   // Password strength check
isValidPhone(phone)         // Phone number validation
isEmpty(value)              // Check if field is empty
```

**Data Management:**
```javascript
initializeStorage()         // Initialize local storage
displayProducts(products)   // Display product grid
filterAndSortProducts()     // Filter and sort products
```

#### Modifying Products

Edit the `sampleProducts` array in `script.js`:
```javascript
const sampleProducts = [
  {
    id: 1,
    name: 'Product Name',
    price: 1999,
    description: 'Product description',
    category: 'Category',
    rating: 4.5,
  },
  // Add more products...
];
```

#### Customizing Colors

Edit CSS variables in `style.css`:
```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #004e89;
  --accent-color: #1ac8eb;
  /* ... */
}
```

## 📱 Responsive Design

The website is fully responsive and works perfectly on:
- ✅ Desktop computers (1200px and above)
- ✅ Tablets (768px - 1199px)
- ✅ Mobile phones (below 768px)
- ✅ Small devices (below 480px)

Test responsiveness:
- Use browser's DevTools (F12)
- Select different device types in Device Toolbar
- Mobile hamburger menu appears on small screens

## 🧪 Testing the Application

### Test Credentials
- **Email**: test@example.com
- **Password**: demo123

However, you'll need to register a new account first to test the full functionality.

### Test Scenarios

1. **Registration**
   - Try invalid email (should show error)
   - Try short password (should require min 6 chars)
   - Try non-matching passwords (should show error)
   - Try invalid phone number (should require 10 digits)

2. **Login**
   - Login without registering (should show error)
   - Use wrong password (should show error)
   - Successful login shows welcome message

3. **Shopping**
   - Try adding to cart without login (redirects to login)
   - Add multiple items to cart
   - Add/remove from wishlist
   - Filter products by category
   - Sort products by price

4. **Reviews**
   - Submit review with less than 10 characters (should error)
   - Submit valid review
   - Check review appears immediately
   - Try leaving required fields empty

5. **Contact**
   - Submit contact form with valid data
   - Try submitting with empty fields
   - Check success message appears

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ HTML5 semantic markup
- ✅ CSS3 responsive design with Grid and Flexbox
- ✅ JavaScript ES6+ features
- ✅ Form validation and error handling
- ✅ Local Storage API usage
- ✅ Event handling and DOM manipulation
- ✅ Responsive design patterns
- ✅ User authentication concepts
- ✅ Shopping cart implementation
- ✅ Filter and sort functionality

## 🔒 Security Notes

**Important**: This is a learning project with local storage. For production:
- ✅ Use backend server for authentication
- ✅ Hash passwords (never store plain text)
- ✅ Use secure HTTPS connections
- ✅ Implement server-side validation
- ✅ Use databases for data persistence
- ✅ Add CSRF protection
- ✅ Implement proper authorization

## 🐛 Known Limitations

1. Data is stored in browser's local storage (cleared if browser cache is cleared)
2. No server-side backend integration
3. No payment gateway integration
4. Product images are emojis (can be replaced with actual images)
5. No email notifications
6. No order tracking system

## 📝 Future Enhancements

- [ ] Add backend API integration
- [ ] Implement payment gateway
- [ ] Add real product images
- [ ] Order history and tracking
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] Product recommendations
- [ ] Customer support chat
- [ ] Mobile app version
- [ ] Analytics dashboard

## 📄 File Details

### index.html
- Home page with hero banner
- Featured products section
- "Why Choose Us" information cards
- Newsletter subscription section
- Footer with links and info

### products.html
- Full product catalog
- Category filter dropdown
- Sort by options (price, rating)
- Customer reviews section
- Review submission form
- Recent reviews display

### register.html
- Registration form
- Full name, email, phone fields
- Password with confirmation
- Terms & conditions checkbox
- Input validation on submit
- Link to login page

### login.html
- Login form with email and password
- Remember me checkbox
- Forgot password link
- Test credentials display
- Link to registration

### contact.html
- Contact information section
- Contact form
- Frequently Asked Questions (FAQ)
- Multiple contact methods
- Business hours

### about.html
- Company story and mission
- Team member profiles
- Statistics and achievements
- Why choose us section

### style.css
- 700+ lines of responsive CSS
- CSS custom properties (variables)
- Grid and Flexbox layouts
- Mobile-first responsive design
- Animations and transitions
- Form styling
- Component styles

### script.js
- 650+ lines of JavaScript
- Form validation functions
- Authentication logic
- Shopping cart management
- Local storage operations
- Product filtering and sorting
- Event listeners
- Data management

## 📞 Support & Contact

For issues or questions:
- Check the FAQ section in Contact page
- Review inline code comments
- Test functionality step by step
- Use browser Console (F12) to debug

## 📄 License

This is a college assignment project. Feel free to use for educational purposes.

## 👨‍💼 Author

Created as a college assignment project demonstrating web development fundamentals.

## 🙏 Acknowledgments

- Modern responsive design practices
- Web accessibility standards
- JavaScript best practices
- CSS Grid and Flexbox
- Local Storage API documentation

---

**Happy Coding! 🚀** Feel free to modify, enhance, and learn from this project!

**Last Updated**: November 13, 2024
