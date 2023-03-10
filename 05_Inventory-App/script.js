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
        <td>${inventories[i].title}</td>
        <td>${inventories[i].amount}</td>
        <td>${inventories[i].type}</td>
        <td><a class="deleteButton" style="cursor:pointer" onclick="deleteInventory(${inventories [i].id})">Delete</td>
        </tr>
        `
    }
}

// Delete Inventory
const deleteInventory = (id) => {
    for (let i = 0; i < inventories.length; i++) {
        if (inventories[i].id == id) {
            inventories.splice(i, 1)
        }
    }

    localStorage.setItem('inventory', JSON.stringify(inventories));
    showInventories ();
    updateBalance ();
}

// Update Balance
const updateBalance = () => {
    let balance = 0;

    inventories.forEach((inventory) => {
        if (inventory.type === "paid") {
            balance += Number(inventory.amount);
        } else if (inventory.type === "pending") {
            balance -= inventory.amount;
        }
    });

    document.querySelector(".balance").textContent = balance;
}