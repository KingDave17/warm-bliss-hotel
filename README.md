# 🏨 Warm Bliss Hotel - Full-Stack Web Prototype

## 📖 Project Overview
Warm Bliss Hotel is a responsive, multi-page web application that simulates a complete hotel booking experience. I built this project to demonstrate a deep understanding of Vanilla JavaScript, DOM manipulation, and modern CSS architecture. 

The application features a complete user journey; from a landing page to custom modular authentication, a personalized user dashboard, complex form validation, and a simulated payment portal with custom input masking. Every core module is backed by a Jasmine unit testing suite to ensure high software quality and reliability.


## 🛠️ Technical Stack
* **Frontend:** Vanilla HTML5, CSS3, and JavaScript.
* **Testing:** Jasmine Framework for comprehensive unit testing.
* **Architecture:** Modular file structure for high maintainability.

## ✨ Key Features & Technical Implementations

### 🔐 Authentication & Session Management
* **Modular Authentication:** Replaced bulky external SDKs with a custom, secure registration and sign-in flow.
* **Security Hardening:** Implemented Generic Error Messaging to prevent account enumeration and regex-based email validation.
* **State Persistence:** Utilized `localStorage` to securely pass user credentials and room selections across the application..

### 🎨 Advanced UI/UX & CSS Architecture
* **Parallel Validation:** Implemented high-end micro-interactions where all invalid fields trigger a "shake" animation and red-border highlights simultaneously.
* **Micro-interactions:** Engineered custom CSS `@keyframes` animations (e.g., `slideInDown`) for modals and smooth hover states using `cubic-bezier` timing functions.
* **Mobile-First Design:** Fully responsive interface using relative units (`rem`) and targeted media queries to ensure cross-device compatibility.

### ⚙️ Complex Logic & Testing
* **Unit Testing (Jasmine):** Developed a comprehensive test suite in the tests/ directory to verify formatting, pricing data, and authentication logic.
* **Payment Input Masking:** Built string manipulation logic to automatically format credit card numbers (4-digit grouping) and expiry dates (MM/YY) in real-time. 
* **Modular Codebase:** Ensured JavaScript code was structured into exported, testable functions for modern ES6 module compatibility.

## 🗂️ Project Structure
```text
hotel_management_system/
├── dashboard/          # Room displays & user dashboard
├── form/               # Detailed reservation & service forms
├── images/             # Visual assets & optimized background pics
├── jasmine-tests/      # Jasmine core framework files
├── landing/            # Hotel landing page & review system
├── login/              # Unified authentication parent folder
│   ├── signin/         # Security-hardened sign-in logic
│   └── signup/         # Registration & validation logic
├── payment/            # Secure checkout & input masking logic
├── tests/              # Jasmine Spec files (Project-specific tests)
├── index.html          # Main entry point (Landing Page)
└── README.md           # Project documentation & quality report
