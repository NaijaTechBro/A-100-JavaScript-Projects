document.getElementById('expForm').addEventListener('submit', addTransaction);

const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction (e) {
    e.preventDefault ();

    let type = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;

    if ( type != 'chooseOne'
    && name.length > 0
    && amount > 0 ) {
        const transaction = {
            type,
            name,
            amount,
            id: transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1,
        }
        
    }
}