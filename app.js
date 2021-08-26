var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var initialPrice = document.querySelector('#initial-price');
var submitBtn = document.querySelector('#submit-btn');
var outputEl = document.querySelector('#output');

submitBtn.addEventListener("click", submitHamdler);

function submitHamdler() {
  var ip = initialPrice.value;
  var qty = stocksQuantity.value;
  var curr = currentPrice.value;

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    //  Loss logic here
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(`Hayy! the loss is ${loss} and the percentage is ${lossPercentage}%`);
  } else if (current > initial) {
    //  Profit logic here
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(`yay! the profit is ${profit} and the percentage is ${profitPercentage}%`);
  } else {
    // rest of logic here
    showOutput(`No pain no gain and no gain no pain`);
  }
}

function showOutput(message){
  outputEl.innerHTML = message;
}