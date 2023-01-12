// Add Inventory Button
document.getElementById('invForm').addEventListener('submit', addInventory);

const inventory = JSON.parse(localStorage.getItem('inventory')) || [];

function addInventory (e) {
    e.preventDefault ();

    let title = document.getElementById('inventory-title').value;
    let amount = document.getElementById('user-amount').value;

    if ( ty)
}