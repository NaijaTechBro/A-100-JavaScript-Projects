// Add Inventory Button
document.getElementById('invForm').addEventListener('submit', addInventory);

const inventories = JSON.parse(localStorage.getItem('inventories')) || [];

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
            id: inventories.length > 0 ? inventories[inventories.length - 1].id + 1 : 1,
        }

        inventories.push (inventory);
        localStorage.setItem('inventory', JSON.stringify(inventories));
    }

    document.getElementById('invForm').reset ();
    showInventories ();
    updateBalance ();
}

// Display Inventory 
const showInventories = () => {
    const inventoryTable = document.getElementById('inventoryTable');

    inventoryTable.innerHTML = '';

    for (let i = 0; i < inventories.length; i++) {
        inventoryTable.innerHTML += `
        <tr>
        <td>${inventories[i].type}</td>
        <td>${inventories[i].title}</td>
        <td>${inventories[i].amount}</td>
        <td><a class="deleteButton" onclick="deleteInventory(${inventories [i].id})">Delete</td>
        </tr>
        `
    }
}