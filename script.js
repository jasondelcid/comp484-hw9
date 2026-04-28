// ==========================
// Part 1: Date Display
// ==========================

const currentDate = new Date();

let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let year = currentDate.getFullYear();

month = String(month).padStart(2, "0");
day = String(day).padStart(2, "0");

const dateMessage = "Today is " + month + "/" + day + "/" + year;
document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

const valueOne = "42";
const valueTwo = "19.75";
const valueThree = "hello";
const valueFour = "100";

const convertedOne = Number(valueOne);
const convertedTwo = Number(valueTwo);
const convertedThree = Number(valueThree);
const convertedFour = Number(valueFour);

const isNaNOne = Number.isNaN(convertedOne);
const isNaNTwo = Number.isNaN(convertedTwo);
const isNaNThree = Number.isNaN(convertedThree);
const isNaNFour = Number.isNaN(convertedFour);

const isIntegerOne = Number.isInteger(convertedOne);
const isIntegerTwo = Number.isInteger(convertedTwo);
const isIntegerThree = Number.isInteger(convertedThree);
const isIntegerFour = Number.isInteger(convertedFour);

let messageOne = "";
if (isNaNOne) {
  messageOne = "This value is not a valid number.";
} else {
  messageOne = "This value is a valid number.";
}

if (isIntegerOne) {
  messageOne += " It is an integer.";
} else {
  messageOne += " It is not an integer.";
}

let messageTwo = "";
if (isNaNTwo) {
  messageTwo = "This value is not a valid number.";
} else {
  messageTwo = "This value is a valid number.";
}

if (isIntegerTwo) {
  messageTwo += " It is an integer.";
} else {
  messageTwo += " It is not an integer.";
}

let messageThree = "";
if (isNaNThree) {
  messageThree = "This value is not a valid number.";
} else {
  messageThree = "This value is a valid number.";
}

if (isIntegerThree) {
  messageThree += " It is an integer.";
} else {
  messageThree += " It is not an integer.";
}

let messageFour = "";
if (isNaNFour) {
  messageFour = "This value is not a valid number.";
} else {
  messageFour = "This value is a valid number.";
}

if (isIntegerFour) {
  messageFour += " It is an integer.";
} else {
  messageFour += " It is not an integer.";
}

let conversionOutput = "";
conversionOutput += "<p>Original: \"" + valueOne + "\" → Converted: " + convertedOne + " → isNaN: " + isNaNOne + " → isInteger: " + isIntegerOne + "<br>" + messageOne + "</p>";
conversionOutput += "<p>Original: \"" + valueTwo + "\" → Converted: " + convertedTwo + " → isNaN: " + isNaNTwo + " → isInteger: " + isIntegerTwo + "<br>" + messageTwo + "</p>";
conversionOutput += "<p>Original: \"" + valueThree + "\" → Converted: " + convertedThree + " → isNaN: " + isNaNThree + " → isInteger: " + isIntegerThree + "<br>" + messageThree + "</p>";
conversionOutput += "<p>Original: \"" + valueFour + "\" → Converted: " + convertedFour + " → isNaN: " + isNaNFour + " → isInteger: " + isIntegerFour + "<br>" + messageFour + "</p>";

document.getElementById("numberConversionOutput").innerHTML = conversionOutput;

// ==========================
// Part 3: Math and Number Formatting
// ==========================

const itemPrice = 49.99;
const taxRate = 0.08;
const shippingCost = 5;

const subtotal = itemPrice + shippingCost;
const taxAmount = subtotal * taxRate;
const totalCost = subtotal + taxAmount;

let purchaseMessage = "";
if (totalCost > 50) {
  purchaseMessage = "This is an expensive purchase.";
} else {
  purchaseMessage = "This is a low-cost purchase.";
}

let mathOutput = "";
mathOutput += "<p>Item Price: $" + itemPrice.toFixed(2) + "</p>";
mathOutput += "<p>Shipping: $" + shippingCost.toFixed(2) + "</p>";
mathOutput += "<p>Subtotal: $" + subtotal.toFixed(2) + "</p>";
mathOutput += "<p>Tax: $" + taxAmount.toFixed(2) + "</p>";
mathOutput += "<p><strong>Total Cost: $" + totalCost.toFixed(2) + "</strong></p>";
mathOutput += "<p>" + purchaseMessage + "</p>";

document.getElementById("mathOutput").innerHTML = mathOutput;