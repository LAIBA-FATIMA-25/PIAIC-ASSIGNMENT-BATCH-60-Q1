import promptSync from 'prompt-sync';
const prompt = promptSync();
class TodoList {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    addTask(description) {
        const task = {
            id: this.nextId++,
            description,
            completed: false
        };
        this.tasks.push(task);
        console.log(`Task added: ${description}`);
    }
    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = true;
            console.log(`Task completed: ${task.description}`);
        }
        else {
            console.log('Task not found.');
        }
    }
    viewTasks() {
        console.log('To-Do List:');
        this.tasks.forEach(task => {
            const status = task.completed ? '✓' : ' ';
            console.log(`[${status}] ${task.id}: ${task.description}`);
        });
    }
    showMenu() {
        console.log(`
        To-Do List Menu:
        1. Add Task
        2. Complete Task
        3. View Tasks
        4. Exit
        `);
    }
    run() {
        let running = true;
        while (running) {
            this.showMenu();
            const choice = prompt('Enter your choice: ');
            switch (choice) {
                case '1':
                    const description = prompt('Enter task description: ');
                    this.addTask(description);
                    break;
                case '2':
                    const taskId = parseInt(prompt('Enter task ID to complete: '), 10);
                    this.completeTask(taskId);
                    break;
                case '3':
                    this.viewTasks();
                    break;
                case '4':
                    console.log('Exiting the To-Do List. Have a nice day!');
                    running = false;
                    break;
                default:
                    console.log('Invalid choice. Please try again.');
            }
        }
    }
}
const todoList = new TodoList();
todoList.run();
