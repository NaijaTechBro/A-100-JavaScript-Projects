let userAmount = document.getElementById("user-amount")
const addExpensesButton = document.getElementById("add-expenses")
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const expenditureValue = document.getElementById("expenditure-value");
const list = document.getElementById("list");


//Function To Disable Edit and Delete Button
const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
    });
};