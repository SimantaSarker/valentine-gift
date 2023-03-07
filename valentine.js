// step 1:Clicked Buy button
// typeof number !== "number"
function getQuantityValue(elementId) {
  const quantityStringValue = document.getElementById(elementId);
  const quantityString = quantityStringValue.value;
  const quantityValue = parseInt(quantityString);
 setNull(quantityStringValue);
return quantityValue;



}

function getValueFromText(elementId) {
  const priceTag = document.getElementById(elementId);
  const priceString = priceTag.innerText;
  const price = parseInt(priceString);
  return price;
}

function valueMultiply(quantityValue, price) {
  const totalChocolatePrice = quantityValue * price;
  return totalChocolatePrice;
}
function setValueTotalCost(elementId, totalChocolatePrice) {
  const chocolateTotalText = document.getElementById(elementId);
  const chocolateText = chocolateTotalText.innerText;
  chocolateTotalText.innerText = totalChocolatePrice;
}
function totalCost()
{
const chocolateCost=document.getElementById('chocolate').innerText;
const rose=document.getElementById('rose').innerText;
const diary=document.getElementById('diary').innerText;
const chocolateConvert=parseInt(chocolateCost);
const roseConvert=parseInt(rose);
const diaryConvert=parseInt(diary);
const total=chocolateConvert+roseConvert+diaryConvert;
setValueTotalCost('total',total);


}
function setNull(element)
{
  element.value='';

}
document
  .getElementById("kitkat-buy-btn")
  .addEventListener("click", function () {
    //  Step 2: get quantity value after clicked
    const quantityValue = getQuantityValue("kitkat-quantity");
   

    // Step 3:Get the price form text using innertText
    const price = getValueFromText("kitkat-price");

    // Step 4: Multiply the value with quantity
    const totalChocolatePrice = valueMultiply(quantityValue, price);

    // Step 5: Set the value into the  chocolate text
    setValueTotalCost("chocolate", totalChocolatePrice);
    totalCost();


  });



  document.getElementById('rose-buy-btn').addEventListener('click',function()
  {
    const quantityValue = getQuantityValue("rose-quantity");

    // Step 3:Get the price form text using innertText
    const price = getValueFromText("rose-price");

    // Step 4: Multiply the value with quantity
    const totalChocolatePrice = valueMultiply(quantityValue, price);

    // Step 5: Set the value into the  chocolate text
    setValueTotalCost("rose", totalChocolatePrice)
    totalCost();
  })


  document.getElementById('diary-buy-btn').addEventListener('click',function()
  {
    const quantityValue = getQuantityValue("diary-quantity");

    // Step 3:Get the price form text using innertText
    const price = getValueFromText("diary-price");

    // Step 4: Multiply the value with quantity
    const totalChocolatePrice = valueMultiply(quantityValue, price);

    // Step 5: Set the value into the  chocolate text
    setValueTotalCost("diary", totalChocolatePrice)
    totalCost();
  })


document.getElementById('apply').addEventListener('click',function()
{
 console.log("Hello");
 const getValueString=document.getElementById('promo-code');
 const getString=getValueString.value;
 if(getString==101)
 {
const totalCost=document.getElementById('total').innerText;
const totalValue=(parseInt(totalCost)*0.1)
setValueTotalCost('all-total',totalValue);
setNull(getValueString);

 }
 else if(isNaN(getString))
 {
  alert("Enter number please..");
  setNull(getValueString);
 }
 
})