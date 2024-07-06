import promptSync from 'prompt-sync';

const prompt = promptSync();

class ATM {
    private balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    transaction(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}`);
        } else {
            console.log('Insufficient funds or invalid amount.');
        }
    }

    getBalance(): void {
        console.log(`Current balance: ${this.balance}`);
    }

    exit(): void {
        console.log('Exiting the ATM. Have a nice day!');
    }

    showMenu(): void {
        console.log(`
        ATM Menu:
        1. Deposit
        2. Withdraw
        3. Balance Inquiry
        4. Exit
        `);
    }

    run(): void {
        let running = true;
        while (running) {
            this.showMenu();
            const choice = prompt('Enter your choice: ');
            switch (choice) {
                case '1':
                    const depositAmount = parseFloat(prompt('Enter amount to deposit: '));
                    this.deposit(depositAmount);
                    break;
                case '2':
                    const withdrawAmount = parseFloat(prompt('Enter amount to withdraw: '));
                    this.transaction(withdrawAmount);
                    break;
                case '3':
                    this.getBalance();
                    break;
                case '4':
                    this.exit();
                    running = false;
                    break;
                default:
                    console.log('Invalid choice. Please try again.');
            }
        }
    }
}

// Initialize ATM with an initial balance of 1000
const atm = new ATM(1000);
atm.run();
