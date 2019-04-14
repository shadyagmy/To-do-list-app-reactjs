To do list app wit React js

App link => https://shadyagmy.github.io/To-do-list-app-reactjs/

App describtion :

- The App consists of 3 components (App.js, Form.js and Todos.js)
- App.js is a class based component which is resposible for control the todos behavior and it has two methods: 1- addTodo() which is responsible for getting the new created todo from Form.js and push it to the todo array in the state of the App.js component and 2-  removeTodo() which is responsible for remove any todo when on clicking on its trash icon.
- Form.js is a class based component which is resposible for creating new todo and pass it to App.js via update the props between the two components when the form submitted.
- Todos.js is a function based component which is resposible for render all components via map through all todos in the App.js.state.todos
by passing the todos array through Todos tag which returned in the App.js render method.
