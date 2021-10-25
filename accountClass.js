class Account {
  constructor(id, name, balance) {
    this.accountId = id;
    this.accountName = name;
    this.accountBalance = balance;
  }

  get name() {
    return this.accountName;
  }

  get balance() {
    return this.accountBalance;
  }

  set name(name) {
    this.accountName = name;
  }

  set balance(amount) {
    this.accountBalance = amount;
  }

  credit(amount) {
    this.accountBalance = this.accountBalance + amount;
    return this.accountBalance;
  }

  debit(amount) {
    // const newBalance = this.accountBalance - amount;
    if (amount > this.accountBalance) {
      return "Amount exceeded balance.";
    }
    // this.accountBalance = newBalance;
    this.accountBalance = this.accountBalance - amount;
    return this.accountBalance;
  }

  transerTo(anotherAccount, amount) {
    //   const temp = this.accountBalance - amount;
    if (amount > this.accountBalance) {
      return "Amount exceeded balance.";
    }
    this.accountBalance = this.accountBalance - amount;
    anotherAccount.accountBalance = anotherAccount.accountBalance + amount;
    return this.accountBalance;
  }

  static identifyAccounts(firstAcc, secondAcc) {
    if (
      firstAcc.accountId === secondAcc.accountId &&
      firstAcc.accountName === secondAcc.accountName &&
      firstAcc.accountBalance === secondAcc.accountBalance
    ) {
      return "same account";
    }
    return "different accounts";
  }

  toString() {
    return `Account id: ${this.accountId}, Accound name: ${this.accountName}, Account balance: ${this.accountBalance}`;
  }
}

const acc1 = new Account(123, "Garabed", 300);
const acc2 = new Account(234, "Hagop", 231);
const acc3 = new Account(123, "Garabed", 300);

console.log(acc1.credit(300));
console.log(acc2.debit(1000));

console.log(acc1.transerTo(acc2, 50));
console.log(Account.identifyAccounts(acc1, acc2));
console.log(acc1.toString());
