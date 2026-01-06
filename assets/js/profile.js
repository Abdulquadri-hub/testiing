// script.js

document.addEventListener('DOMContentLoaded', function() {
  
  // Dark Mode Toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;
  let isDarkMode = false;

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      isDarkMode = !isDarkMode;
      
      if (isDarkMode) {
        body.style.background = '#1a1a1a';
        darkModeToggle.textContent = 'Light Mode ☀️';
      } else {
        body.style.background = '#f5f5f5';
        darkModeToggle.textContent = 'Dark Mode 🌙';
      }
    });
  }

  // Balance Toggle
  const eyeIcon = document.querySelector('.eye-icon');
  const balanceAmount = document.querySelector('.balance-amount');
  let balanceVisible = false;

  if (eyeIcon && balanceAmount) {
    eyeIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      balanceVisible = !balanceVisible;
      
      if (balanceVisible) {
        balanceAmount.textContent = 'NGN 0.00';
      } else {
        balanceAmount.textContent = 'NGN –';
      }
    });
  }

  // Subscribe Button
  const subscribeBtn = document.querySelector('.btn-subscribe');
  
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
      // Add loading state
      subscribeBtn.classList.add('loading');
      subscribeBtn.disabled = true;
      
      // Simulate API call
      setTimeout(function() {
        subscribeBtn.classList.remove('loading');
        subscribeBtn.disabled = false;
        alert('Subscribe functionality - Coming soon!');
      }, 1000);
    });
  }

  // Withdraw Button
  const withdrawBtn = document.querySelector('.btn-withdraw');
  
  if (withdrawBtn) {
    withdrawBtn.addEventListener('click', function() {
      // Add loading state
      withdrawBtn.classList.add('loading');
      withdrawBtn.disabled = true;
      
      // Simulate API call
      setTimeout(function() {
        withdrawBtn.classList.remove('loading');
        withdrawBtn.disabled = false;
        alert('Withdraw functionality - Coming soon!');
      }, 1000);
    });
  }

  // Menu Items Click Handler
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const text = item.querySelector('span:nth-child(2)').textContent;
      console.log('Navigating to: ' + text);
      
      // Add visual feedback
      item.style.background = '#f0f0f0';
      setTimeout(function() {
        item.style.background = '';
      }, 200);
      
      // You can add navigation logic here
      // Example: window.location.href = '/path-to-' + text.toLowerCase().replace(/\s+/g, '-');
    });
  });

  // Customer Service Click Handler
  const customerService = document.querySelector('.customer-service');
  
  if (customerService) {
    customerService.addEventListener('click', function() {
      console.log('Opening Customer Service');
      alert('Customer Service - Available 24/7');
    });
  }

  // Login Section Click Handler
  const loginSection = document.querySelector('.login-section');
  
  if (loginSection) {
    loginSection.addEventListener('click', function() {
      console.log('Login clicked');
      alert('Login - Please sign in to view your profile');
    });
  }

});