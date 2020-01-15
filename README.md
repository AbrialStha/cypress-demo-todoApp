# Simple ToDo Taking App

A app to demonstrate how to use cypress with create-react-app --typescript

## User Stories

- User can see an input field where he can type in a to-do item
- By pressing a button, the User can submit the to-do item and can see that being added to a list of to-do’s
- User can mark a to-do as completed
- User can remove a to-do item by pressing on a button

## Installing & running Cypress
Installation
```npm i -D cypress```
Running 
```cypress open```
```npm run cypress:open```

## Folder Structure

cypress (Main Folder at the root)

- integration (Resides all the Test code)

- fixtures (Reside all the test data)

- plugins (Reside the plugin supports)

- support (support command similar to utils function)



## For Network Stubbing
Check branch feature/api in todo.spec.js file
```
 beforeEach(() => {
    cy.server();
    cy.route("GET", "/api/todos", "fixture:todos.json").as("getTodos");
    cy.route("POST", "/api/todo", "fixture:addTodo.json").as("addTodo");
    cy.route("DELETE", "/api/todo/*", { msg: "It works" }).as("deleteTodo");
  });
```

## For Code Coverage in create_react_app
Install the cypress Plugins and some dependencies
```
npm i -D @cypress/instrument-cra
npm i -D @cypress/code-coverage nyc istanbul-lib-coverage
```
Add codecoverage support command in ```cypress/support/index.js```
```
import '@cypress/code-coverage/support'
```
Register tasks in your ```cypress/plugins/index.js``` file
```
module.exports = (on, config) => {
  on('task', require('@cypress/code-coverage/task'))
}
```
Running the app with code coverage
```
react-scripts -r @cypress/instrument-cra start
```
Output of coverage after test run can be fond in ```coverage\Icov-report\```


## References
- https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell
- https://www.cypress.io/blog/2019/12/03/guest-post-writing-e2e-tests-without-breaking-your-development-flow/#testingiskey
- https://www.cypress.io/blog/2019/12/06/use-meaningful-smoke-tests/
- https://www.cypress.io/blog/2019/12/18/webcast-recording-how-siemens-sw-hub-increased-their-test-productivity/
- https://www.cypress.io/blog/2019/09/05/cypress-code-coverage-for-create-react-app-v3/


