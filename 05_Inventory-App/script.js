// Add Inventory Button
document.getElementById('invForm').addEventListener('submit', addInventory);

const inventory = JSON.parse(localStorage.getItem('inventory')) || [];

function addInventory (e) {
    e.preventDefault ();

    let type = document.getElementById('type').value;
    let title = document.getElementById('inventory-title').value;
    let amount = document.getElementById('user-amount').value;

    if ( type !='chooseOne'
    && title.length > 0
    && amount > 0) {
        const inventory = {
            type,
            title,
            amount,
            id: inventory.length > 0 ? inventory[inventory.length - 1].id + 1 : 1,
        }
    }
}