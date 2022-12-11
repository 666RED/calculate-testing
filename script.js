const numOfItem = 3;

const addButtons = Array.from(document.querySelectorAll('[data-add-button]'));
const removeButtons = document.querySelectorAll('[data-remove-button]');
const prices = document.querySelectorAll('[data-price]');
const totalPrice = document.querySelector('[data-total-price]');
const outputs = document.querySelectorAll('[data-output]');

addButtons.forEach(button => {
  button.addEventListener('click', increaseQuantity);
});

function increaseQuantity(event){
  const buttonClicked = event.target;
  const itemContainer = buttonClicked.parentElement.parentElement;
  const output = itemContainer.querySelector('[data-output]');
  output.innerText++;
  updateSinglePrice(itemContainer);
  updateTotalPrice();
}

function updateSinglePrice(itemContainer){
  const output = itemContainer.querySelector('[data-output]');
  const price = itemContainer.querySelector('[data-price]');
  const singlePrice = itemContainer.querySelector('[data-single-price]');
  let total = parseFloat(output.innerText) * parseFloat(price.innerText.replace('RM', ''));

  singlePrice.innerText = `RM ${total}`;
}

function updateTotalPrice(){
  let total = 0;

  for(let i = 0; i < numOfItem; i++){
    total += parseFloat(prices[i].innerText.replace('RM', '')) * parseFloat(outputs[i].innerText);
  }

  totalPrice.innerText = `RM ${total}`;
}

for(let i = 0; i < numOfItem; i++){
  const button = removeButtons[i];
  button.addEventListener('click', decreaseQuantity);
}

function decreaseQuantity(event){
  const buttonClick = event.target;
  const itemContainer = buttonClick.parentElement.parentElement;
  const output = itemContainer.querySelector('[data-output]');
  if(output.innerText === '0'){
    return;
  }
  output.innerText--;
  updateSinglePrice(itemContainer);
  updateTotalPrice();
}