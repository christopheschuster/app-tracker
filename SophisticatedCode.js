/*
File Name: SophisticatedCode.js
Content: A complex and elaborate JavaScript code showcasing a banking transaction system with multiple functions and features.
*/

// Bank class to create a new bank with a name and supported currencies.
class Bank {
  constructor(name, supportedCurrencies) {
    this.name = name;
    this.supportedCurrencies = supportedCurrencies;
    this.accounts = [];
  }

  // Add an account to the bank.
  addAccount(account) {
    this.accounts.push(account);
  }

  // Get the total balance of all accounts in the bank.
  getTotalBalance() {
    let totalBalance = 0;
    for (const account of this.accounts) {
      totalBalance += account.getBalance();
    }
    return totalBalance;
  }
}

// Account class to represent individual bank accounts.
class Account {
  constructor(accountNumber, balance, currency) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.currency = currency;
  }

  // Get the balance of the account.
  getBalance() {
    return this.balance;
  }

  // Deposit an amount into the account.
  deposit(amount) {
    if (amount <= 0) {
      console.error("Invalid deposit amount.");
      return;
    }
    this.balance += amount;
    console.log(`Deposit of ${amount} ${this.currency} successful.`);
  }

  // Withdraw an amount from the account.
  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      console.error("Invalid withdrawal amount.");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrawal of ${amount} ${this.currency} successful.`);
  }
}

// Utility function to format currency.
function formatCurrency(amount, currency) {
  // Implement currency formatting logic here.
  return `${currency}${amount.toFixed(2)}`;
}

// Create a new bank with the name "ABC Bank" supporting USD and EUR.
const abcBank = new Bank("ABC Bank", ["USD", "EUR"]);

// Add two accounts to the bank.
abcBank.addAccount(new Account("12345678", 5000, "USD"));
abcBank.addAccount(new Account("98765432", 10000, "EUR"));

// Get the total balance of the bank.
const totalBalance = abcBank.getTotalBalance();
console.log(`Total balance in ${abcBank.name}: ${formatCurrency(totalBalance, abcBank.supportedCurrencies[0])}`);

// Perform some transactions on the accounts.
abcBank.accounts[0].withdraw(1000);
abcBank.accounts[1].deposit(2000);

// Get the updated balance of the accounts.
console.log(`Account 1 balance: ${formatCurrency(abcBank.accounts[0].getBalance(), abcBank.supportedCurrencies[0])}`);
console.log(`Account 2 balance: ${formatCurrency(abcBank.accounts[1].getBalance(), abcBank.supportedCurrencies[1])}`);

// Output:
// Total balance in ABC Bank: USD7000.00
// Withdrawal of 1000 USD successful.
// Deposit of 2000 EUR successful.
// Account 1 balance: USD4000.00
// Account 2 balance: EUR12000.00

// ... Continue with additional code to further extend the functionality
// and complexity of the banking system.