
class BankAccount {
    #username;
    #AcNo;
    #Num;
    #amount;
    
    constructor(acNo, username, num) {
        this.#AcNo = acNo;
        this.#username = username;
        this.#Num = num;
        this.#amount = 0; 
    }

    getAccountNo() {
        return this.#AcNo;
    }

    setAccountNo(acNo) {
        this.#AcNo = acNo;
    }

    getAmount() {
        return this.#amount;
    }

    setAmount(amount) {
        this.#amount = amount;
    }
     depositAmount(amount){
        if (amount<1) {
            throw new Error("not able")
        }
        else{
            this.#amount += amount
        }
     }

     #canwithdrow(reqAmt){
        if (this.#amount >= reqAmt) {
            true
        } else {
            false
        }
     }
     withdrowAmt(amount){
        if (amount<1) {
            throw new error("greater than 0");
        } else {
            if (this.#canwithdrow(amount)) {
                this.#amount-=amount
                console.log("success");
            } else {
                console.log("not success");
            }
        }
     }
}
let ac3=new BankAccount2("234", "def", "4567")
try {
     ac3.depositAmount(10)   
} catch (error) {
   console.log("error",error);
}
console.log(ac3.getAccountNo());

let ac2 = new BankAccount2("123", "abc", "4567");
console.log(ac2.getAmount()); // 0
ac2.setAmount(500);
console.log(ac2.getAmount()); 
console.log(ac2.getAccountNo()); 
ac2.setAccountNo("567");
console.log(ac2.getAccountNo()); 