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

//Function To Modify List Elements
const modifyElement = (element, edit = false) => {
    let parentDiv = element.parentElement;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
    let parentText = parentDiv.querySelector(".product").innerText;
    productTitle.value = parentText;
    userAmount.value = parentAmount;
    disableButtons(true);
    }
    expenditureValue.innerText =
    parseInt(currentExpense) - parseInt(parentAmount);
    parentDiv.remove();
};