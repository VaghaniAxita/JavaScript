const accounts = [];


const updateAccountDetails = () => {
    const accountsContainer = document.getElementById('accountsContainer');
    accountsContainer.innerHTML = '';

    const accountsHTML = accounts.map((account, index) => `
        <div class="account">
            <p>Account ${index + 1}</p>
            <p>Username: ${account.username}</p>
            <p>Account Number: ${account.number}</p>
            <p>Amount: ${account.amount}</p>
            <hr>
        </div>
    `);

    accountsContainer.innerHTML = accountsHTML;
};


document.getElementById('bankAccountForm').addEventListener('submit', function (e) {
    e.preventDefault();


    const username = document.getElementById('username').value;
    const number = document.getElementById('number').value;
    const amount = Number(document.getElementById('amount').value);

    const newAccount = { username, number, amount };
    accounts.push(newAccount);

    updateAccountDetails();
});


document.getElementById('depositamount').addEventListener('submit', function (e) {
    e.preventDefault();

    const amountDeposit = Number(document.getElementById('amountdeposit').value);

    if (accounts.length > 0) {
        accounts[accounts.length - 1].amount += amountDeposit;
        updateAccountDetails();
        alert('Deposit successful!');
    } else {
        alert('No account available for deposit!');
    }
});
