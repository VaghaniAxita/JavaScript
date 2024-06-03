document.addEventListener('DOMContentLoaded', function () {
    const accountDetails = document.getElementById('accountDetails');

    document.getElementById('bankAccountForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const accountNumber = document.getElementById('accountNumber').value;
        const amount = document.getElementById('amount').value;

        const newAccount = new BankAccount(accountNumber, username, amount);

        const accountDiv = document.createElement('div');
        accountDiv.innerHTML = `
            <p>Username: ${newAccount.getUserName()}</p>
            <p>Account Number: ${newAccount.getAccountNo()}</p>
            <p>Amount: ${newAccount.getAmount()}</p>
        `;

        accountDetails.appendChild(accountDiv);
    });



class BankAccount {
    #username;
    #Num;
    #amount;

    constructor(Num, username, amount) {
        this.#Num = Num;
        this.#username = username;
        this.#amount = amount || 0;
    }

    getAccountNo() {
        return this.#Num;
    }

    setAccountNo(Num) {
        this.#Num = Num;
    }

    getUserName() {
        return this.#username;
    }

    setUserName(username) {
        this.#username = username;
    }

    getAmount() {
        return this.#amount;
    }

    setAmount(amount) {
        this.#amount = amount;
    }

    depositAmount(amount) {
        if (amount < 1) {
            throw new Error("Amount must be greater than 0");
        } else {
            this.#amount += amount;
        }
    }

    #canWithdraw(reqAmt) {
        return this.#amount >= reqAmt;
    }

    withdrawAmt(amount) {
        if (amount < 1) {
            throw new Error("Amount must be greater than 0");
        } else {
            if (this.#canWithdraw(amount)) {
                this.#amount -= amount;
                console.log("Withdrawal successful");
            } else {
                console.log("Not enough balance");
            }
        }
    }
}

});