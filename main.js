#! /usr/bin/env node
//SHABANG
import inquirer from "inquirer";
//inquirer     done
//array        done
//function     done
//operator
let todos = ["hamza", "ahmed"];
async function createTodo(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select and operation",
            name: "select",
            choices: ["Add", "update", "veiw", "delete",],
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
            //   console.log(todos);
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "veiw") {
            console.log("*** TO DO LIST ***");
            console.log(todos);
            console.log("**********************");
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
