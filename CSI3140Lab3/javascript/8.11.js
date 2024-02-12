/* Group of 36 */
/* Zhong Tao 300222579 */
/* Fengshou Xu 300036335 */




const prices = {
    1: 2.98,
    2: 4.50,
    3: 9.98,
    4: 4.49,
    5: 6.87
  };
  let totalSales = 0;
  let isCalculating = true;
  
  function calculatePrice(productNumber, quantity) {
    return prices[productNumber] * quantity;
  }
  
  function startCalculations() {
    isCalculating = true;
    totalSales = 0; // Reset total sales each time calculation starts
  
    function askForProduct() {
      if (!isCalculating) {
        document.getElementById('output').innerHTML = `<h2>The total retail value of all products sold last week is $${totalSales.toFixed(2)}</h2>`;
        return;
      }
  
      let productNumber = parseInt(prompt("Enter the product number (or click Cancel to end):"), 10);
      if (isNaN(productNumber) || productNumber < 1 || productNumber > 5) {
        isCalculating = false;
        document.getElementById('output').innerHTML = `<h2>The total retail value of all products sold last week is $${totalSales.toFixed(2)}</h2>`;
        return;
      }
  
      let quantity = parseInt(prompt("Enter the quantity sold:"), 10);
      if (!isNaN(quantity) && quantity > 0) {
        totalSales += calculatePrice(productNumber, quantity);
      }
  
      setTimeout(askForProduct, 0); // Set timeout to prevent stack overflow
    }
  
    askForProduct();
  }
  
  // Add an event listener to stop the loop when window is closed or user navigates away
  window.addEventListener('beforeunload', function() {
    isCalculating = false;
  });
  